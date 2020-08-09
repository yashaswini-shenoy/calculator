var t=false;
var ope=2;
function getNumber()
{
  var a=document.getElementsByClassName("number");
  for(var i=0;i<a.length;i++)
  {  
     
        a[i].addEventListener('click', function my(){
          
          if(t==true)
          {
            t=false;
          document.getElementById("history").innerText="";
          document.getElementById("result").innerText="";
          ope=1;
          }
          if(document.getElementById("history").innerText=='0')
          document.getElementById("history").innerText=this.innerText; 
          else
        document.getElementById("history").innerText+=this.innerText;
        
    }

      )
      
  }
    
  
}

function getOperatr(){
  var a=document.getElementsByClassName("operator-class");
  console.log(a[0]);
  a[0].addEventListener('click',function(){
    var his=document.getElementById("history").innerText;
    console.log(typeof (his));
    console.log(his.length);
    console.log(his);
    his=his.slice(0,-1);
    console.log(his);
    document.getElementById("history").innerText=his;
  })
  a[1].addEventListener('click',function(){
    document.getElementById("history").innerText="";
    document.getElementById("result").innerText="";
  })
  a[2].addEventListener('click',function(){
    console.log(ope);
    if(ope==2)
  { 
    document.getElementById("result").innerText="Invalid Syntax";
    ope=1;
  }
  else{
    ope=1;
    var his=document.getElementById("history").innerText;
    document.getElementById("result").innerText=eval(his);
  }
  t=true;
  
  })
}
getOperatr();

function getOperator()
{
  var a=document.getElementsByClassName("operator");
  for(var i=0;i<a.length;i++)
  {  
     
        a[i].addEventListener('click', function my(){
          if(ope==0)
          {
          ope=2;
          console.log("hi");
          }
           
          t=false;
          if(ope!=2)
          ope=0;
        document.getElementById("history").innerText+=this.innerText; 
  }

      )
      
  }
    
  
}
var his=document.getElementById("history").innerHTML;
console.log(his);
getNumber();
getOperator();
