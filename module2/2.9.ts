{
    //conditional type
    type: a1 = null
    type: b1 = undefined

    type x = a1 extends null ? true: false // conditional type
    type y = a1 extends null? true: b1 extends undefined ? undefined : any;

    type sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    //keyof sheikh "bike" | "car" | "ship"
    
    //car ase kina / bike ase kina/ ship ase kina / tractor ase kina
    //type CheckVehicle <T>= T extends "bike" | "car" | "ship" ? true: false
    type CheckVehicle <T>= T extends keyof sheikh ? true: false

    type HasBike = CheckVehicle<"bike">
    type HasPlane = CheckVehicle<"plane">

}