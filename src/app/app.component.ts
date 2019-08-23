import { Component } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AngularFireDatabase } from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jokes';
  modalInput={};
  data$:any;

  constructor(private firebaseService:FirebaseService,
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    private afuth:AngularFireAuth){

  }

  submit(){
    this.afuth.auth.createUserWithEmailAndPassword('surajkumarkamra234@gmail.com','Abc@1234').then(
      value=>{
        console.log(value);
        if(value){
          this.db.collection('/users').doc(value.user.uid).set({
            name : 'suraj',
            lastEntry : '1/10/1332',
            dateModified : '1/10/1552'
          })
        }

      }
    )
    // const callable = this.fns.httpsCallable('createUserWithEmailAndPassword');
    // this.data$ = callable({"data":{ email: 'some-data',password:'sfkg' }})
    // this.data$.subscribe(it=>{
    //   console.log(it);
    // })
    // this.firebaseService.createUser(this.modalInput).then(it=>{
    //   console.log(it);
    // })
  }

  getUsers(){
    return this.db.collection('/users').valueChanges();
  }

  ngOnInit(){
   this.getUsers().subscribe(it=>{
     console.log(it)
     it.forEach(p=>{
       if(p['name']=='suraj'){
             console.log(p);
       }
     })
   })
  }
}

1.//Find Missing number in int array 1 to 100

/**
 * let mis=[];
 * a=[1....100];
 * for(let i=1;i<100;i++){
 *  if(a.indexOf(i)==-1)
 *    mis.push(i);
 * }
 */

2. //Find Duplicate in array 

 /**
  *
  * let a=[0, 3, 1, 2, 3];
  * let b=[];
  * let duplicate={};
  * for(let i=0;i<a.length;i++){
  *   if(duplicate[a[i]]){
  *     b.push(a[i])
  *  }
  *   else{
  *    duplicate[a[i]]=a[i];
  * }
  * } 
  */

3. // Find Smallest and Largest Number in array && second Largest and second smallest in array

/**
 * smallest = Math.min(...numbers);
 * largest  = Math.max(...numbers);
 * 
 * var smallest = numbers[0];
 * var largest =numbers[0];
 * 
 * for(let i=0;i<numbers.length;i++){
 *    if(numbers[i]>largest)
 *         largest=numbers[i];
 *    if(numbers[i]<smallest)
 *        smallest = numbers[i];
 * }
 */

4.// Find all pairs of Integers whose sum is equal to given sum or 100

/**
 * 
 * var sample_data = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51,
                      49, 50, 51, 49, 51];
   var found={};
    for(let i of sample_data){
      if(found[100-i]==true){
        result.push({
          a:i,
          b:100-i
        })
      }
      found[i]=true;
    }
 */

5.// Find all repeated numbers in array

/**
 * 
 * let re={};
 * for(let i=0;i<a.length;i++){
 *    if(re[a[i]]){
 *       re[a[i]]++
 *  }
 *   else{
 *       re[a[i]]=1
 *  }
 * }
 */

6. // Remove duplicate from Array

/**
 * let a=[1,3,2,1,5,2,6,1];
 * let seen ={};
 * let out=[];
 * for(let i=0;i<a.length;a++){
 *   var item=a[i];
 *   if(seen[item]==-1){
 *     seen[item]=1;
 *     out.push(item)   
 *  }
 *  
 * }
 */

7. // Intersection of two arrays

/**
 * let f={};
 * var results=[];
 * for(let i=0;i<a1.length;i++){
 *    f[a1[i]]=true;
 * }
 * for(let j=0;j<a2.length;j++){
 *    if(f[a2[j]]=true)
 *      result.push(a2[j]);
 * }
 */

8. // Find Unique Element or Find the element all  repeated except one

/**var a=[1,1,2,1,2,3,4,1,6,6];
 * var b1={};
 * var b2={};
 * for(let i=0;i<a.length;i++)
 *  {
 *   if(b[a[i]])
 *      delete b1[a[i]]
 *      b2[a[i]]='two'; 
 *   else
 *    b1[a[i]]='one'
 * }
 */

9.// Find Kth largest and smallest  Element in array

/**
 * Highest
 *  var sorted = numbers.sort(function (a, b) {
        return b - a;
    });
    return sorted[n - 1];

    Sort single loop

    for(let i = 0, j=i+1; i < arr.length && j<arr.length;)
    {       
        if(arr[i] > arr[j])
        {
            let  temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;              
            i=0;
            j=i+1;
        } 
        else
        {
            i++;
            j++;
        }
    }

    Smallest
 */

