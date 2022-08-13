const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } 
    else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } 
    else if (display.innerText != "" && item.id == "equal") {
      dis = eval(display.innerText);
      display.innerText = parseFloat(dis.toPrecision(10));
    }
    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } 
    


    else if (item.id == "sqrt") {
      let x = display.innerText;
      let sqrtx = Math.sqrt(x)
      display.innerText = "√("+x+")="+parseFloat(sqrtx.toPrecision(10));
    }

    else if (item.id == "sqr") {
      let x = display.innerText;
      let sqrx = Math.pow(x,2)
      display.innerText = x+"²"+"="+ parseFloat(sqrx.toPrecision(10));
    }


      else if (item.id == "ln") {
      let x = display.innerText;
      let lnx = Math.log(x);
      display.innerText = "ln("+x+")="+parseFloat(lnx.toPrecision(10));

    }

    
    else if (item.id == "fact") {
      num = display.innerText;
      let fact = 1;
      for (i = 1; i <= num; i++) {
        fact *= i;
    }
    display.innerText = num+"!"+"="+fact;
    }

    else if(item.id == "%"){
      let x = display.innerText;
      let val = x/100;
      display.innerText = x+"%"+"="+val;

    }
    else if (item.id == "cosec") {
      let x = display.innerText;
      let cosecx = 1/Math.sin(display.innerText * Math.PI / 180);
      display.innerText = "cosec("+ x + ")" + "=" + parseFloat(cosecx.toPrecision(10));
        } 

    else if (item.id == "sec") {
      let x = display.innerText;
      let secx = 1/Math.cos(display.innerText * Math.PI / 180);
      display.innerText = "sec("+ x + ")" + "=" + parseFloat(secx.toPrecision(10));
    }

    else if (item.id == "cot") {
      let x = display.innerText;
      let cotx = 1/Math.tan(display.innerText * Math.PI / 180);
      display.innerText = "cot("+ x + ")" + "=" + parseFloat(cotx.toPrecision(10));
    } 

    else if(item.id == "bin") {
      let bin = display.innerText;
      var rem,temp,i=1,s=0;
      temp=bin;
      while (temp!=0)
      {
        rem = temp%2;
        s = s + i*rem;
        i = i*10;
        temp = parseInt(temp/2);
      }
      display.innerText = "bin("+bin+")="+s;
    }

    else if (item.id == "sin") {
      let x = display.innerText;
      let sinx = Math.sin(display.innerText * Math.PI / 180);
      display.innerText = "sin("+ x + ")" + "=" + parseFloat(sinx.toPrecision(10));
        } 

    else if (item.id == "cos") {
      let x = display.innerText;
      let cosx = Math.cos(display.innerText * Math.PI / 180);
      display.innerText = "cos("+ x + ")" + "=" + parseFloat(cosx.toPrecision(10));
    }

    else if (item.id == "tan") {
      let x = display.innerText;
      let tanx = Math.tan(display.innerText * Math.PI / 180);
      display.innerText = "tan("+ x + ")" + "=" + parseFloat(tanx.toPrecision(10));
    } 

    else if(item.id == "oct") {
      let oct = display.innerText;
      var rem,temp,i=1,s=0;
      temp=oct;
      while (temp!=0)
      {
        rem = temp%8;
        s = s + i*rem;
        i = i*10;
        temp = parseInt(temp/8);
      }
    display.innerText = "oct("+oct+")="+s;
    }
    else if (item.id == "e") {
      display.innerText = "2.71828182846";
    } 

    else if (item.id == "pi") {
      display.innerText = "22/7";
    } 

    else if (item.id == "neg") {
      let x = display.innerText;
      let negx = 1/x;
      display.innerText = x+ "¯¹"+"="+parseFloat(negx.toPrecision(10));
    }

    // else if (item.id == "") {
    //   let x = Math.(display.innerText * Math.PI / 180);
    //   display.innerText = x.toPrecision(10);
    // }

    else {
      display.innerText += item.id;
    }
  };
});



function equal(){
  
}