
import FetchService from './fetch.service.ts';
import {BasicFetch} from '../../interfaces/fetch.interface.ts';

function securedGetService(url:string):Promise<void>{
    let bearer = 'Bearer';
    let options: BasicFetch = {
        method: 'GET',
        headers:{
            Authorization: bearer,
        },
    };
    return FetchService(url,options);
}

function publicGetService<T>(url:string):Promise<(value:T)=>void>{
    let options: BasicFetch = {
        method: 'GET',
    };
    return FetchService(url,options);
}

export {
    securedGetService,
    publicGetService,
};
