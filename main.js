var app = new Vue({
		el:'#app',
		data:{
			myTea:{name:'ダージリン',price:600}
		}
	})

	alert:function aisatsu(message){
		console.log(message);
	}

	aisatsu('おはよう');
	aisatsu('こんにちは');
	aisatsu('こんばんは');