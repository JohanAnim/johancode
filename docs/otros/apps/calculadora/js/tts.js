responsiveVoice  .setDefaultVoice("Spanish Latin American Female")  
var voicelist = responsiveVoice.getVoices();
	var vselect = $("#voiceselection");
$.each(voicelist, function() {
  vselect.append($("<option >").val(this.name).text(this.name));	


});


playbutton.onclick = function() {

  responsiveVoice.speak(($('.mensaje').val())?$('.mensaje').val():$('.mensaje').attr("placeholder"),$('#voiceselection').val());
        $('.mensaje').focus();
        
      };
       playshield.onclick = function() {
         responsiveVoice.speak(($('.mensaje').val())?$('.mensaje').val():$('.mensaje').attr("placeholder"),$('#voiceselection').val());$('.mensaje').focus();
        };
          $('#voicetestdiv').hide();
            $('#waitingdiv').show();
              responsiveVoice.OnVoiceReady = function() {
                    $('#voicetestdiv').fadeIn(0.5);$('#waitingdiv').fadeOut(0.5);$('.mensaje').focus();
                    }
