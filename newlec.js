class Context {
  constructor() {
    this.maincanvas = null; //Fruits Ninja Main Canvas 넘기기
    this.gamecanvas = null; //게임 켄버스 전역으로 설정
    this.homecanvas = null;
    this.settingcanvas = null;
  }
}

export default new Context(); //객체를 보낼때 x의 값만 보내주면
