require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Player":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'c2f89wntsNFPZuSsG/dho/s', 'Player');
// Script/Player.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        //プレイヤーの最大滞空時間
        jumpDurationTime: 0.6,
        //プレイヤーのジャンプの高さ
        jumpHeight: 200,
        //ジャンプ中かどうか
        _isJumping: false
    },

    onLoad: function onLoad() {
        //タッチリスナーを初期化
        this.SetTouchEvent();
    },
    //タッチイベントの登録
    SetTouchEvent: function SetTouchEvent() {
        //ラムダ式内でこのクラスのthisを使えるようにするために
        //selfを用意する
        var self = this;
        //シングルタッチ
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swollowTouch: true,
            //タッチ開始
            onTouchBegan: function onTouchBegan(touch, event) {
                //プレイヤーをジャンプさせる
                self.jumpPlayer();
                //以降のイベントも取得する場合はtrueを返すよようにする
                return true;
            }
        }, self.node);
    },

    //プレイヤーのジャンプ
    jumpPlayer: function jumpPlayer() {
        //ジャンプ中は反応させないようにする
        //if (this._isJumping) {
        //    return;
        //}
        //アニメーションをジャンプ用に変更する
        var anim = this.node.getComponent(cc.Animation);
        anim.play('PlayerJump');

        //ジャンプ中
        this._isJumping = true;
        //無名関数内でメソッド内の変数を扱うためにselfを用意する
        var self = this;

        //cc.jumpBy(時間,方向x,方向y,高さ,回数)
        var jumpAction = cc.JumpBy(this.jumpDurationTime, 0, 0, this.JumpHeight, 1);
        //着地したらジャンプフラグを解除する
        var endfunction = cc.callFunc(function () {
            self._isJumping = false;
            //走りモーションに戻す
            anim.play('PlayerRunning');
        }, this);
        //アクション開始
        this.node.runAction(cc.sequence(jumpAction, endfunction));
    }
});

cc._RF.pop();
},{}],"ScreenScroll":[function(require,module,exports){
"use strict";
cc._RF.push(module, '91564HR5I9MQpLagttZP2ct', 'ScreenScroll');
// Script/ScreenScroll.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        // スクロール用背景のもう一枚をい指定
        otherBgSprite: {
            default: null,
            type: cc.Sprite
        },
        // 移動スピード
        moveSpeed: 500
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        //[移動量]dt(1フレームにかかった時間)を掛けることで、FPSに依らないスピードで移動させる
        var moveX = this.moveSpeed * dt;

        // 左端まで移動したら、右側の背景画像の右側に配置する
        if (this.node.x <= -this.node.width) {
            this.node.x = this.otherBgSprite.node.x + this.otherBgSprite.node.width - moveX;
        } else {
            //移動
            this.node.x = this.node.x - moveX;
        }
    }
});

