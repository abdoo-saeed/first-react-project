export function Contact() {





    return ( 
 <>  
<div className="text-center">

    <h2 className=" py-3 display-4 fw-bold">contact section</h2>
</div>

<div className='d-flex justify-content-center mb-3  align-items-center gap-3'>
          <div className='divider-line bg-black'></div>
            <i className="fas fa-star text-black   fs-5"></i>
         <div className='divider-line bg-black'></div>

        </div>
        


<div novalidate="" action="" className="w-50 p-3 mx-auto mt-5 ng-valid ng-touched ng-dirty">
<label  for="userName" className="position-relative top-0 __top d-none">userName : </label>
<input id="userName" type="text" placeholder="userName" name="userName" className="form-control  border-0 border-bottom py-3 mb-3 position-relative ng-valid ng-touched ng-dirty"></input>
<label  for="userAge" className="position-relative top-0 __top d-none">userAge : </label>
<input  id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 mb-3 position-relative ng-valid ng-touched ng-dirty"></input>
<label  for="userEmail" className="position-relative top-0 __top d-none">userEmail : </label>       
<input  id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 mb-3 position-relative ng-valid ng-touched ng-dirty"></input>     
<label  for="userPassword" className="position-relative top-0 __top d-none">userPassword : </label>    
<input  id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 mb-3 position-relative ng-valid ng-touched ng-dirty"></input>     
<button  className="btn mt-4 text-white fw-bold bg-success"> send Message </button>
</div> 
  
        </>
      
    
    );
}
