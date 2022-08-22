function saturdayFun(rollerSkate = "This Saturday, I want to roller-skate!"){
    console.log(rollerSkate)
}
saturdayFun("This Saturday, I want to bathe my dog!");
const mondayWork = function(goToTheOffice = "This Monday, I will go to the office."){
    console.log(goToTheOffice);
}
mondayWork("This Monday, I will work from home.");

function wrapAdjective(visual = '*'){
    return function(parameter = "special"){
        let name = "You are ";
        console.log(visual + name + parameter + visual)
    }
}
let result = wrapAdjective()("a hardworker");
let result2 = wrapAdjective("||")("a dedicated programmer");