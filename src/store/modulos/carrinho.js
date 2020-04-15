export default{
    namespaced: true,
    state:{
        produtos: [],
    },
    getters:{
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations:{
        adicionarProduto(state, produto){
            state.produtos.push(produto)
        },
    },
    actions:{
        adicionarProduto(context, payload){
            setTimeout(()=>{
                context.commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}