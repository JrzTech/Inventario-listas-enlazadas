// Almacena los productos
class Inventario{
    constructor(){
        //this.inventario = []; // Creamos un array para almacenar todos los datos
        this.primero=null; // Variable para detectar al primer producto
    }
    //Creamos los métodos

    veAgregate(producto,nodox){

        // Validamos que no se repita el código
        if(nodox.codigo==producto.codigo){
            console.log("El código del producto ya existe");
            return true;
        }else if(nodox.sig===null){
            // Si no tiene siguiente se lo asignamos
            nodox.sig=producto;
            return false
        }else
            return this.veAgregate(producto,nodox.sig); // Si si tiene se repite el nodo
    }

    // Recibimos un objeto 'Producto'
    agregar(producto){

        //Validamos que sea el primero de la fila
        if(this.primero===null){
            this.primero=producto;
            return false;
        }
        // Retornamos lo que veAgregate decida (si está repetido o no)
        return this.veAgregate(producto, this.primero);
    }

    // Listamos todos los productos
    listar(){
        let cadena="";
        let aux = this.primero;
        // Validamos si la lista está vacía
        if (aux === null) {
            return "<p>No hay productos en el inventario.</p>";
        }
        // Recorremos todos los nodos, incluido el último
        while (aux !== null) {
            cadena += aux.infoHTML();
            aux = aux.sig;
        }
        return cadena;
    }

    // Mostramos los productos al inverso
    listarInverso(){

        let cadena = "";
        // Función recursiva para recorrer los nodos
        const recorrer = (nodox) => {

            if(nodox === null)
                return;
            recorrer(nodox.sig);
            // Se agrega después de recorrer los siguientes
            cadena += nodox.infoHTML();
        };
        recorrer(this.primero);
        return cadena;
    }

    buscar(codigo){

        // Comenzamos desde el primer producto
        let aux = this.primero;
        // Recorremos la lista mientras existan nodos
        while(aux !== null){

            // Comparamos el código del producto actual
            if(aux.codigo == codigo){
                console.log("Producto buscado");
                return aux.infoHTML();
            }
            // Avanzamos al siguiente producto
            aux = aux.sig;
        }
        // Si terminamos el recorrido, no se encontró
        return null;
    }

    eliminar(codigo){

        // Comenzamos desde el primer producto
        let aux = this.primero;
        let anterior = null;
        let eliminado = false;

        // Recorremos la lista mientras existan nodos
        while(aux !== null){

            // Comparamos el código del producto actual
            if(aux.codigo == codigo){
                console.log("Producto encontrado");

                // Si es el primer producto
                if(anterior === null)
                    this.primero = aux.sig;
                // Si está después del primero
                else
                    anterior.sig = aux.sig;

                eliminado = true;
                break;
            }
            // Guardamos el nodo anterior
            anterior = aux;
            // Avanzamos al siguiente producto
            aux = aux.sig;
        }
        // Retornamos si se eliminó el producto
        return eliminado;
    }

    agregarInicio(producto){

        // Comenzamos desde el primer producto
        let aux = this.primero;

        // Recorremos la lista mientras existan nodos
        while(aux !== null){

            // Verificamos que el código no esté repetido
            if(aux.codigo == producto.codigo){
                console.log("El código del producto ya existe");
                return false;
            }
            // Avanzamos al siguiente producto
            aux = aux.sig;
        }

        // Agregamos el producto al principio
        let temporal = this.primero;
        this.primero = producto;
        producto.sig = temporal;

        return true;
    }

    extraerPrimero(){

        // Verificamos si la lista está vacía
        if(this.primero === null)
            return null;

        // Guardamos el primer producto
        let primero = this.primero;

        // Movemos el inicio al siguiente nodo
        this.primero = this.primero.sig;

        // Retornamos el producto extraído
        return primero;
    }


    insertar(producto, posicion){
        
        // Validamos que la posición sea válida
        if(posicion < 1)
            return false;

        // Comenzamos desde el primer producto
        let aux = this.primero;
        let anterior = null;
        let contador = 1;

        // Recorremos hasta llegar a la posición indicada
        while(aux !== null && contador < posicion){

            anterior = aux;
            aux = aux.sig;
            contador++;
        }

        // Validamos que la posición exista
        if(contador < posicion)
            return false;

        // Insertamos al principio
        if(anterior === null){
            this.primero = producto;
            producto.sig = aux;
        }
        // Insertamos en otra posición
        else{
            anterior.sig = producto;
            producto.sig = aux;
        }
        return true;
    }

}



