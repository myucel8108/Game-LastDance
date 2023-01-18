import Background from "../item/background.js";
import HomeBtn from "../homeItem/homeBtn.js";

export default class SettingCanvas {

  constructor() {
    this.dom = document.querySelector(".setting-canvas");
    this.dom.focus();
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.dom.getContext("2d");

    //필요한 객체
    this.background = new Background();
    //**음량 설정 버튼 필요, 창 필요

    //콜백 함수
    this.onGoHome = null; 

    //다시 main-canvas로 이동
    this.homeBtn = new HomeBtn();
    this.homeBtn.homeClicked = this.homeBtnClickedHandler.bind(this);

    this.frame = 1000/60;
    
    //이벤트
    this.dom.onclick = this.clickHandler.bind(this);

  }

  run() {

    this.draw();
    
    window.setTimeout(() =>{
      this.run();
    }, this.frame);

  }

  draw() {
    this.background.draw(this.ctx);
    this.homeBtn.draw(this.ctx);

    this.ctx.strokeRect(40,200,500,400);
    this.ctx.font =  "48px serif";
    this.ctx.fillText("음량 조절 부분", 50, 300);
  }

  clickHandler(e) {
    this.homeBtn.notifyClick(e.x, e.y);
  }

  homeBtnClickedHandler() {
    if(this.onGoHome != null)
    this.onGoHome();
  }
  
}