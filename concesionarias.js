let autos = require('./autos');

let concesionaria = {
    buscarAuto: function(patente){//find devuelve un solo auto
        let autoEncontrado = autos.find(auto => auto.patente == patente);
        if(autoEncontrado){
            return autoEncontrado
        }else{
            return null
        }

    },
    venderAuto: function(patente){
        let auto = concesionaria.buscarAuto(patente);//podemos usar this.buscarAuto
        if(auto.vendido == false){
            auto.vendido = true
            return auto
        }
    },
    autos : autos,
    autosParaLaventa: function(){
        return autos.filter(auto => auto.vendido == false)
    },
    autosNuevos: function(){
        let autosParaLaventa = this.autosParaLaventa(this)
        return autosParaLaventa.filter(auto => auto.km <= 100)
    },
    listaDeVentas: function() {
        let autosVendidos = autos.filter(auto => auto.vendido == true);
        return autosVendidos.map(auto => auto.precio)
    },
    totalDeVentas : function(){
        let vendidos = this.listaDeVentas();
        let total = vendidos.length !== 0 ? vendidos.reduce((acum, num) => acum + num ) : 0
        return total
    },
    puedeComprar: function(auto, persona){
        let montoCuota = auto.precio / auto.cuotas;
        if(auto.precio <= persona.capacidadDePagoTotal && persona.capacidadDePagoEnCuotas >= montoCuota){
            return true
        }else{
            return false
        }
    },
    autosQuePuedeComprar: function(persona){
        let autosDisponibles = this.autosParaLaventa(); //obtener los autos para la venta
        let autosQuePuedeComprar = [];
        autosDisponibles.forEach(auto=> {
            if(this.puedeComprar(auto, persona)){
                autosQuePuedeComprar.push(auto)
            }
        })
        return autosQuePuedeComprar
    }
}
console.log(concesionaria.puedeComprar({capacidadDePagoEnCuotas: 2000, capacidadDePagoTotal:100000}))
//console.log(concesionaria.autosNuevos())
//console.log(concesionaria.listaDeVentas())
//concesionaria.buscarAuto("APL123")
//console.log(concesionaria.venderAuto("APL123"))
//console.log(concesionaria.autosParaLaventa())*/