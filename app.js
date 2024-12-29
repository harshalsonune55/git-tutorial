


let url="http://universities.hipolabs.com/search?country=";

document.querySelector("button").addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    let res= await getuni(country);
    show(res);
})

async function getuni(country){
   try{
    let res=await axios.get(url+country);
    return res.data;
   }catch(err){
   console.log(err);
   return [];
   } 
}
function show(arr){
    let list=document.querySelector("#list");
    list.innerText="";
for(ele of arr){
        let name=ele.name;
        let li=document.createElement("li");
        li.innerText=name;
        list.appendChild(li);
    console.log(ele);

}
}