import { useState } from 'react';
import { useEffect } from 'react';
import SharedService from '../services/SharedService';

var SharedServiceData = new SharedService();

const updatedSubj = ()=>{
  SharedServiceData.userName.next("Mayur");
  return ()=>{
    console.log("Close Componant");
  }
}

const Home = () => {
  var [nameis,setname]=useState();


  useEffect(()=>{
    console.log("Hello use effect");
    SharedServiceData.userName.subscribe(res=>{
      setname(res);
    })
  },[])

  // let mydata = new SharedService();
  return (
    <>
      <h1>home {nameis}</h1>
      <button className='btn btn-primary' onClick={updatedSubj}>Change Name Via Subject</button>
    </>
  );
};

export default Home;
