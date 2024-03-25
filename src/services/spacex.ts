import {type Doc, type APISpaceXResponse} from '../types/api';

export const getLatestLaunches = async() => {

    // Url base: 'https://api.spacexdata.com/v5/launches'
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc' // indicamos que por la fecha sea ascendente
                },
                limit : 12
            }
        })
    });

    // const data = JSON.stringify(await res.json()); // solamente era para ver la data en formato json y crear la interface ayudado con la página: https://app.quicktype.io/ que nosotros le pegamos el json y nos crear los tipos que pertenecen a la interface

    // console.log(data);

    const { docs: launches } = await res.json() as APISpaceXResponse; // le estamos cambiando de nombre a la variable, ya no es docs sino launches
    return launches;
}

export const getLaunchBy = async({id}: {id: string}) => {

    // Url base: 'https://api.spacexdata.com/v5/launches'
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

    // const data = JSON.stringify(await res.json()); // solamente era para ver la data en formato json y crear la interface ayudado con la página: https://app.quicktype.io/ que nosotros le pegamos el json y nos crear los tipos que pertenecen a la interface

    // console.log(data);

    const launch = await res.json() as Doc; // le estamos cambiando de nombre a la variable, ya no es docs sino launches
    return launch;
}