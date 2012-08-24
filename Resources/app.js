// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup({
	
});

//
// Welcome/Home
//
var WelcomeWindow = require('WelcomeWindow'),
	welcomeWin = new WelcomeWindow();

var welcomeTab = Titanium.UI.createTab({  
    title:'Welcome',
    window:welcomeWin
});	

welcomeWin.open();

tabGroup.addTab(welcomeTab);

//
// Help/Instructions
//
var HelpWindow = require('HelpWindow'),
	helpWin = new HelpWindow();

/*var helpTab = Titanium.UI.createTab({  
    title:'Instructions',
    window:helpWin
});*/	

//tabGroup.addTab(helpTab);

//
// Scan 
//
/*var ScanWindow = require('ScanWindow'),
	scanWin = new ScanWindow();
*/
/*var scanTab = Titanium.UI.createTab({  
    title:'Scan',
    window:scanWin
});	

tabGroup.addTab(scanTab);
*/
// Scan Results
//
var ResultsWindow = require('ResultsWindow'),
	resultsWin = new ResultsWindow();

var resultsTab = Titanium.UI.createTab({  
    title:'Results',
    window:resultsWin
});	

tabGroup.addTab(resultsTab);

// Score Window
var ScoreWindow = require('ScoreWindow'), 
	scoreWin = new ScoreWindow();

var scoreTab = Titanium.UI.createTab({  
    title:'Score',
    window:scoreWin
});	

tabGroup.addTab(scoreTab);

// Launch windows
//tabGroup.open();
