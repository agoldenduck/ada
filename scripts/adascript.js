// Check which link is current
window.onload = setTimeout(makeCurrent,500);

function makeCurrent() {
    var ab = String(window.location);
    if (ab.indexOf("#") != -1) {
        ab = ab.substring(0,ab.indexOf("#"));
    }
    var nelems = document.getElementsByTagName("a"), i;
    for (i in nelems) {
        if (( nelems[i].parentNode.nodeName == "LI") && (nelems[i].href == ab )) {
            nelems[i].style.color = "#FF740D";
        }
    }
}

// Make the background black to increase visibility of the text
var bkgrd = true;

function darkBackground(x) {
    if (bkgrd == true) {
        x.style.backgroundColor = "#000";
        bkgrd = false;
    }
    
    else {
        x.style.backgroundColor = "";
        bkgrd = true;
    }
}

// Make the plus change colour onclick and onmouseover
var plus = true;
var open = true;

function colourPlus(x) {
    if (plus == true) {
        x.style.backgroundColor = "#000";
        x.style.borderColor = "#fff";
        document.getElementById('plus').src = "images/plus_white.png";
        plus = false;
    }
    
    else {
        x.style.backgroundColor = "";
        if (open == true) {
            x.style.borderColor = "";
            document.getElementById('plus').src = "images/plus_black.png";
        }
        else {
            x.style.borderColor = "#FF740D";
            document.getElementById('plus').src = "images/plus_orange.png";
        }
        plus = true;
    }
}

// Display the text of the main page when you click the plus
var artcl = true;

function contentMagic() {
    if (artcl == true) {
        document.getElementById('hidden').style.display = "inline";
        document.getElementById('circle').style.borderColor = "#FF740D";
        document.getElementById('plus').src = "images/plus_orange.png";
        open = false;
        artcl = false;
    }
    
    else {
        document.getElementById('hidden').style.display = "";
        document.getElementById('circle').style.borderColor = "";
        document.getElementById('plus').src = "images/plus_black.png";
        open = true;
        artcl = true;
    }
}

// Test test
var test1 = true;

function hideSection() {
	if (test1 == true) {
		document.getElementById('hideSection').style.display = "none";
		test1 = false;
	}
	else {
		document.getElementById('hideSection').style.display = "";
		test1 = true;
	}
}


// Make my portfolio freaking awesome
var showAll = true;
var showCommercial = true;
var showResidential = true;
var showHeritage = true;
var showRenovations = true;

// window.onload = checkFilter;
    
function checkFilter() {
    if (window.location.hash) {
        x = window.location.hash.substring(1);
        document.getElementById(x).style.backgroundColor = "#FF740D";
        var elems = document.getElementsByTagName('*'), i;
        for (i in elems) {
            if ((' ' + elems[i].className + ' ').indexOf(' item ') > -1) {
                elems[i].style.display = "none";
            }
            if ((' ' + elems[i].className + ' ').indexOf(' text ') > -1) {
                elems[i].style.display = "";
            }
        }
        setTimeout (
            function() {
                for (i in elems) {
                    if ((' ' + elems[i].className + ' ').indexOf(' ' + x + ' ') > -1) {
                        elems[i].style.display = "";
                    }
                }
            },500);
        showAll = false;
        if (x == 'commercial') {
            showResidential = false;
            showHeritage = false;
            showRenovations = false;
        }
        else if (x == 'residential') {
            showCommercial = false;
            showHeritage = false;
            showRenovations = false;
        }
        else if (x == 'heritage') {
            showCommercial = false;
            showResidential = false;
            showRenovations = false;
        }
        else if (x == 'renovations') {
            showCommercial = false;
            showResidential = false;
            showHeritage = false;
        }
    }
}

