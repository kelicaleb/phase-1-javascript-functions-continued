function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(symbol){
    const innerFunction = (sentence) =>{
        return `You are ${symbol}${sentence}${symbol}!`
    }
    return innerFunction
}

console.log(wrapAdjective())

