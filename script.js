function verif1()
{
   
  var name=document.getElementById("name").value;
  if(name.length==0)
  {
    //alert("verifier le nom")
    document.getElementById("V_nom").style.display="block"

  }
  else {
    document.getElementById("V_nom").style.display="none" 
   

   name=name.toUpperCase();
    for(i=0;i<name.length;i++)
    {
        if(name[i]<'A' || name[i]>'Z')
         {
            //alert("verifier alphabetique")
            document.getElementById("V_nom").style.display="block"
  
         }
    }
  }
 
   

}

function verif2()
{
   
  var name=document.getElementById("tel").value;
  if(name.length==0)
  {
    //alert("verifier le nom")
    document.getElementById("V_tel").style.display="block"

  }
  else {
    document.getElementById("V_tel").style.display="none" 
   

   
    for(i=0;i<name.length;i++)
    {
        if(name[i]<'0' || name[i]>'9')
         {
            //alert("verifier alphabetique")
            document.getElementById("V_tel").style.display="block"
  
         }
    }
  }
 
   

}



function totalprice() {

    var checkboxes = document.querySelectorAll("input[type=checkbox]");
   
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
           var price=0
            for(i=0;i<checkboxes.length;i++)
            {
          
            if(checkboxes[i].checked)
            {
                price+=Number(checkboxes[i].value)
                document.getElementById("total").innerText=price      
 
            }
          
        }
        })
      });
    
     
    }
    totalprice()



function welcome(){
    document.getElementById("welcome").style.display="block" ;
    document.getElementById("form").style.display="none"

}




