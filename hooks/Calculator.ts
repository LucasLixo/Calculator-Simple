export enum Operator {
    addition,
    subtraction,
    multiplication,
    division,
};

export class Calculator {
    private xNumber: string = '';
    private yOperator?: Operator;
    private zNumber: string = '';

    private result?: number;

    constructor() {
    }

    // Setters
    setNumber(n: number): void {
        if (this.yOperator == undefined) {
            this.xNumber = `${this.xNumber}${n.toString()}`;
        } else {
            this.zNumber = `${this.zNumber}${n.toString()}`;
        }
        console.log(`xNumber: ${this.xNumber}, Operator ${this.yOperator}, zNumber: ${this.zNumber}`);
    }
    
    setOperator(o: Operator): void {
        if (this.xNumber !== '') {
            this.yOperator = o;
        }
        console.log(`xNumber: ${this.xNumber}, Operator ${this.yOperator}, zNumber: ${this.zNumber}`);
    }

    // Clear
    clear(): void {
        this.xNumber = '';
        this.yOperator = undefined;
        this.zNumber = '';
        this.result = undefined;
    }

    // Calculate
    calculate(): void {
        switch (this.yOperator) {
            case Operator.addition:
                this.result = parseFloat(this.xNumber) + parseFloat(this.zNumber);
                break;
            case Operator.subtraction:
                this.result = parseFloat(this.xNumber) - parseFloat(this.zNumber);
                break;
            case Operator.multiplication:
                this.result = parseFloat(this.xNumber) * parseFloat(this.zNumber);
                break;
            case Operator.division:
                if (this.zNumber !== '0') {
                    this.result = parseFloat(this.xNumber) / parseFloat(this.zNumber);
                } else {
                    this.result = NaN;  // Evitar divisão por zero
                }
                break;
        }
    }

    // Get operator string
    private getOperator(): string {
        switch (this.yOperator) {
            case Operator.addition:
                return '+';
            case Operator.subtraction:
                return '-';
            case Operator.multiplication:
                return '*';
            case Operator.division:
                return '/';
            default:
                return '';
        }
    }

    // Get result string
    getResultString(): string {
        if (this.result != undefined) {
            return `${this.xNumber} ${this.getOperator()} ${this.zNumber} = ${this.result}`;
        }
        if (this.zNumber != '') {
            return `${this.xNumber} ${this.getOperator()} ${this.zNumber}`;
        }
        if (this.yOperator != undefined) {
            return `${this.xNumber} ${this.getOperator()}`;
        }
        if (this.xNumber != '') {
            return this.xNumber;
        }
        return '';
    }
}
