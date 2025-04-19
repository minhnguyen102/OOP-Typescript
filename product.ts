class Product {
    title: string
    price: number
    discount: number
    stock: number
    description: string
    status: string
    deleted: boolean

    constructor(title: string, price: number, discount: number, stock: number, description: string, status: string, deleted: boolean){
        this.title = title
        this.price = price
        this.discount = discount
        this.stock = stock
        this.description = description
        this.status = status
        this.deleted = deleted
    } 

    getInfor(){
        console.log(`${this.title} giá ${this.price}VND`)
    }
}

const book = new Product("Đắc nhân tâm", 100000, 10, 10, "Mô tả sách Đắc nhân tâm", "active", false);
console.log(book.discount)
book.getInfor();