class Chart {
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    drawLine(){
        console.log('draw line');
    }
}

class BarChart extends Chart{
    constructor(width,height){
        super(width,height)
    }
    draw(){
        this.drawLine(); //draw line
        console.log(`draw ${this.width} X ${this.height} barChart`);  //draw 100 X 100 barChart
    }
}

const barchart1 = new BarChart(100,100)
barchart1.draw()