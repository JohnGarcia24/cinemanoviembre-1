let peliculas=[
    {
        nombre:"Hallowen la noche final",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=4cc9a9c8-c7bb-4462-9675-2dd057e889f0"

    },
    {
        nombre:"La noche del demonio",
        duracion:93,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/jeeppers.jpg?alt=media&token=c6c07002-c476-4095-900f-011047e967dc"
    },
    {
        nombre:"Avatar El Camino Del Agua",
        duracion:183,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/AVATARELCAMINODELAGUA1.jpg?alt=media&token=32665ae8-3192-4200-8e67-4f5252ad4a08"
    },
    {
        nombre:"Black Adam",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/Blackada.jpg?alt=media&token=c2942d36-d04c-4117-a156-0e1b3e16caa3"
    },
    {
        nombre: "La Luz Del Diablo",
        duracion:93,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/LALUZDELDIABLOO1.jpg?alt=media&token=235a528b-ee59-4e4d-8b20-23013e573160"
    },
    {
        nombre: "La Mujer REY",
        duracion:102,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/LAMUJERREY.jpg?alt=media&token=d0ad3647-2b95-4d06-8f3b-1f60bddfd833"
    },
    {
        nombre: "One Piece",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/ONEPIECE1.jpg?alt=media&token=6d6292ca-c652-43d8-8807-b46437f54cff"
    },
    {
        nombre: "Minions",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/minions2posternuevo.jpg?alt=media&token=f257d9aa-2081-4124-aa12-3550a8474bc6"
    },
    {
        nombre: "Los Reyes del Mundo",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/LOS%20REYESDELMUNDO1.jpg?alt=media&token=2c7e655b-566a-446e-a84c-839643e15924"
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690"
    }
]
//Creamos una referencia al espacio HTML donde queremos hacer el render (PINTAR ETIQUETAS)
let etiquetaFila=document.getElementById("fila")

//Si ya tengo datos que normalmente llegan al front como un arreglo, debemos recorrer y dempurar dicha informacion  
peliculas.forEach(function(pelicula){
    //para pintar la informacionde cada pelicula debemos aplicar una tecnica conocida como TRAVERSING:Crear etiquetas de HTML desde JS
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100")
    poster.src=pelicula.poster

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center","fw-bold")
    nombre.textContent=pelicula.nombre

    let duracion=document.createElement("h4")
    duracion.classList.add("text-center")
    duracion.textContent="Duracion: " +pelicula.duracion+"Mn"

    //PADRES E HIJOS
    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
})