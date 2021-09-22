function txtMeteor(txt,selector){
	var arr = [];
	for(var n=0;n<txt.length;n++){
		arr.push(txt[n]);
	}
	$(selector).html('');
	if(arr&&arr.length>0){
		var width = $(window).width();
		var height = $(window).height();
		arr.forEach(function(v) {
			var uuid = getUUID();
			var html = '<span class="no_'+uuid+'" style="position: relative;">'+v+'</span>';
			$(selector).append(html);
			var x = $(".no_"+uuid).position().top;
			var y = $(".no_"+uuid).position().left;
			var top = randomNum(height-y,(0-y));
			var left = randomNum(width-x,(0-x));
			//console.log('top',top);
			//console.log('left',left);
			$(".no_"+uuid).css('top',top+'px');
			$(".no_"+uuid).css('left',left+'px');
			$(".no_"+uuid).animate({top:"0",left:"0"},1000);
		});
	}
}
function getUUID() {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}
function randomNum(max,min){
	return parseInt(Math.random() * (max - min + 1) + min);
}
