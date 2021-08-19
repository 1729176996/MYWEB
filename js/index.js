$(function() {
	var vm = new Vue({
		el: "#main",
		data() {
			return {
				time:''
			};
		},
		mounted() {
			this.startGetTime();
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
		},
	})
});
