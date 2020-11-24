

let GetData = document.getElementById("getData");

GetData.addEventListener("click" , ()=>{
    const fetcher = async() =>{
        const resp = await fetch("https://cors-anywhere.herokuapp.com/https://fast-meadow-43640.herokuapp.com")
        const data = await resp.json();
        console.log(data)
    }

    fetcher()
})