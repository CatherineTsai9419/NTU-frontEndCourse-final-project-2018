$(function() {
    var count = 3;
    var i = null;
    var speed = 80;
    var ok = null;
    var count = null;
    var nowcount = null;
    var n = 5;
    var paly = false;
    var xq = 0;

    function dong() {
        if (nowcount > count) {
            setTimeout(function() {
                paly = false;
                alert("恭喜你獲得免費貼圖!點擊下方按鈕進行下載");
            }, 500);
        } else {
            nowcount += 1;
            if (i > 10) {
                xq += 1;
                if (xq == n - 1) {
                    speed = 300;
                };
                $(".lottery-unit").removeClass("select");
                $(".lottery-unit-11").addClass("select");
                i = 0;
            } else {
                $(".lottery-unit").removeClass("select");
                $(".lottery-unit-" + i).addClass("select");
                i += 1;
            };
            setTimeout(dong, speed);
        };

    };
    $(".start").click(function() {
        if (!paly) {
            if (count == 0) {
                alert("已经没有机会，下次再来！");
            } else {
                ok = Math.floor((Math.random() * 12)); //产生0-11的整数，标记中奖位置
                count = n * 12 + ok; //总变化次数
                nowcount = 0; //当前的变化位置
                i = 0; //初始位置，
                paly = true;
                count -= 1;
                dong();
            };

        } else {

        };

    });
});