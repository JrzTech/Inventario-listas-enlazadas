// Producto como tal
class Producto{
    constructor(codigo, nombre, cantidad, costo){
        this.codigo=codigo;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.costo=costo;
        this.sig=null; //Variable que indica su siguiente
    }

    //Mostramos el producto
    info(){
        return "Código: "+this.codigo+" Nombre: "+this.nombre+" Cantidad: "+this.cantidad+" Costo: "+this.costo;
    }

    infoHTML(){
        //Mostrar el html de los productos
        return "<p>Código: "+this.codigo+" Nombre: "+this.nombre+" Cantidad: "+this.cantidad+" Costo: "+this.costo+"</p>";
    }

}