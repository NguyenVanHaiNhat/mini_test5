class rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getP(){
        return (this.width + this.height) * 2;
    }
    getS(){
        return this.width * this.height;
    }
    draw(){
        let canvas = document.getElementById('draw');
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = "red";
        ctx.fillRect(20,20, this.width, this.height);
    }
}

let rec1 = new rectangle(1000, 2000);
let rec2 = new rectangle(10, 500);

console.log(rec1.getP());
console.log(rec2.getS());

rec2.draw();