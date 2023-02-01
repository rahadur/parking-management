export interface Parking {
  id: string;
  vehicleLicenseNo: string;
  vehicleType: string;
  ownerName: string;
  ownerPhone: string;
  status: string;
  address: any;
  entryDateTime: Date;
  exitDateTime: Date;
  parkingCharge: number
}
