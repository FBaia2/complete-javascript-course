// let js = "amazing";
// console.log(40 + 30);
// console.log(23)
// let firstName = "bob";
// console.log(firstName)
// firstName = "james";
// console.log(firstName)
// console.log(firstName)
// your mom is gay

// true;
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);
// console.log(typeof "javaScriptIsFun");
// console.log(typeof 1);
// javaScriptIsFun = 1;

// console.log(javaScriptIsFun);
// let age;
// age = 30;
// age = 31;
// const firstName = "Adam";
// firstName = 30;
// let now = 10;
// let then = 20
// const ageJonas = now + then;
// console.log(ageJonas);
// now = 1;
// then = 1
// console.log(ageJonas);

// let x = 10 + 5;
// console.log(x)
// x ++;
// console.log(x)



// const jonasNew = `I'm ${markHeight}` 
// console.log(jonasNew)

// console.log(`this
// is
// sparta`)


// const age = 5;
// const isOldEnough = age >= 18;
// if(isOldEnough) {
//     console.log("old enought to drive 😘😍😒")
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`not old enoug wait another ${yearsLeft} years`)
// }




// const markHeight = 169;
// const markWeight = 78;
// const johnHeight = 195;
// const johnWeight = 92;

// bmiJohn = johnWeight / (johnHeight ** 2);
// bmiMark = markWeight / (markHeight ** 2);

// const markHigherBMI = bmiMark > bmiJohn;

// console.log(markHigherBMI)


// if (markHigherBMI) {
//     console.log(`Mark's BMI is higher than John's!`)
// } else {
//     console.log(`John's BMI is higher than Mark's!`)
// }


// const input = 0;
// console.log((typeof(String(input))))


// const favourite = prompt("this is sparta")


// const DolphinsScores = [100,100,100];
// let sumD = 0;
// const KoalasScores = [100,100,100];
// let sumK = 0;

// for(let i = 0; i < DolphinsScores.length; i++) {
//     sumD += DolphinsScores[i]
//     sumK += KoalasScores[i]          
// }

// const avgD = sumD / DolphinsScores.length;
// const avgK = sumK / KoalasScores.length;

// console.log(avgD, avgK)

// if (avgD > avgK && avgD >= 100) {
//     console.log(`the winner is Dolphins with ${avgD} points!`)
// } else if (avgK > avgD && avgK >= 100) {
//     console.log(`the winner is Koalas with ${avgK} points!`)
// } else if (avgD === avgK && avgD >= 100) {
//     console.log("it's a tie and they won both")
// }





const day = "wednesday"



if (day === "monday") {
    console.log("Plan course structure")
    console.log("Go to coding meetup")
} else if (day === "tuesday") {
    console.log("Prepar theory videos")
} else if (day === "wednesday" || day === "thursday") {
    console.log("whrite code examples")
}else if (day === "saturday" || day === "sunday") {
    console.log("enjoy the weekend")
} else {
    console.log("Not a valid day!")
}


switch(day) {
    case "monday":
        console.log("Plan course structure")
        console.log("Go to coding meetup")
        break
    case "tuesday":
        console.log("Prepar theory videos")
        break
    case "wednesday":
    case "thursday" :
        console.log("whrite code examples")
        break
    case "saturday" :
    case "sunday" :
        console.log("enjoy the weekend")
        break
    default:
        console.log("Not a valid day!")
}