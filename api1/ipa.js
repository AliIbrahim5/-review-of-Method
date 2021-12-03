// alert('heloo');




 
async function  getipa(){

  const i = 1
  
 const response = await fetch('https://www.breakingbadapi.com/api/characters') 

 const data =await response.json()

 data.forEach((acter)=>{
  
for (let i = 0; i < acter.length; ) {
   if(acter[i] === acter[i])
   console.log(option);
    
  
}

//  console.log('select');


  

 })
 

 

 
 document.querySelector(".nav h1").innerHTML = data[i].name
 document.querySelector(".nav img").src = data[i].img

 document.querySelector('#card ').innerHTML =
`<select id="Name-image">
  ${data.map(acter => `<option   > ${acter.name} </option>`)
}
</select>`



}

getipa()

