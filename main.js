var button = document.getElementById("btn").addEventListener('click',function(){
    console.log("data")
    fetchData()
})

async function fetchData(){
    var result=(document.getElementById("enter").value);
    console.log(result)
    const url=`http://www.omdbapi.com/?s=${result}&apikey=2fad5ede`
    let data=await fetch(url)//(` http://www.omdbapi.com/?s=${result}&apikey=2fad5ede`)
    let response= await data.json();
    console.log(response.Search)
    const container=document.getElementById("container");
    container.innerHTML=" ";
    for(let i =0;i<response.Search.length;i++){
        let obj = response.Search[i];
    
        //console.log(obj.Poster)
        const div=document.createElement("div")
        div.className="flex-item"
        container.appendChild(div)
        const title=document.createElement("h2");
        const image=document.createElement("img");
        
        //image.setAttribute("src","Poster")

        image.src = obj.Poster;
        title.textContent = obj.Title;
        div.appendChild(title);
        div.appendChild(image);
        
    }
    console.log(result)
}
fetchData()



