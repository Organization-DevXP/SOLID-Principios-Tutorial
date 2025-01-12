// Código inicial (sin aplicar LSP, OCP ni DIP)

class CocheGasolina {
    constructor(modelo, consumoPorKm) {
        this.modelo = modelo;
        this.consumoPorKm = consumoPorKm;
    }

    calcularConsumo(distancia) {
        return distancia * this.consumoPorKm; // Consumo en litros
    }
}

class CocheElectrico {
    constructor(modelo, consumoPorKm) {
        this.modelo = modelo;
        this.consumoPorKm = consumoPorKm;
    }

    calcularConsumo(distancia) {
        return distancia * this.consumoPorKm; // Consumo en kWh
    }
}

class ParqueVehiculos {
    constructor() {
        this.vehiculos = [];
    }

    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }

    calcularConsumoTotal(distancia) {
        return this.vehiculos.reduce((total, vehiculo) => {
            if (vehiculo instanceof CocheGasolina) {
                return total + vehiculo.calcularConsumo(distancia);
            } else if (vehiculo instanceof CocheElectrico) {
                return total + vehiculo.calcularConsumo(distancia);
            } else {
                throw new Error('Tipo de vehículo no soportado.');
            }
        }, 0);
    }
}

// Ejecución del código inicial
const parque = new ParqueVehiculos();
parque.agregarVehiculo(new CocheGasolina('Toyota', 0.1)); // 0.1 litros/km
parque.agregarVehiculo(new CocheElectrico('Tesla', 0.2)); // 0.2 kWh/km

const distancia = 100; // Distancia en km
console.log('Consumo total:', parque.calcularConsumoTotal(distancia));
