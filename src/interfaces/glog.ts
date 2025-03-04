interface OperatingSchedule {
    numberOfSlots: number;
    operatingHours: {
        monday: {
            open: boolean | 'partial';
            intervals: {
                start: string;
                end: string;
            }[];
        };
        tuesday: {
            open: boolean | 'partial';
            intervals: {
                start: string;
                end: string;
            }[];
        };
        wednesday: {
            open: boolean | 'partial';
            intervals: {
                start: string;
                end: string;
            }[];
        };
        thursday: {
            open: boolean | 'partial';
            intervals: {
                start: string;
                end: string;
            }[];
        };
        friday: {
            open: boolean | 'partial';
            intervals: {
                start: string;
                end: string;
            }[];
        };
        saturday: {
            open: boolean | 'partial';
            intervals: {
                start: string;
                end: string;
            }[];
        };
        sunday: {
            open: boolean | 'partial';
            intervals: {
                start: string;
                end: string;
            }[];
        };
        holidays: boolean | 'partial' | string;
    };
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