var wz = {};
function initMeteor(selector){
	if($(selector+' #meteor').length>0){
		$(selector+' #meteor').remove();
	}
	var html = '<div id="meteor" style="position: fixed;top:-10000px;left:-1000px;cursor: pointer;">';
			html+='<img src="img/fireball.png" style="width: 100px;position: absolute;top:-40px;left:-50px;"/>';
		html+='</div>';
	$(selector).append(html);
	$(selector).on('mousedown',function(event){
		console.log('start');
	});
	$(selector).on('mousemove',function(event){
		//console.log('move');
		var e = event || window.event;
		//console.log(e.clientX+','+e.clientY);
		wz = {
			x:e.clientX,
			y:e.clientY
		};
		$(selector+' #meteor').css('top',e.clientY+'px');
		$(selector+' #meteor').css('left',e.clientX+'px');
	});
	$(selector).on('mouseup mouseout mouseleave mouseover',function(event){
		console.log('end');
	});
}