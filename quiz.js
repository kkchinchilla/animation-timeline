const first_answer = document.querySelector('#q1');
const second_name = document.getElementsByName('year');
const third_name = document.getElementsByName('character');
const fourth_name = document.getElementsByName('person');
const send = document.querySelector('#send');

let answer_1 = document.querySelector('#a1');
let n1 = document.querySelector('.n1');

let answer_2 = document.querySelector('#a2');
let n2 = document.querySelector('.n2');

let answer_3 = document.querySelector('#a3');
let n3 = document.querySelector('.n3');

let answer_4 = document.querySelector('#a4');
let n4 = document.querySelector('.n4');

send.addEventListener('click', function (e) {
    e.preventDefault()
    if (first_answer.value == "Steamboat Willie" || first_answer.value == "steamboat willie" || first_answer.value == "Steamboat willie") {
        answer_1.innerHTML = "You're Correct!";
        n1.classList.remove('active');
    }

    else {
        n1.classList.add('active');
        answer_1.innerHTML = "The correct answer is 'Steamboat Willie.'";
    }


    let secondAns = ""
    for (let i = 0; i < second_name.length; i++) {
        if (second_name[i].checked) {
            secondAns = second_name[i].value;
        }
    }

    if (secondAns == "y2") {
        answer_2.innerHTML = "You're Correct!";
        n2.classList.remove('active');
    }

    else {
        n2.classList.add('active');
        answer_2.innerHTML = "The correct answer is '1928.'";
    }

    let thirdAns = ""
    for (let i = 0; i < third_name.length; i++) {
        if (third_name[i].checked) {
            answer_3.innerHTML = "Wonderful!";
        }

    }

    let fourthAns = ""
    for (let i = 0; i < fourth_name.length; i++) {
        if (fourth_name[i].checked) {
            fourthAns = fourth_name[i].value;
        }
    }

    if (fourthAns == "max") {
        answer_4.innerHTML = "You're Correct!";
        n4.classList.remove('active');
    }

    else {
        n4.classList.add('active');
        answer_4.innerHTML = "The correct answer is 'Max Fleischer.'"
    }

});
