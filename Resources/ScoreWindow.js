function ScoreWindow() {
	var win = Ti.UI.createWindow({
		title: 'Scan',
		backgroundColor: '#ccc',
		tabBarHidden: 'true'
	});
	
	var scoreLabel=Titanium.UI.createLabel({text:"You Score",font:{fontFamily:"Helvetica",fontWeight:"Bold",fontSize:18},height:60,left:40,top:49,width:101});
	win.add(scoreLabel);
	
	
	var progressBar=Titanium.UI.createProgressBar({
	    height:60,right:35,top:49,width:101,
	    min:0,
	    max:36,
	    value:31,
	    color:'blue',
	    font:{fontSize:14, fontWeight:'bold'}
	});
	progressBar.show();
	win.add(progressBar);
	
	var scoreValue=Titanium.UI.createLabel({text:"31",height:28,left:225,top:49,width:20});
	win.add(scoreValue);
	
	var emailButton=Titanium.UI.createButton({title:"Email My Score",height:36,left:105,top:181,width:120});
	emailButton.addEventListener('click', function () {
		var emailDialog = Titanium.UI.createEmailDialog()
		emailDialog.subject = "ACT Practice Test Score";
		emailDialog.toRecipients = ['jose.arzuaga@kaplan.com.com'];
		emailDialog.html = '<b>Appcelerator Titanium Rocks!</b>';
		emailDialog.open();
	});
	win.add(emailButton);
	
	/*var FaceBookWindow = require('ui/facebook_publish_stream'),
				fbWin = new FaceBookWindow();
	
	win.add(fbWin);*/
	return win;	
}
module.exports = ScoreWindow;
