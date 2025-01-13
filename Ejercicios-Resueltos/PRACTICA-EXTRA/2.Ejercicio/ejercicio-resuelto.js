// Clase base Vehiculo: Define la interfaz común para todos los vehículos
class Vehiculo {
    constructor(modelo, consumoPorKm) {
        this.modelo = modelo;
        this.consumoPorKm = consumoPorKm;
    }

    // Método que debe ser implementado por las clases hijas
    calcularConsumo(distancia) {
        throw new Error('Método no implementado.');
    }
}

// Clase CocheGasolina: Implementa el cálculo del consumo para coches a gasolina
class CocheGasolina extends Vehiculo {
    calcularConsumo(distancia) {
        return distancia * this.consumoPorKm; // Consumo en litros
    }
}

// Clase CocheElectrico: Implementa el cálculo del consumo para coches eléctricos
class CocheElectrico extends Vehiculo {
    calcularConsumo(distancia) {
        return distancia * this.consumoPorKm; // Consumo en kWh
    }
}

// Clase ParqueVehiculos: Gestiona vehículos y calcula el consumo total
class ParqueVehiculos {
    constructor() {
        this.vehiculos = [];
    }

    agregarVehiculo(vehiculo) {
        if (!(vehiculo instanceof Vehiculo)) {
            throw new Error('El objeto no es un vehículo válido');
        }
        this.vehiculos.push(vehiculo);
    }

    calcularConsumoTotal(distancia) {
        return this.vehiculos.reduce((total, vehiculo) => {
            return total + vehiculo.calcularConsumo(distancia);
        }, 0);
    }
}

// Ejecución del código refactorizado
const parque = new ParqueVehiculos();
parque.agregarVehiculo(new CocheGasolina('Toyota', 0.1)); // 0.1 litros/km
parque.agregarVehiculo(new CocheElectrico('Tesla', 0.2)); // 0.2 kWh/km

const distancia = 100; // Distancia en km
console.log('Consumo total:', parque.calcularConsumoTotal(distancia)); // Consumo total para ambos vehículos
