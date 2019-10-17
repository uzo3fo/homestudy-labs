// a + b * c =>   abc*+
function solution(expression) {
	//code goes in here....
	//seprate the operators from the operands
	let operators = expression.replace(/[0-9a-z\s]/gi, '').split('');
	let operands = expression.replace(/[^0-9a-z]/gi, '').split('');
   //for expressions without brackets
	if(operators.length === 1){return operands.concat(operators).join().replace( /,/g, "" );}
	if(operators.length == 2){
		let operand1 = operands.slice(0, 2);
		let operand2 = operands.slice(2);
		let operator1 = operators.slice(0, 1);
		let operator2 = operators.slice(1);
		let firstConcat = operand1.concat(operator1);
		let secondConcat = operand2.concat(operator2);
		return firstConcat.concat(secondConcat).join().replace( /,/g, "" );
	}
	//for expressions with brackets
	const index = operators.findIndex(operate => operate === "(");
	const index1 = operators.findIndex(operate => operate === ")");
	let operatorsInsideBrackets = operators.slice(index+1, index1).join().replace( /,/g, "" );
	let operatorsBeforeBrackets = operators.slice(index-1, index).join().replace( /,/g, "" );
	let operatorsAfterBrackets = operators.slice(index1+1).join().replace( /,/g, "" );
	let operandsAfterBracket = operands.slice(index1).join().replace( /,/g, "" );
	let operandsBeforeBracket = operands.slice(0, index1).join().replace( /,/g, "" );
	let operandsInsideBracket = operands.slice(index, index1).join().replace( /,/g, "" );

	if(operatorsInsideBrackets.includes('-')){
    	let indexOfNegativeSign = operatorsInsideBrackets.indexOf(sign => sign === "-");
    	let negativeSign = operatorsInsideBrackets.slice(indexOfNegativeSign);
    	let negativeNum = operandsInsideBracket.slice(indexOfNegativeSign);
    	let negativeConcat =negativeNum.concat(negativeSign);
    	let operandConcat =operandsBeforeBracket.slice(0, indexOfNegativeSign)
    	let operatorConcat =operatorsInsideBrackets.slice(0, indexOfNegativeSign)
    	operatorsAfterBrackets = operatorsAfterBrackets.split('').reverse().join('');
    	return operandConcat.concat(operatorConcat, negativeConcat, operatorsBeforeBrackets, operandsAfterBracket, operatorsAfterBrackets)
    }

	if(operatorsInsideBrackets.startsWith('*') === false){
	   operatorsInsideBrackets = operatorsInsideBrackets.split('').reverse().join('');
	   let result = operands.concat(operatorsInsideBrackets);
	   return result.concat(operatorsBeforeBrackets).join().replace( /,/g, "" );
		} else  operatorsInsideBrackets;

		
}


module.exports = solution;
