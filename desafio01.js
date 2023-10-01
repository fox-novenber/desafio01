
class ProductManager {

    constructor () {
        this.products = []
    }

    addProduct = (objeto) => {
        const {title, description, code} = objeto

        const id = this.getNextId ()

        if (!title || !description) {return}
        if (this.products.some(product => product.code == code)) {return}

        this.products.push ({
            title,
            description,
            code
        })
    }

        getProductById = (code) =>{
            const product = this.products.find (p => p.code === code)
            if (product) return product
            else(console.error('No encontrado'))
        }

        getNextId =()=> {
            const cont = this.products.length
            if(cont === 0) return 1
            const lastArticle = this.products [cont - 1]
            return lastArticle.id + 1
        } 

    }

const productManager = new ProductManager()

const productToAdd = {
    title: 'cerveza',
    description: 'artesanal',
    code: '001'
}

productManager.addProduct(productToAdd)


productManager.addProduct ({
    title: 'vino',
    description: 'blanco',
    code: '002'
})
console.log(productManager)