import { useState } from 'react';
import p1 from '../../assets/poert1.png';
import p2 from '../../assets/port2.png';
import p3 from '../../assets/port3.png';



export function Portofolio() {


 const  [x, usex] = useState()
 const  [dis, usedis] = useState("d-none")

function imageclicker(image){

usex(image)
usedis("d-block")

}
 function imageundisplay(){

usedis("d-none")

 }





  return (



<>

<div>

<h2 className="text-center py-3 display-5 fw-bold">portfolio component</h2>

<div className='d-flex justify-content-center mb-3  align-items-center gap-3'>
          <div className='divider-line bg-black'></div>
            <i className="fas fa-star text-black   fs-5"></i>
         <div className='divider-line bg-black'></div>

        </div>


<div className=' d-flex justify-content-center align-items-center'>

<div className="container"> 
<div className=" row mb-2  g-3">



  <div className='hover col-lg-4 col-md-6 col-sm-12 position-relative' onClick={()=>imageclicker(p1)}>
  

<div className='hover-comp '>

  <i className=" fas fa-plus text-white d-flex justify-content-center align-items-center position-relative fs-1 top-50"></i>

</div>
<img src={p1} className='w-100  ' alt=" image1" />

</div>

<div className='hover col-lg-4 col-md-6 col-sm-12 position-relative' onClick={()=>imageclicker(p2)}>
  

<div className='hover-comp  '>

<i className="fas fa-plus text-white d-flex justify-content-center align-items-center position-relative fs-1 top-50"></i>
</div>
<img src={p2} className='w-100  ' alt=" image1" />

</div>

<div className='hover col-lg-4 col-md-6 col-sm-12 position-relative ' onClick={()=>imageclicker(p3)}>
  

<div className='hover-comp  '>
<i className="fas fa-plus text-white d-flex justify-content-center align-items-center position-relative fs-1 top-50"></i>
</div>
<img src={p3} className='w-100  ' alt=" image1" />

</div>

<div className='hover col-lg-4 col-md-6 col-sm-12 position-relative' onClick={()=>imageclicker(p1)}>
  

<div className='hover-comp  '>
  <i className="fas fa-plus text-white d-flex justify-content-center align-items-center position-relative fs-1 top-50"></i>
</div>
<img src={p1} className='w-100  ' alt=" image1" />

</div>

<div className='hover col-lg-4 col-md-6 col-sm-12 position-relative'onClick={()=>imageclicker(p2)} >
  

<div className='hover-comp  '>
  <i className="fas fa-plus text-white d-flex justify-content-center align-items-center position-relative fs-1 top-50"></i>
</div>
<img src={p2} className='w-100  ' alt=" image1" />

</div>

<div className='hover col-lg-4 col-md-6 col-sm-12 position-relative' onClick={()=>imageclicker(p3)}>
  

<div className='hover-comp  '>
  <i className="fas fa-plus text-white d-flex justify-content-center align-items-center position-relative fs-1 top-50"></i>
</div>
<img src={p3} className='w-100  ' alt=" image1" />

</div>









</div>
</div>


<div className= {` imgPop ${dis} d-flex justify-content-center align-items-center  position-absolute w-100 `  }  >
<img src={x} alt="" className=' w-50  ' />
<div className="  bg-danger text-white fs-5"  onClick={imageundisplay}>
click here to remove
</div>



</div>

</div>



</div>



</>


    
  );
}
