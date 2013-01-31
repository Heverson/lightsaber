$('document').ready(function(){
	$('#laser').hide();
	$('#punho').click(function(){
		var lightsaber = new LightSaber;
		lightsaber.ligarLightSaber();
	});
});

// Controle da espada Jedi 
var LightSaber = function(){

	this.disp = true;

	this.ligarLightSaber = function(){
		
		if (this.disp) {
			this.disp = false;
			if (!$('#laser').is(':visible')) {
				$('#laser').show();
					
					this.somLightSaber	;
				$('#laser').animate({
					width: '800px'
				}, 800, function(){
					this.disp = true;
				});
			}
			else{
				var audio = this.somLightSaber;
					audio.desligar;
				$('#laser').animate({
					width: '0px'
				}, 1000, function(){
					$('#laser').hide();
					this.disp = true;
				});
			}
		}
	}

	this.somLightSaber = function(){
		
		this.audio = new Audio();

		//add script de audio
		this.ligar = function(){
			this.audio.src = "'audio/ltsaberon01.wav'";			
			this.audio.volume=6;
			this.audio.play();
			alert('asd');
		};

		var desligar = function() {
			this.audio.src = "'audio/ltsaberoff01.wav'";			
			this.audio.pause();
			this.audio.volume=6;
		}
	}
}


		