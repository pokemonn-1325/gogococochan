cc.Class({
    extends: cc.Component,

    properties: {
    
        // スクロール用背景のもう一枚をい指定
        otherBgSprite:{
            default: null,
            type: cc.Sprite,
        },
        // 移動スピード
        moveSpeed: 500,
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
        //[移動量]dt(1フレームにかかった時間)を掛けることで、FPSに依らないスピードで移動させる
        var moveX = this.moveSpeed * dt;
        
        // 左端まで移動したら、右側の背景画像の右側に配置する
        if(this.node.x <= -this.node.width) {
        this.node.x = this.otherBgSprite.node.x + this.otherBgSprite.node.width - moveX
        } else {
            //移動
            this.node.x = this.node.x - moveX;
        }
     },
});
