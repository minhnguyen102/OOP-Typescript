var Status;
(function (Status) {
    Status[Status["INITIAL"] = 0] = "INITIAL";
    Status[Status["DOING"] = 1] = "DOING";
    Status[Status["FINISH"] = 2] = "FINISH";
    Status[Status["NOT_FINISH"] = 3] = "NOT_FINISH";
})(Status || (Status = {}));
class Task {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
        Task.count++;
        console.log(`Đối tượng thứ ${Task.count} đã được khởi tạo`);
    }
    static getCount() {
        return Task.count;
    }
}
Task.count = 0;
const task1 = new Task("t1", "Learn Ts", Status.DOING);
console.log(Task.count);
console.log(Task.getCount());