cc._RF.pop();
},{}]},{},["Player","ScreenScroll"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGxheWVyLmpzIiwiYXNzZXRzL1NjcmlwdC9TY3JlZW5TY3JvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOUTs7QUFTWjtBQUNBO0FBQ0E7QUFDQztBQUNEO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBVG1CO0FBVy9COztBQUVEO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNIO0FBQ0Q7QUFDQTtBQUdIO0FBOURJOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTs7QUFFSTtBQUNBO0FBQ0k7QUFDQTtBQUZVO0FBSWQ7QUFDQTtBQVJROztBQVdaO0FBQ0E7O0FBSUE7QUFDQztBQUNHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0M7QUFDRztBQUNBO0FBQ0g7QUFDSDtBQS9CRyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v44OX44Os44Kk44Ok44O844Gu5pyA5aSn5rue56m65pmC6ZaTXG4gICAgICAgIGp1bXBEdXJhdGlvblRpbWU6IDAuNixcbiAgICAgICAgLy/jg5fjg6zjgqTjg6Tjg7zjga7jgrjjg6Pjg7Pjg5fjga7pq5jjgZVcbiAgICAgICAganVtcEhlaWdodDogMjAwLFxuICAgICAgICAvL+OCuOODo+ODs+ODl+S4reOBi+OBqeOBhuOBi1xuICAgICAgICBfaXNKdW1waW5nOiBmYWxzZSxcbiAgICB9LFxuICAgIFxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIC8v44K/44OD44OB44Oq44K544OK44O844KS5Yid5pyf5YyWXG4gICAgdGhpcy5TZXRUb3VjaEV2ZW50KCk7XG4gICAgfSxcbiAgICAvL+OCv+ODg+ODgeOCpOODmeODs+ODiOOBrueZu+mMslxuICAgIFNldFRvdWNoRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL+ODqeODoOODgOW8j+WGheOBp+OBk+OBruOCr+ODqeOCueOBrnRoaXPjgpLkvb/jgYjjgovjgojjgYbjgavjgZnjgovjgZ/jgoHjgatcbiAgICAgICAgLy9zZWxm44KS55So5oSP44GZ44KLXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy/jgrfjg7PjgrDjg6vjgr/jg4Pjg4FcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLlRPVUNIX09ORV9CWV9PTkUsXG4gICAgICAgICAgICBzd29sbG93VG91Y2g6IHRydWUsXG4gICAgICAgICAgICAvL+OCv+ODg+ODgemWi+Wni1xuICAgICAgICAgICAgb25Ub3VjaEJlZ2FuOiBmdW5jdGlvbih0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAvL+ODl+ODrOOCpOODpOODvOOCkuOCuOODo+ODs+ODl+OBleOBm+OCi1xuICAgICAgICAgICAgICAgIHNlbGYuanVtcFBsYXllcigpO1xuICAgICAgICAgICAgICAgIC8v5Lul6ZmN44Gu44Kk44OZ44Oz44OI44KC5Y+W5b6X44GZ44KL5aC05ZCI44GvdHJ1ZeOCkui/lOOBmeOCiOOCiOOBhuOBq+OBmeOCi1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgfSxcbiAgICBcbiAgICAvL+ODl+ODrOOCpOODpOODvOOBruOCuOODo+ODs+ODl1xuICAgIGp1bXBQbGF5ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL+OCuOODo+ODs+ODl+S4reOBr+WPjeW/nOOBleOBm+OBquOBhOOCiOOBhuOBq+OBmeOCi1xuICAgICAgICAvL2lmICh0aGlzLl9pc0p1bXBpbmcpIHtcbiAgICAgICAgLy8gICAgcmV0dXJuO1xuICAgICAgICAvL31cbiAgICAgICAgLy/jgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLjgrjjg6Pjg7Pjg5fnlKjjgavlpInmm7TjgZnjgotcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGFuaW0ucGxheSgnUGxheWVySnVtcCcpO1xuICAgICAgICBcbiAgICAgICAgLy/jgrjjg6Pjg7Pjg5fkuK1cbiAgICAgICAgdGhpcy5faXNKdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgLy/nhKHlkI3plqLmlbDlhoXjgafjg6Hjgr3jg4Pjg4nlhoXjga7lpInmlbDjgpLmibHjgYbjgZ/jgoHjgatzZWxm44KS55So5oSP44GZ44KLXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIC8vY2MuanVtcEJ5KOaZgumWkyzmlrnlkJF4LOaWueWQkXks6auY44GVLOWbnuaVsClcbiAgICAgICAgdmFyIGp1bXBBY3Rpb24gPSBjYy5KdW1wQnkodGhpcy5qdW1wRHVyYXRpb25UaW1lLCAwLCAwLCB0aGlzLkp1bXBIZWlnaHQsIDEpO1xuICAgICAgICAvL+edgOWcsOOBl+OBn+OCieOCuOODo+ODs+ODl+ODleODqeOCsOOCkuino+mZpOOBmeOCi1xuICAgICAgICB2YXIgZW5kZnVuY3Rpb24gPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi5faXNKdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvL+i1sOOCiuODouODvOOCt+ODp+ODs+OBq+aIu+OBmVxuICAgICAgICAgICAgYW5pbS5wbGF5KCdQbGF5ZXJSdW5uaW5nJyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAvL+OCouOCr+OCt+ODp+ODs+mWi+Wni1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAganVtcEFjdGlvbixcbiAgICAgICAgICAgIGVuZGZ1bmN0aW9uKSk7XG4gICAgfSxcbn0pO1xuIiwiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICBcbiAgICAgICAgLy8g44K544Kv44Ot44O844Or55So6IOM5pmv44Gu44KC44GG5LiA5p6a44KS44GE5oyH5a6aXG4gICAgICAgIG90aGVyQmdTcHJpdGU6e1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8g56e75YuV44K544OU44O844OJXG4gICAgICAgIG1vdmVTcGVlZDogNTAwLFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAvL1vnp7vli5Xph49dZHQoMeODleODrOODvOODoOOBq+OBi+OBi+OBo+OBn+aZgumWkynjgpLmjpvjgZHjgovjgZPjgajjgafjgIFGUFPjgavkvp3jgonjgarjgYTjgrnjg5Tjg7zjg4njgafnp7vli5XjgZXjgZvjgotcbiAgICAgICAgdmFyIG1vdmVYID0gdGhpcy5tb3ZlU3BlZWQgKiBkdDtcbiAgICAgICAgXG4gICAgICAgIC8vIOW3puerr+OBvuOBp+enu+WLleOBl+OBn+OCieOAgeWPs+WBtOOBruiDjOaZr+eUu+WDj+OBruWPs+WBtOOBq+mFjee9ruOBmeOCi1xuICAgICAgICBpZih0aGlzLm5vZGUueCA8PSAtdGhpcy5ub2RlLndpZHRoKSB7XG4gICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5vdGhlckJnU3ByaXRlLm5vZGUueCArIHRoaXMub3RoZXJCZ1Nwcml0ZS5ub2RlLndpZHRoIC0gbW92ZVhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v56e75YuVXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMubm9kZS54IC0gbW92ZVg7XG4gICAgICAgIH1cbiAgICAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==