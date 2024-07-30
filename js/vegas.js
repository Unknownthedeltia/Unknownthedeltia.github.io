$(function() {
    $('.mainimg-tate').vegas({
        slides: [
            { src: './images/unknownthedeltiatate.png' },	//1枚目の写真指定
            { src: './images/hatatenp.png' },	//2枚目の写真指定
            { src: './images/haligac.png' },	//3枚目の写真指定
            { src: './images/halifumixvi.png' },	//4枚目の写真指定
            { src: './images/halifumippp.png' },	//5枚目の写真指定
            { src: './images/halifuminei.png' },	//6枚目の写真指定
            { src: './images/halinpsre.png' },	//7枚目の写真指定
            { src: './images/halinpm1.png' },	//8枚目の写真指定
            { src: './images/halinp05.png' },	//9枚目の写真指定

        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 6000,				//次の画像を表示するまでの時間
		animationDuration: 8000,	//アニメーション間の引き継ぎタイミング。
		timer: false,				//プログレスバーを非表示に。
    });
});


$(function() {
    $('.mainimg-yoko').vegas({
        slides: [
            { src: './images/unknownthedeltiatate.png' },	//1枚目の写真指定
            { src: './images/hatatenp.png' },	//2枚目の写真指定
            { src: './images/haligac.png' },	//3枚目の写真指定
            { src: './images/halifumixvi.png' },	//4枚目の写真指定
            { src: './images/halifumippp.png' },	//5枚目の写真指定
            { src: './images/halifuminei.png' },	//6枚目の写真指定
            { src: './images/halinpsre.png' },	//7枚目の写真指定
            { src: './images/halinpm1.png' },	//8枚目の写真指定
            { src: './images/halinp05.png' },	//9枚目の写真指定
        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 6000,				//次の画像を表示するまでの時間
		animationDuration: 8000,	//アニメーション間の引き継ぎタイミング。
		timer: false,				//プログレスバーを非表示に。
        
    });
});
