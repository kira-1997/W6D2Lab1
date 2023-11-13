




function api(){
    fetch('https://fakestoreapi.com/products',{
      method: "get"
    })
      
       .then(response=>response.json())
       .then(data =>{
           for(let i=0; i<data.length;i++){
              console.log(data.length)
              let getData=document.getElementById('container')
              let res=document.createElement('div')
              res.className="box"
              res.style.fontWeight='bolder'
              res.style.textShadow='1px 0px 2px  black'
              res.innerHTML=data[i].title+'.'
              let price=document.createElement('div')
              price.innerHTML+=' Price: '+data[i].price +'$'
              price.style.color='green'
              let pic=document.createElement('img')
              pic.src=data[i].image
              res.appendChild(price)
              res.appendChild(pic)
              getData.appendChild(res)
              
  
           }
  
  
  
       })
  
  
  }
  
  api() 

