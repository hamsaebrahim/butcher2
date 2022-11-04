const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    priceField = document.querySelector("#total-price"),
    price = document.querySelector("#total-price").value,
    orignal = price,
    num = document.querySelector(".num").value;
    numbr = document.querySelector(".num");
    numint = Number(num)
    
    let a = 1;
    plus.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? "0" + a : a;
       numint= a;
       numbr.value = numint
      priceField.value = Number(orignal)*a;
      console.log(numint)
    });

    minus.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        numint= a;
        numbr.value = numint
        priceField.value = Number(orignal)*(a);
      }
    });