let day="";
let weather="";

function dayWeather(){
    if (day!=="" && weather!==""){
        const text = document.querySelector(".text");
        text.innerText="날씨가 " + weather + "인 " + day + "요일 이네요!";

        if(weather==="맑음"){
            document.body.style.backgroundImage="url('https://w7.pngwing.com/pngs/770/924/png-transparent-white-clouds-illustration-cloud-computing-desktop-iphone-cloud-storage-bluehost-clouds-blue-atmosphere-cloud.png')";
        }else if(weather==="비옴"){
            document.body.style.backgroundImage="url('https://us.123rf.com/450wm/jennybardak/jennybardak2004/jennybardak200400003/145871594-%ED%99%94%EC%9D%B4%ED%8A%B8%EC%97%90-%EC%9B%90%ED%99%9C%ED%95%9C-%EB%B6%88%EA%B7%9C%EC%B9%99%ED%95%9C-%EB%B9%97%EB%B0%A9%EC%9A%B8-%ED%8C%A8%ED%84%B4.jpg?ver=6')";
        }else if(weather==="눈옴"){
            document.body.style.backgroundImage="url('https://mblogthumb-phinf.pstatic.net/20131211_173/time1234time_1386759353062WBHt7_JPEG/39.jpg?type=w2')";
        }
    }
}

const week = document.querySelectorAll(".week");

week[0].addEventListener("click", handleMonClick)
week[1].addEventListener("click", handleTueClick)
week[2].addEventListener("click", handleWedClick)
week[3].addEventListener("click", handleThuClick)
week[4].addEventListener("click", handleFriClick)

function handleMonClick(){
    day = week[0].innerText;
    dayWeather();
}

function handleTueClick(){
    day = week[1].innerText;
    dayWeather();
}
function handleWedClick(){
    day = week[2].innerText;
    dayWeather();
}
function handleThuClick(){
    day = week[3].innerText;
    dayWeather();
}
function handleFriClick(){
    day = week[4].innerText;
    dayWeather();
}

const weat = document.querySelectorAll(".weather");

weat[0].addEventListener("click", handleSunnyClick);
weat[1].addEventListener("click", handleRainClick);
weat[2].addEventListener("click", handleSnowClick);

function handleSunnyClick(){
    weather = weat[0].innerText;
    dayWeather();
}
function handleRainClick(){
    weather = weat[1].innerText;
    dayWeather();
}
function handleSnowClick(){
    weather = weat[2].innerText;
    dayWeather();
}