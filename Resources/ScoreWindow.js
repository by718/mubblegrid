function ScoreWindow() {
	var scoreWindow = Ti.UI.createWindow({backgroundColor:'#fff'});
	var scoreLabel=createScoreLabel();
	scoreWindow.add(scoreLabel);
	
	var progressBar=createProgressBar();
	scoreWindow.add(progressBar);
	
	var scoreValue=createScoreValue();
	scoreWindow.add(scoreValue);
	
	var emailButton=createEmailButton();
	scoreWindow.add(emailButton);
	
	var FaceBookWindow = require('ui/facebook_publish_stream'),
				fbWin = new FaceBookWindow();
	
	scoreWindow.add(fbWin);
	return scoreWindow;	
}


var createEmailButton=function(){
	var emailButton=Titanium.UI.createButton({title:"Email My Score",height:36,left:105,top:181,width:120});
	emailButton.addEventListener('click', function () {
		alert("Alert!");
	}); 
	return emailButton;
};

var createScoreLabel=function(){
	var scoreLabel=Titanium.UI.createLabel({text:"You Score",font:{fontFamily:"Helvetica",fontWeight:"Bold",fontSize:18},height:60,left:34,top:49,width:101});
	return scoreLabel;
}

var createScoreValue=function(){
	var scoreValue=Titanium.UI.createLabel({text:"31",height:28,left:214,top:49,width:20});
	return scoreValue;
};

var createProgressBar=function(){
	var progressBar=Titanium.UI.createProgressBar({max:36,min:0,value:31});
	return progressBar;
};

module.exports = ScoreWindow;
