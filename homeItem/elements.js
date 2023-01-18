export default class Elements{

    constructor() {

        this.imgSubBg = document.querySelector("#home-mask");
        this.imgTtleSub = document.querySelector("#home-desc");
        this.imgTitleFruit = document.querySelector("#logo");
        this.imgTitleNinja = document.querySelector("#ninja");




    }


    draw(ctx) {
        ctx.drawImage(this.imgSubBg,0,0, this.imgSubBg.width * 2.2, this.imgSubBg.height *1.8);
        ctx.drawImage(this.imgTtleSub,0,230,this.imgTtleSub.width * 1.4, this.imgTtleSub.height * 1.4);
        ctx.drawImage(this.imgTitleFruit,25,0,this.imgTitleFruit.width * 1.8, this.imgTitleFruit.height * 1.8);
        ctx.drawImage(this.imgTitleNinja,550,100,this.imgTitleNinja.width * 1.5 , this.imgTitleNinja.height * 1.5  );

    }
}