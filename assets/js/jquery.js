$(document).ready(function(){
    $(".thumbnail").click(function(){
        $ (this).hide();
        $(".naeem").click(function(){
          $(".thumbnail").show();
      });
    });


  $("#fname").focusout(function(){ 
      var fname= $("#fname").val();
      if(fname.length<2 || fname.length>20){
          $("#smname1").removeClass('d-none');
          $("#smname1").text('Enter You 2-20 charecter');
      };
     });
  
  $("#lname").focusout(function(){
      var lname= $("#lname").val();
      if(lname.length<2 || lname.length>20){
          $("#smname2").removeClass('d-none');
          $("#smname2").text('Enter You 2-20 charecter');
      };
     });
  $('#email').focusout(function(){
         var email= $('#email').val();
         var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if(email.match(pattern)){
             return true;
         }else{
          $("#smname3").removeClass('d-none');
          $("#smname3").text('please Enter a Valid Key');
         }
     });
  $("#cpass").focusout(function(){
         var pass= $('#pass').val();
         var cpass= $('#cpass').val();
         if(pass == cpass){
             return true;
         }else{
          $("#smname4").removeClass('d-none');
          $("#smname4").text('Password De Matched');
         }
     });
     $("#fsubmit").click(function(){
      var fname= $("#fname").val();
      var lname= $("#lname").val();
      var email= $('#email').val();
      var pass= $('#pass').val();
      var cpass= $('#cpass').val();
      if(fname.length<1 || lname.length<1 || email.length<1 || pass.length<1 || cpass.length<1){
          alert('Valo Kore Form Puron koren');
      }
      var check=$("input:checked").length;
      if(check<1){ 
          alert('Check kori But kisu pai na');
      }
  
     });
  });

  
