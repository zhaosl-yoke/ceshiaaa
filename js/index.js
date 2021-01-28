var toos = {
	aaa: function() {
		console.log('aaa');
		this.bbb()
	},
	bbb:function() {
		console.log('bbb');
	}
}