export interface StateDistrict{
    id: number;
    stateName: string;
    district: Array<District>
}

export interface District{
    id: number;
    district: string;
}