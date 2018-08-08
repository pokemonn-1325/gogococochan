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