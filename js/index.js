$(function() {
	var vm = new Vue({
		el: "#main",
		data() {
			return {
				time:'',
				tabs:[
					{name:'首页',src:''},
					{name:'图片墙',src:'picWall.html'},
				],
				iframeSrc:'',
			};
		},
		mounted() {
			this.startGetTime();
			this.clickTab(this.tabs[0]);
		},
		created() {

		},
		methods: {
			startGetTime() {
				var _this = this;
				setInterval(()=>{
					_this.time = dateFormat(new Date(),'YYYY年MM月DD日 HH:mm:ss');
				},500);
			},
			clickTab(tab){
				this.iframeSrc = tab.src;
			},
		},
	})
});
