class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calArea() {
        return this.height * this.width;
    }
}

const rect = new Rectangle(10,5);
console.log("사각형의 넓이 :" , rect.calArea())
