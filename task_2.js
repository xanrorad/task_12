function Summator(){  
    var __firstNumber = 0;  
    var __secondNumber = 0;  
    this.result = 0;  
    function validNumber(firstNumber, secondNumber){  
        if (typeof (firstNumber) === "number"){  
            __firstNumber = firstNumber;  
        }  
        if (typeof (secondNumber) === "number"){  
            __secondNumber = secondNumber;  
        }  
    }  
    function calc(firstNumber,secondNumber){  
        return result = __firstNumber + __secondNumber;  
    }  
    this.setGetSum = function(firstNumber,secondNumber){  
        if (firstNumber === undefined && secondNumber === undefined){  
            return result;  
        } else{  
            validNumber(firstNumber, secondNumber);  
            return calc(__firstNumber, __secondNumber);  
        }  
    }  
}  
var sum = new Summator();  
console.log(sum.setGetSum(4,5)); 