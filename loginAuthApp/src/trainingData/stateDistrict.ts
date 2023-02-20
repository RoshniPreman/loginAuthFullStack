import { StateDistrict } from 'src/model/stateDistrict';

export const stateDistrictList: Array<StateDistrict> = [
    {
        id: 1,
        stateName: 'Kerala',
        district: [{
            id: 1,
            district: 'Thrissur'
        },
        {
            id: 2,
            district: 'Kozhikodu'
        },
        {
            id: 3,
            district: 'Kannur'
        }]
    },
    {
        id: 2,
        stateName: 'Tamilnadu',
        district: [{
            id: 1,
            district: 'Chennai'
        },
        {
            id: 2,
            district: 'Coimbatore'
        }]
    },
    {
        id: 3,
        stateName: 'Maharashtra',
        district: [{
            id: 1,
            district: 'Pune'
        },
        {
            id: 2,
            district: 'Mumbai'
        }]
    },
    {
        id: 4,
        stateName: 'Karnataka',
        district: [{
            id: 1,
            district: 'Banglore'
        }]
    }
] 