class Drop{
    constructor(x,y){
        this.x_pos=x;
        this.y_pos=y;
        this.w=5
        this.h=20;
    }

    display(){
        fill("blue")
        rect(this.x_pos,this.y_pos,this.w,this.h);
    }

    fall(){
        this.y_pos=this.y_pos+15
        if(this.y_pos>=height){
            this.y_pos=0;
        }
    
    }
    
}