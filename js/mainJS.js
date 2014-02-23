//This is the main JS page
///This is the header and footer insertion
//create notification div
var noticeDiv = document.createElement('div');
noticeDiv.innerHTML = '<h2>You have been on this boring page for 10 seconds. Would you like to go somewhere else?</h2><br />'+
						'<button id="noticeYes" class="noticeButton">Yes please!</button>'+
						'<button id="noticeNo" class="noticeButton">No way!</button>';
noticeDiv.setAttribute('id','notification');
noticeDiv.style.visibility='hidden';

//header tags
var headerTag = document.createElement('header');
var headerText = '<h1>A Civil Engineer Learning Web Design</h1>' + 
				'<nav>'+
					'<a href="index.html"><button id="homeButton">Home</button></a>'+
					'<a href="html1.html"><button id="html1Button">HTML1</button></a>'+
					'<a href="aboutMe.html"><button id="aboutMeButton">About Me</button></a>'+
				'</nav>';
//footer tags
var footerText = 'Brought to you by a civil engineer';
var footerTag = document.createElement('footer');
//create a set timeout
function stayFunction(){
	noticeDiv.style.visibility="hidden";
	//document.getElementById('homeButton').disabled=false;
	document.getElementById('homeButton').disabled=false;
	document.getElementById('html1Button').disabled=false;
	document.getElementById('aboutMeButton').disabled=false;
	timeLapse.apply();
};
function goFunction(){
	window.location.href = 'https://www.google.com/';
};
//function for getting the header and footer and alert box
var getHeader = function(){
	//this is the container of all the other content between the header and the footer.
	myContainer = document.getElementById('content');
	headerTag.innerHTML = headerText;
	document.body.insertBefore(headerTag,myContainer);
	footerTag.innerText=footerText;
	document.body.appendChild(footerTag);
};
var alertMe = function(){
	noticeDiv.style.visibility="visible";
	//document.getElementsByClassName('navButton').disabled=true;
	document.getElementById('homeButton').disabled=true;
	document.getElementById('html1Button').disabled=true;
	document.getElementById('aboutMeButton').disabled=true;
};
var timeLapse = function(){
	setTimeout(alertMe,10000);
};
var setTitle = function(){
	var page = location.href;
	var title = 'unknown';
	switch(page){
		case 'http://derekshtml1.uphero.com/index.html':
			title = 'Home';
			break;
		case 'http://derekshtml1.uphero.com/html1.html':
			title = 'HTML 1';
			break;
		case 'http://derekshtml1.uphero.com/aboutMe.html':
			title = 'About Me';
			break;
		default:
			title = 'Project 1';
	};
	//console.log(title);
	document.title=title;
};
var getStarted = function(){
	setTitle.apply(); //changes the title of the page
	getHeader.apply(); //adds the header and footer to the page
	//timeLapse.apply(); //runs the popup every 10 seconds
	document.body.appendChild(noticeDiv); //adds the popup div element
	
	var buttonGo = document.getElementById('noticeYes'); //adds the 'Yes' button to the popup
	var buttonStay = document.getElementById('noticeNo'); //adds the 'no' button to the popup
	buttonGo.addEventListener('click',goFunction); //control for the popup 'yes' button
	buttonStay.addEventListener('click',stayFunction); //control for the popup 'no' button
};
//make the getHeader function run when the window loads
window.onload = getStarted;


