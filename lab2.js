function api(){
    fetch('https://pokeapi.co/api/v2/ability/',{
      method: "get"
    })
      
       .then(response=>response.json())
       .then(data =>{
           for(let i=0; i<data.results.length;i++){
            let getData=document.getElementById('conatain')
            let res=document.createElement('p')
            res.className="box"
            res.innerHTML=data.results[i].name
            getData.appendChild(res) 
           }
  
  
  
       }
       )
  
  
  }
  
  api() 
  
  