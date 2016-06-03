(function($){
jQuery.fn.mnplp = function(options){
	options = $.extend({
		volume: 50,
		playlist: [],
		autostart: false
	}, options);

	var make = function(){
		var $this = $(this);
		var cpl = 0;
		var $audio = new Audio();

		$this.find('.mnpl_volume').slider({
			animate: true,
			range: 'min',
			value: options.volume,
			min: 0,
			max: 1,
			step: 0.01,
			slide: function(event, ui){
				$audio.volume = ui.value;
			}
		});
		
		$this.find('.mnpl_long').slider({
			animate: true,
			range: 'min',
			value: 0,
			min: 0,
			max: 60,
			step: 1,
			slide: function(event, ui){
				$audio.currentTime = ui.value;
			}
		});
		
		$audio.addEventListener('canplay', function(_event){
			if($audio.duration){
				$this.find('.mnpl_all').html(toMinit($audio.duration));
				$this.find('.mnpl_long').slider({'max':$audio.duration});
			}else{
				$this.find('.mnpl_all').html(toMinit(options.playlist[cpl].duration));
				$this.find('.mnpl_long').slider({'max':options.playlist[cpl].duration});
			}
			
			if(options.autostart){
				$audio.play();
				$this.find('.mnpl_tlb_stop').addClass('isplay');
			}else{
				options.autostart = true;
			}
		});
		
		$audio.addEventListener('ended', function(){
			if(cpl == options.playlist.length-1){cpl = -1;}
			init_track(cpl+1);
		});

		$audio.addEventListener('timeupdate', function(){
			$this.find('.mnpl_long').slider({'value':$audio.currentTime});
			$this.find('.mnpl_current').html(toMinit($audio.currentTime));
		});
		
	
		function toMinit(val){
			val = Number(val);
			var ost = Math.floor(val%60);
			if(ost < 10){ost = '0'+ost;}
			return Math.floor(val/60)+':'+ost;
		}
		
		
		function init_track(i){
			cpl = i;
			$audio.src = options.playlist[i].mfile;
			$this.find('.mnpl_title').html(options.playlist[i].title);
			$this.find('.mnpl_author').html(options.playlist[i].author);
			$this.find('.mnpl_art_bg').css('backgroundImage', 'url('+options.playlist[i].background+')');
			
			$this.find('.mnpl_cover_next').attr('src', options.playlist[i].cover);	
			$this.find('.mnpl_cover').stop().animate({'opacity': 0}, 500, function(){
				$(this).attr('src', options.playlist[i].cover);
				$(this).css('opacity', '1'); 
			});

		}

		init_track(cpl);
		for(i=0; i < options.playlist.length; i++){
			$this.find('.mnpl_playlist').append('<span>'+options.playlist[i].author+' - '+options.playlist[i].title+'</span>');
		}
		
		$this.find('.mnpl_playlist span').click(function(){
			init_track($(this).index());
		});

		$this.find('.mnpl_tlb_prev').click(function(){
			if(cpl == 0){cpl = options.playlist.length;}
			init_track(cpl-1);
			return false;
		});
		
		$this.find('.mnpl_tlb_stop').click(function(){
			if($audio.paused){
				$audio.play();
				$(this).addClass('isplay');
			}else{
				$audio.pause();
				$(this).removeClass('isplay');
			}
			return false;
		});
		
		$this.find('.mnpl_tlb_next').click(function(){
			if(cpl == options.playlist.length-1){cpl = -1;}
			init_track(cpl+1);
			return false;
		});
	};
	return this.each(make); 
};
})(jQuery);