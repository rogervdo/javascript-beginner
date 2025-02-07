guestCount = document.getElementById("guest-count")
guestNum = 0

function addGuest(num){
    guestNum += num
    guestCount.textContent = guestNum
    highlightWinner()
}

homeCount = document.getElementById("home-count")
homeNum = 0

function addHome(num){
    homeNum += num
    homeCount.textContent = homeNum
    highlightWinner()
}

function highlightWinner() {
    if (guestNum > homeNum) {
        document.getElementById("guest-count").style.color = "darkred";
        document.getElementById("home-count").style.color = "black";
    }
    else if (homeNum > guestNum) {
        document.getElementById("guest-count").style.color = "black";
        document.getElementById("home-count").style.color = "darkgoldenrod";
    }
    else {
        document.getElementById("guest-count").style.color = "darkred";
        document.getElementById("home-count").style.color = "darkgoldenrod";
    }
}
