let peliculas=[
    {
        nombre:"Halloween la noche final",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=4cc9a9c8-c7bb-4462-9675-2dd057e889f0",
        sinopsis:"Laurie y su hija Karen descubren que Michael sigue vivo y ha regresado a completar la matanza. Sin embargo, esta vez todas las víctimas supervivientes que Michael ha dejado en Haddonfield se unen para acabar para siempre con el monstruo"

    },
    {
        nombre:"La resurreccion del demonio",
        duracion:93,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/jeeppers.jpg?alt=media&token=c6c07002-c476-4095-900f-011047e967dc",
        sinopsis:"Trish Jenner y su hermano menor Derry cruzan EE.UU. en coche, en un viaje largo y aburrido cuya monotonía sólo es rota por sus continuas discusiones. De pronto, en mitad de ninguna parte, descubren una iglesia abandonada, cuyo tejado está cubierto por una espesa bandada de cuervos, y ven como un misterioso personaje arroja un bulto al interior de una gran boca del alcantarillado.En ese momento comienzan una huída aterradora, perseguidos por una de las criaturas más letales que se pueda imaginar."
    },
    {
        nombre:"Avatar El Camino Del Agua",
        duracion:183,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/AVATARELCAMINODELAGUA1.jpg?alt=media&token=32665ae8-3192-4200-8e67-4f5252ad4a08",
        sinopsis:"Narra la historia de la familia Sully (Jake, Neytiri y sus hijos), el peligro que los persigue, los esfuerzos que hacen para mantenerse a salvo, las batallas que libran para seguir con vida, y las tragedias que sobrellevan. Dirigida por James Cameron y producida por Cameron y Jon Landau, la película es protagonizada por Zoe Saldana, Sam Worthington, Sigourney Weaver, Stephen Lang, Cliff Curtis, Joel David Moore, CCH Pounder, Edie Falco, Jemaine Clement, Giovanni Ribisi y Kate Winslet."
    },
    {
        nombre:"Black Adam",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/Blackada.jpg?alt=media&token=c2942d36-d04c-4117-a156-0e1b3e16caa3",
        sinopsis:"Unos arqueólogos liberan de su tumba a Black Adam, quien llevaba 5000 años preso tras haber recibido los poderes de los dioses. De nuevo entre los humanos, Black Adam se dispone a imponer su justicia, muy diferente a la del mundo en el que despertó."
    },
    {
        nombre: "La Luz Del Diablo",
        duracion:93,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/LALUZDELDIABLOO1.jpg?alt=media&token=235a528b-ee59-4e4d-8b20-23013e573160",
        sinopsis:"Según informes reales del Vaticano, los casos de posesión demoníaca han aumentado significativamente en los últimos años. En respuesta, la iglesia católica ha reabierto en secreto escuelas de exorcismo para capacitar a los sacerdotes en este rito sagrado. LA LUZ DEL DIABLO te sumerge en el mundo de una de estas escuelas; última línea de defensa de la humanidad contra los poderes del mal eterno. Jacqueline Byers (“Roadies”, “Salvation”) interpreta a la hermana Ann, quien cree devotamente que realizar exorcismos es su vocación, a pesar de que históricamente sólo los sacerdotes, y no las hermanas, pueden realizarlos. Cuando un profesor siente su don especial decide aceptarla en el aula, lo que le permite ser la primera monja en estudiar y dominar el ritual. Su propia alma estará en peligro ya que las fuerzas demoníacas con las que lucha revelan una conexión misteriosa con su traumático pasado."
    },
    {
        nombre: "La Mujer REY",
        duracion:102,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/LAMUJERREY.jpg?alt=media&token=d0ad3647-2b95-4d06-8f3b-1f60bddfd833",
        sinopsis:"En la década de 1820, en África, una unidad militar exclusivamente femenina del reino de Dahomey se prepara para luchar contra las tropas invasoras del Imperio de Oyo, cuyo propósito es esclavizar a la población conquistada."
    },
    {
        nombre: "One Piece",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/ONEPIECE1.jpg?alt=media&token=6d6292ca-c652-43d8-8807-b46437f54cff",
        sinopsis:"Después de dormir durante 15 años, el dios de la destrucción Bills despierta y se sorprende al saber que Freezer ha sido derrotado por un joven llamado Goku. No les toma mucho tiempo a él y a su maestro salir a buscarlo."
    },
    {
        nombre: "Minions",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/minions2posternuevo.jpg?alt=media&token=f257d9aa-2081-4124-aa12-3550a8474bc6",
        sinopsis:"En los años 70, Gru crece siendo un gran admirador de 'Los salvajes seis', un supergrupo de villanos. Para demostrarles que puede ser malvado, Gru idea un plan con la esperanza de formar parte de la banda. Por suerte, cuenta con la ayuda de sus fieles seguidores, los Minions, siempre dispuestos a sembrar el caos."
    },
    {
        nombre: "Los Reyes del Mundo",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/LOS%20REYESDELMUNDO1.jpg?alt=media&token=2c7e655b-566a-446e-a84c-839643e15924",
        sinopsis:"Un día todos los hombres se quedaron dormidos… Y los cercos de la tierra, ardieron” Rá (19), Culebro (16), Sere (14), Winny (12) Nano (13) cinco chicos de la calle de Medellín. Cinco reyes sin reino. En sus manos tienen unas viejas escrituras de una tierra heredada por Rá. Tras recibir una carta de la oficina de restitución de tierras del gobierno, notificando la devolución de los terrenos que le fueron arrebatados a su abuela, Rá decidirá emprender el viaje con sus amigos con la promesa de por fin cumplir un sueño: tener un lugar en el mundo donde ser libres, donde estar a salvo, donde construir su propio reino."
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690",
        sinopsis:"Una secuela que seguirá explorando el incomparable mundo de Wakanda y todos los ricos y variados personajes presentados en la película de 2018."
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

    let duracion=document.createElement("h5")
    duracion.classList.add("text-center")
    duracion.textContent="Duracion: " +pelicula.duracion+"Mn"

    let sinopsis=document.createElement("p")
    sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.sinopsis

    //PADRES E HIJOS
    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
    tarjeta.appendChild(sinopsis)
})

//Escuchando el evento del clic en alguna pelicula de la cartelera
let peliculaSeleccionada={}
etiquetaFila.addEventListener("click",function(evento){
    if (evento.target.classList.contains("img-fluid")){
        
        //Obteniendo los datos de la pelicula
        peliculaSeleccionada.imagen=evento.target.parentElement.querySelector('img').src
        peliculaSeleccionada.titulo=evento.target.parentElement.querySelector('h3').textContent
        peliculaSeleccionada.duracion=evento.target.parentElement.querySelector('h5').textContent
        peliculaSeleccionada.sinopsis=evento.target.parentElement.querySelector('p').textContent

        //envindo nuestros datos de la pelicula seleccionada a la memoria
        localStorage.setItem("pelicula",JSON.stringify(peliculaSeleccionada))

        window.location.href="./src/views/verinfopelicula.html"

    }
})