console.log("Hola mundoo!");

const bd = [
    {   nombre: "Eva Aranda", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/fotoeva.png" 
    },
    
    { 
        nombre: "Carlos Arrebola", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/foto2_carlos.jpg" 
    },

    { 
        nombre: "Carles Cardelo", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/carles-2.jpg" 
    },

    { 
        nombre: "Joan Domingo", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/joan-1.jpg" 
    },

    { 
        nombre: "Fran Méndez", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/foto_fran.jpg" 
    },

    { 
        nombre: "Juan Montero", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/juan_montero.jpg" 
    },

    { 
        nombre: "Albert Arrebola", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/foto_albert.png" 
    },

    { 
        nombre: "Óscar García", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/fotooscar.png" 
    },

    { 
        nombre: "Anna Rovira", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/anna_rovira1.jpg" 
    },

    { 
        nombre: "Patricia Salinas", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/patricia_salinas.jpg" 
    },

    { 
        nombre: "Juan Luis Sánchez", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/juan_luis_sanchez.jpg" 
    },

    { 
        nombre: "Francisca Triviño", 
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/francisca_tri.jpg" 
    }
  ];

  function mostrarProfesores() {
    let tarjetas = "";
  
    for (let i = 0; i < bd.length; i++) {
      tarjetas += `
        <div class="tarjeta">
          <div class="imagen">
            <img src="${bd[i].url_imagen}" alt="${bd[i].nombre}">
          </div>
          <div class="nombre">${bd[i].nombre}</div>
        </div>
      `;
    }
  
    document.querySelector(".contenedor").innerHTML = tarjetas;
  }
  
  mostrarProfesores();