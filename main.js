//document title

// let title = document.title;
// window.addEventListener('blur', () => {
//     document.title = 'Please come back!';
// });

// window.addEventListener('focus', () => {
//      title = document.title;
// })
// console.log(title);



// change the input border color
change = () => {
    let input = document.getElementById('inputText').value;
    if (input !== '') {
        document.getElementById('inputText').style.border = '2px solid green';
    }
    else if (input === '') {
        document.getElementById('inputText').style.border = '2px solid red';
    }
}

change2 = () => {
    let input2 = document.getElementById('inputText2').value;
    if (input2 !== '') {
        document.getElementById('inputText2').style.border = '2px solid green';
    }
    else if (input2 === '') {
        document.getElementById('inputText2').style.border = '2px solid red';
    }
}

change3 = () => {
    let input3 = document.getElementById('inputText3').value;
    if (input3 !== '') {
        document.getElementById('inputText3').style.border = '2px solid green';
    }
    else if (input3 === '') {
        document.getElementById('inputText3').style.border = '2px solid red';
    }
}

const d = new Date();
const date = d.getHours();
//console.log(date)

let time = document.getElementById('time');

setInterval(myDate, 1000)

//create a date
function myDate() {

    let date = new Date();
    time.innerHTML = myTime(date);

    function myTime(date) {
        let hour = date.getHours(); //for hrs
        let minute = date.getMinutes(); // for mins
        let second = date.getSeconds(); // for secs
        let amOrpm = hour <= 11 && hour <= 23? 'AM' : 'PM';

        hour = (hour % 12) || 12; // convert to 24 hrs to 12hrs

        hour = time2(hour);
        minute = time2(minute);
        second = time2(second);

        return `${hour}:${minute}:${second} ${amOrpm}`

    }
    function time2(tim) {
        tim = tim.toString(); // toString OR toLocaleString are to convert number to string
        return tim.length < 2? `0${tim}` : tim; // that number "2" in the condition that means single digit of the time which time has 2 digit nor 1 digit

    }
}

//greeting using a date

if(date <= 11) { // 1-11 <= 11hrs
    document.getElementById('greeting').innerHTML = `Goodmorning Joshua!`;
    //console.log('GoodMorning')
}
else if (date <= 17) { // 12-17 <= 17hrs
    document.getElementById('greeting').innerHTML = `Goodafternoon Joshua!`;
    //console.log('GoodAfternoon')
}
else if (date <= 23) { // 18-23 <= 23hrs
   document.getElementById('greeting').innerHTML = 'Goodevening Joshua!';
    //console.log('GoodEvening')
}
else {
    document.getElementById('greeting').innerHTML = `It's midnight Joshua!`;
    //console.log('Midnight') // 24hrs
}

//create an animation progress bar

const progressButton = document.getElementById('press');
const progressText = document.querySelector('#progress-text');
const progressText2 = document.querySelector('#progress-text2');
const progressText3 = document.querySelector('#progress-text3');
const progressText4 = document.querySelector('#progress-text4');
const progressText5 = document.querySelector('#progress-text5');
const prog1 = document.getElementById('prog1');
const prog2 = document.getElementById('prog2');
const prog3 = document.getElementById('prog3');
const prog4 = document.getElementById('prog4');
const prog5 = document.getElementById('prog5');

progressButton.addEventListener('click', progress);
progressButton.onmousedown = progress1;
progressButton.onmouseup = progress2;

setInterval(progress1, 2000)
setInterval(progress2, 2000)

function progress1() {
    progressButton.style.backgroundColor = '#345a4d';
    progressButton.style.color = 'white';
}
function progress2() {
    progressButton.style.backgroundColor = 'white';
    progressButton.style.color = '#345a4d';
}

function progress() {
    let time = null;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;

    let num = 0; 
    let num2 = 0; 
    let num3 = 0; 

    time = setInterval(myFrame, 50)
    time = setInterval(myFrame2, 50)
    time = setInterval(myFrame3, 50) // animation of setInterval

    function myFrame() {
        if(a == 90 || b >= 90 || num >= 90) {
            clearInterval(time)
        }
        else {
            a++;
            b++;
            num++;
            prog1.style.width = `${a}%`;
            prog2.style.width = `${b}%`;
            progressText.innerHTML = `${num}%`;
            progressText2.innerHTML = `${num}%`;
        }
    }

    function myFrame2() {
        if(d >= 85 || num2 >= 85) {
            clearInterval(time)
        }else {
            d++;
            num2++
            prog4.style.width = `${d}%`;
            progressText4.innerHTML = `${num2}%`;
        }
    }

    function myFrame3() {
        if(c >= 50 || e >= 50 || num3 >= 50) {
            clearInterval(time)
        }else {
            c++;
            e++;
            num3++
            prog3.style.width = `${c}%`;
            prog5.style.width = `${e}%`;
            progressText3.innerHTML = `${num3}%`;
            progressText5.innerHTML = `${num3}%`;
        }
    }
}
const scrollBtn = document.getElementById('scrollBtn');

scrollBtn.addEventListener('click', scroll)

function scroll() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}