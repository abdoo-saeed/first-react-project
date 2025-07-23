import logo  from '../../assets/poert1.png'



export function Home() {

  return (
    <>
    

    <div className=" background  mb py-5 vh-100 d-flex justify-content-center align-items-center">

       <div>
<div className='d-flex justify-content-center align-items-center mb-4'>
<img src={logo} className='w-50  rounded-circle' alt="" />
</div>
        <h2 className=" text-white text-center display-4 fw-bolder">start Framework</h2>

        <div className='d-flex justify-content-center mb-3  align-items-center gap-3'>
          <div className='divider-line bg-white'></div>
            <i className="fas fa-star text-white  text-white fs-5"></i>
         <div className='divider-line bg-white'></div>

        </div>


        <p className=" text-white text-center">Graphic Artist - Web Designer - Illustrato</p>



       </div>
</div>
</>
  );
}
