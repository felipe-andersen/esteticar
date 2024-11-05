interface  f {
    numeroDeVagas: number
    horarioDeFucionamento: {
        segunda: {
            aberto: {
                inicio: string
                fim: string
            }
            fechado: boolean
        }
        terca: string
        quarta: string
        quinta: string
        sexta: string
        sabado: string
        domingo: string
        feriados: {}

    }
}

interface ParkingLot {
    totalSpaces: number;
    occupiedSpaces: number;
    availableSpaces: number;
}

// Function to create a ParkingLot object
function createParkingLot(totalSpaces: number, occupiedSpaces: number): ParkingLot {
    const availableSpaces = totalSpaces - occupiedSpaces;
    return {
        totalSpaces,
        occupiedSpaces,
        availableSpaces,
    };
}

// Example usage
const parkingLot: ParkingLot = createParkingLot(100, 25);