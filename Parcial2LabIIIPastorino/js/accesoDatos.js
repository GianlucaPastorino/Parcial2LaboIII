const url = "http://localhost:3000/superheroes";
const $loader = document.getElementById("spinner");

export const getSuperheroes = ()=>{
    $loader.classList.remove("ocultar");

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText); 
            }
            else{
                console.error(`Error: ${xhr.status}. ${xhr.statusText}`);
            }
            $loader.classList.add("ocultar");
        }
    })

    xhr.open("GET", URL);
    xhr.send();
}



export const createSuperheroe = (superheroe)=>{

    $loader.classList.remove("ocultar");

    const xhr = new XMLHttpRequest(); 

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){ 
                const data = JSON.parse(xhr.responseText); 
            }
            else{
                console.error(`Error: ${xhr.status}. ${xhr.statusText}`);
            }
            $loader.classList.add("ocultar");
        }
    })

    xhr.open("POST", URL);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.send(JSON.stringify(superheroe));
}



export const deleteSuperheroe = (id)=>{ 
    $loader.classList.remove("ocultar");

    const xhr = new XMLHttpRequest(); 

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){ 
                const data = JSON.parse(xhr.responseText);
            }
            else{
                console.error(`Error: ${xhr.status}. ${xhr.statusText}`);
            }
            $loader.classList.add("ocultar");
        }
    })
   
    xhr.open("DELETE", URL + "/" + id); 
    xhr.send();
}



export const updateSuperheroe = (id, superheroe)=>{
    $loader.classList.remove("ocultar");

    const xhr = new XMLHttpRequest(); 

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){ 
                const data = JSON.parse(xhr.responseText);
            }
            else{
                console.error(`Error: ${xhr.status}. ${xhr.statusText}`);
            }
            $loader.classList.add("ocultar");
        }
    })

    xhr.open("PUT", URL + "/" + id);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8"); 
    xhr.send(JSON.stringify(superheroe));
}