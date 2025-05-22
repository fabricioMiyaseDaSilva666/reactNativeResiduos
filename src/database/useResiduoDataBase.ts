import { useSQLiteContext } from 'expo-sqlite';

export type ResiduoDataBase = {
    id: number
    datinRes: date
    categoria: string
    peso: string
}//Criar o local de varuáveis do Banco

export function useResiduoDataBase(){
    const dataBase = useSQLiteContext()// Acessar todos os métodos do BD

    async function create(data: Omit<ResiduoDataBase, "id">){
        const statement = await dataBase.prepareAsync(   //Só nesse caso a gente usa o $
            "insert into residuo(datinRes, categoria, peso) values($datinRes,$categoria,$peso)"
        )

        try{
            const result = await statement.executeAsync({
                $datinRes: data.datinRes,
                $categoria: data.categoria,
                $peso: data.peso
            })

            //Coletando o último id cadastrado e devolvendo
            const insertedRowId = result.lastInsertRowId.toLocaleString()
            return { insertedRowId }

        }catch(error){
            throw error
        }finally{// finally não é obrigatorio, mas ele é mais seguro
            await statement.finalizeAsync()
        }
    }//Fim do create

    async function consultar(categoria:string){
        try{
            const query = "select * from residuo where categoria like ?"//Interrogação: substituir por qualquer item de busca
            const response = await dataBase.getAllAsync<ResiduoDataBase>(query,`%${categoria}%`)
            return response
        }catch(error){
            throw error
        }
    }//Fim do consultar

    async function remove(id:number){
        try{
            await dataBase.execAsync("Delete from residuo where id = " + id)
        }catch(error){
            throw(error)
        }
    }//Fim do remover

    async function atualizar(data: ResiduoDataBase){
        const statement = await dataBase.prepareAsync(
            "update residuo set datinRes = $datinRes, categoria = $categoria, peso = $peso where id = $id"
        )

        try{
            await statement.executeAsync({
                $id: data.id,
                $datinRes: data.datinRes,
                $categoria: data.categoria,
                $peso: data.peso
            })
        }catch(error){
            throw error
        }finally{
            await statement.finalizeAsync()
        }
    }//Fim do atualizar

    return { create, consultar, remove, atualizar }

}//Fim da função