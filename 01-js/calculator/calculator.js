class Calculator {
    constructor() {
      this.exp = "";
      this.result = "";
    }

    appendToExp(value){
        this.exp += value;
        document.getElementsByClassName("expression")[0].innerHTML = `${this.exp}`;
    }
  
    clear() {
      this.exp = "";
      this.result = 0;
      document.getElementsByClassName("result")[0].innerHTML = `Ans=0`;
      document.getElementsByClassName("expression")[0].innerHTML = "0";
    }
  
    getResult() {
        document.getElementsByClassName("result")[0].innerHTML = `${this.exp}=`;
        document.getElementsByClassName("expression")[0].innerHTML = `${this.result}`;
    }
  
    evaluate() {
      let exp = "";
      //Remove spaces from the expression
      for (let i = 0; i < this.exp.length; i++){
        if (this.exp[i] != " "){
          exp += this.exp[i];
        }
      }
      // calculate the expression
      let val = null;
      try {
        val = eval(exp);
      }
      catch (e) {
        this.result = "Invalid expression";
        console.log("returning....")
        return;
      }
  
      if (isFinite(val)) {
        this.result = val;
      }
      else {
        this.result = "Invalid expression";
      }
    }
  }

const calculation = new Calculator();
const result = document.getElementsByClassName("expression");
console.log(result[0].innerHTML);