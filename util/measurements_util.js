import axios from 'axios';
import humps from 'humps';

export const fetchMeasurements = () => {
    return axios.get('http://localhost:3000/api/measurements',
        {
            transformResponse: [
                ...axios.defaults.transformResponse,
                data => humps.camelizeKeys(data)
            ],
        }
    )
};

export const createMeasurement = (data) => {
    return axios.post(`http://localhost:3000/api/measurements`,
        {
            measurement: {
                temperature: data.temperature,
                oximeter_spo2: data.oximeterSpo2,
                oximeter_pr: data.oximeterPr,
                blood: data.blood,
            },
        },
        {
            transformResponse: [
                ...axios.defaults.transformResponse,
                data => humps.camelizeKeys(data)
            ],
        }
    )
}