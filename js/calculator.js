export class Calculator {
    set firstNumber(firstNumber) {
        this._firstNuber = firstNumber;
    }

    set secondNumber(secondNumber) {
        this._secondNumber = secondNumber;
    }

    set action(action) {
        this._action = action;
    }

    get firstNumber() {
        return this._firstNuber;
    }

    get secondNumber() {
        return this._secondNumber;
    }

    get result() {
        return this._result;
    }

    get action() {
        return this._action;
    }

    calculateResult () {
        this._result = this._firstNuber;
        switch (this._action) {
            case '+':
                this._result += this._secondNumber;
                break;
            case '-':
                this._result -= this._secondNumber;
                break;
            case '*':
                this._result *= this._secondNumber;
                break;
            case '/':
                this._result /= this._secondNumber;
                break;
        }
        console.log(this._result);
    }

    
};