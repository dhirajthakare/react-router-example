import {BehaviorSubject } from 'rxjs';

export default class SharedService{

     userName = new BehaviorSubject('Dhiraj');

    constructor(){
        console.log("constructor call");
    }

}
// export default SharedService



