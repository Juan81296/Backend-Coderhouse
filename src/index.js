
    class Usuario {
      constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        this.nombresADevolver = [];
      }  
    
    getFullName(){
      return console.log(
        `El nombre del usuario es: ${this.nombre}. Y su apellido es :${this.apellido}`
      );
    }
    addMascota(nombreMascota){
      this.mascotas.push(nombreMascota);
    }
    
    countMascotas(){
      return console.log(`La cantidad de mascotas es: ${this.mascotas.length}`);
    }
    addBook(libro){
      this.libros.push(libro);
    }
    getBookNames(){
      this.libros.forEach((libro)=>{
        this.nombresADevolver.push(libro.nombre);
      });
      console.log(this.nombresADevolver)
    }
    getNames(){
      return console.log(parseInt(this.mascotas.length))
    }
    }

    
    let usuarioJuan = new Usuario(
      'Juan','Tenaglia',
      [{nombre: 'la senda de un perdedor', Autor: 'Charles Bukouski'},{nombre: 'La conjura de los necios', Autor:'John Kennedy Toole'}],
      ['Perro','Gato']);
    
      usuarioJuan.getFullName();
      usuarioJuan.addMascota(['Loro']);
      usuarioJuan.countMascotas();
      usuarioJuan.addBook({nombre:'Mr Mercedes',Autor:'Stephen King'});
      usuarioJuan.getBookNames();
    


