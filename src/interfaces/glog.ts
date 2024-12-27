interface  f {
    numeroDeVagas: number
    horarioDeFucionamento: {
        segunda: {
            aberto: boolean | 'partial'
            intervals: {
                inicio: string
                fim: string
            }[]
        }
        terca: string
        quarta: string
        quinta: string
        sexta: string
        sabado: string
        domingo: string
        feriados: boolean | 'partial' | string

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

// workingHours: {
//     open: "08:00",
//     close: "18:00"
//   },