function chooseFilter(x) {
    if (showAll == true) {
        document.getElementById(x).style.backgroundColor = "#FF740D";
        var elems = document.getElementsByTagName('*'), i;
        for (i in elems) {
            if ((' ' + elems[i].className + ' ').indexOf(' item ') > -1) {
                elems[i].style.display = "none";
            }
            if ((' ' + elems[i].className + ' ').indexOf(' ' + x + ' ') > -1) {
                elems[i].style.display = "";
            }
        }
        showAll = false;
        if (x == 'commercial') {
            showResidential = false;
            showHeritage = false;
            showRenovations = false;
        }
        else if (x == 'residential') {
            showCommercial = false;
            showHeritage = false;
            showRenovations = false;
        }
        else if (x == 'heritage') {
            showCommercial = false;
            showResidential = false;
            showRenovations = false;
        }
        else if (x == 'renovations') {
            showCommercial = false;
            showResidential = false;
            showHeritage = false;
        }
    }
    else if (showAll == false) {
        if (x == 'commercial') {
            if (showCommercial == true) {
                document.getElementById(x).style.backgroundColor = "";
                var elems = document.getElementsByTagName('*'), i;
                for (i in elems) {
                    if ((' ' + elems[i].className + ' ').indexOf(' ' + x + ' ') > -1) {
                        elems[i].style.display = "none";
                    }
                }
                showCommercial = false;
            }
            else {
                document.getElementById(x).style.backgroundColor = "#FF740D";
                var elems = document.getElementsByTagName('*'), i;
                for (i in elems) {
                    if ((' ' + elems[i].className + ' ').indexOf(' ' + x + ' ') > -1) {
                        elems[i].style.display = "";
                    }
                }
                showCommercial = true;
            }
        }
        else if (x == 'residential') {
            if (showResidential == true) {
                document.getElementById(x).style.backgroundColor = "";
                var elems = document.getElementsByTagName('*'), i;
                for (i in elems) {
                    if ((' ' + elems[i].className + ' ').indexOf(' ' + x + ' ') > -1) {
                        elems[i].style.display = "none";
                    }
                }
                showResidential = false;
            }
            else {
                document.getElementById(x).style.backgroundColor = "#FF740D";
                var elems = document.getElementsByTagName('*'), i;
                for (i in elems) {
                    if ((' ' + elems[i].className + ' ').indexOf(' ' + x + ' ') > -1) {
                        elems[i].style.display = "";
                    }
                }
                showResidential = true;
            }
        }
        else if (x == 'heritage') {
            if (showHeritage == true) {
                document.getElementById(x).style.backgroundColor = "";
                var elems = document.getElementsByTagName('*'), i;
                for (i in elems) {
                    if ((' ' + elems[i].className + ' ').indexOf(' ' + x + ' ') > -1) {
                        elems[i].style.display = "none";
                    }
                }
                showHeritage = false;
            }
            else {
                document.getElementById(x).style.backgroundColor = "#FF740D";
                var elems = document.getElementsByTagName('*'), i;
                for (i in elems) {
                    if ((' ' + elems[i].className + ' ').indexOf(' ' + x + ' ') > -1) {
                        elems[i].style.display = "";
                    }
                }
                showHeritage = true;
            }
        }
        else if (x == 'renovations') {
            if (showRenovations == true) {
                document.getElementById(x).style.backgroundColor = "";
                var elems = document.getElementsByTagName('*'), i;
                for (i in elems) {
                    if ((' ' + elems[i].className + ' ').indexOf(' ' + x + ' ') > -1) {
                        elems[i].style.display = "none";
                    }
                }
                showRenovations = false;
            }
            else {
                document.getElementById(x).style.backgroundColor = "#FF740D";
                var elems = document.getElementsByTagName('*'), i;
                for (i in elems) {
                    if ((' ' + elems[i].className + ' ').indexOf(' ' + x + ' ') > -1) {
                        elems[i].style.display = "";
                    }
                }
                showRenovations = true;
            }
        }
    }
    if (showCommercial == false && showResidential == false && showHeritage == false && showRenovations == false) {
        var elems = document.getElementsByTagName('*'), i;
        for (i in elems) {
            if ((' ' + elems[i].className + ' ').indexOf(' item ') > -1) {
                elems[i].style.display = "";
            }
        }
        showAll = true;
        showCommercial = true;
        showResidential = true;
        showHeritage = true;
        showRenovations = true;
    }
}

// Open awesome big arse images
function bigImage(x) {
    x = x.firstElementChild;
    y = document.getElementById('imageBackground');
    y.style.display = "block";
    y = y.firstElementChild.firstElementChild;
    y.src = x.src.slice(0, -4) + "_lg.jpg";
    y.alt = x.alt;
    z = document.getElementById('details');
    z.innerHTML = x.alt;
}

// Clear the big arse image to look at another
function clearImage() {
    document.getElementById('imageBackground').style.display = "";
}

