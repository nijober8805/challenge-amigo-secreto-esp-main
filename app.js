// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.le



function agregarAmigo(){
    //obtener valor ingresado
    let amigos = document.getElementById('amigo').value;
    let ul = document.getElementById("listaAmigos");

    if(amigos != ""){

      
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(amigos));
        ul.appendChild(li);
        document.getElementById("amigo").value =""; 
      
       
    }else{
            alert("agregue un nombre")
    };
  }
    
function sortearAmigo(){
        let amigosList = document.getElementById("listaAmigos").getElementsByTagName("li");
        console.log(amigosList);
        let amigoArray =[];
        let i =0;

        for ( i = 0; i<amigosList.length; i++){
            amigoArray.push(amigosList[i].textContent);
        };
        
        if (amigoArray.length>0){
            let sorteo = Math.floor(Math.random()* amigoArray.length);
            let resultado=amigoArray[sorteo]; 
            document.getElementById("resultado").textContent="El ganador es: " + resultado;
        };
 

    };




