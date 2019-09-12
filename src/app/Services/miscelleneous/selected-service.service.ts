import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedServiceService {

  constructor() { }

/** set localStorage item */
  setUsr(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  }

/** get localStorage item */
  getUsr(key){
    return JSON.parse(localStorage.getItem(key));
  }
/** Remove localStorage item */
  removeUsr(key){
    localStorage.removeItem(key);
  }

}
