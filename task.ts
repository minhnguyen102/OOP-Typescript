enum Status {
    INITIAL,
    DOING,
    FINISH,
    NOT_FINISH
}

class Task{
    // property
    id: string
    title: string
    status: Status
    public static count: number = 0

    // constructor : hàm tạo
    constructor(id: string, title: string, status: Status){
        this.id = id
        this.title = title
        this.status = status  
        Task.count++;
        console.log(`Đối tượng thứ ${Task.count} đã được khởi tạo`)
    }
    // Method
    static getCount(){
        return Task.count;
    }
}

const task1 = new Task("t1", "Learn Ts", Status.DOING)
// console.log(task1)

console.log(Task.count) // biến lớp 
console.log(Task.getCount()) // phương thức lớp 


