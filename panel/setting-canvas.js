import Background from "../item/background.js";
import HomeBtn from "../homeItem/homeBtn.js";
import Medal from "../item/medal.js";
import newlec from "../newlec.js";

export default class SettingCanvas {
  constructor() {
    this.dom = document.querySelector(".setting-canvas");
    this.dom.focus();
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.dom.getContext("2d");

    //필요한 객체
    this.background = new Background();
    this.medal = new Medal();
    //**음량 설정 버튼 필요, 창 필요

    //콜백 함수
    this.onGoHome = null;

    //다시 main-canvas로 이동
    this.homeBtn = new HomeBtn();
    this.homeBtn.homeClicked = this.homeBtnClickedHandler.bind(this);

    this.frame = 1000 / 120;

    //이벤트
    this.dom.onclick = this.clickHandler.bind(this);
  }

  run() {
    this.draw();

    window.setTimeout(() => {
      this.run();
    }, this.frame);
  }

  draw() {
    this.medal.draw(this.ctx);
    this.background.draw(this.ctx);
    this.homeBtn.draw(this.ctx);
    this.medal.draw(this.ctx);

    
    newlec.sound.draw(this.ctx);
  }

  clickHandler(e) {
    this.homeBtn.notifyClick(e.x, e.y);
    newlec.sound.notifyClickVolumePlus(e.x, e.y);
    newlec.sound.notifyClickVolumeMinus(e.x, e.y);
  }

  homeBtnClickedHandler() {
    if (this.onGoHome != null) this.onGoHome();
  }
}
