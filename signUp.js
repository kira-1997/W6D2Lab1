
function passwordCheck(pass) {
    let msg;
    if (isNaN(pass) || pass < 0 || pass.length<9) {
      msg = "Please only numbers for password and min is 8 numbers";
      window.alert(msg)
      return false;
    }
    else{
      return true;
    } 
  }
  function nameCheck(name) {
    let msg;
    let regex = /^[a-zA-Z]+$/; 
    if (regex.test(name) && name.length>5) {
      return true;
    }else{
      msg = "Please only letters for name and min length is 5 letters";
      window.alert(msg)
      return false;
    } 
  }
  
  function emailCheck(email) {
   let msg;
    let regex = /\S+@\S+\.\S+/;
    if (regex.test(email) && email.length!=0) {
      return true;
    }else{
      msg = "Please enter correct email format";
      window.alert(msg)
      return false;
    }
  
  }
  
  
  let btn=document.getElementById('signIn')
  btn.addEventListener('click',()=>{
     window.open('signIn.html')
  })



















function myAPI(){
    let submit = document.getElementById("submit")
      submit.addEventListener("click", () => {
        let name = document.getElementById("name").value
        let password = document.getElementById("password").value
        let email = document.getElementById("email").value
        if(nameCheck(name) && passwordCheck(password) && emailCheck(email)){
          let notFound=false
          fetch("https://65524db75c69a7790329dc3e.mockapi.io/users")
          .then((response) => response.json())
          .then((data) =>{
            for(let i=0; i<data.length;i++){
              if(data[i].email==email){
                notFound=false;
            }
            else{
              notFound=true;
            }
          }})
             
          if(notFound){ fetch("https://65524db75c69a7790329dc3e.mockapi.io/users", {
              method: 'POST',
              body: JSON.stringify({
                  name,
                  email,
                  password
              }),
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              },
          })
              .then((response) => response.json())
              .then((json) => console.log(json));
               
              window.open('Store.html')}
              else{
                alert('Email already exsits!')
              }

            }
      })


    }
myAPI();
