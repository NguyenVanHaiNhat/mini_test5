class customer {
    constructor(name, age, point) {
        this.name = name;
        this.age = age;
        this.point = point;
    }

    promotion(){
        if (this.point > 100){
            console.log(this.name + " khuyến mãi 5%");
        } else
            console.log(this.name + " không có khuyến mãi");
    }
}

let cus1 = new customer("nhat", 18, 120);
let cus2 = new customer("hai", 10, 20);

cus1.promotion();
cus2.promotion();