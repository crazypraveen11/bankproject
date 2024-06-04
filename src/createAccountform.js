import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export var Accountform=()=>{
    return(
        <>
     <div className='container-fluid mt-2' style={{width:'900px',color:'white'}}>
         <div className='row justify-content-center'>
             <div className=' col-lg-8 col-md-0 col-sm-12 shadow-lg p-2'>
                  <h1 className='text-center text-primary'><u>CREATE YOUR ACCOUNT</u></h1>
                  <div className='container'>
                     <div className='form-group mt-3 fw-bold'>
                         <label>ACCOUNT NUMBER</label>
                         <input type='number' name="accountNumber" className='form-control' />
                     </div>
                     <div className='form-group mt-3 fw-bold'>
                         <label>ACCOUNT HOLDER NAME</label>
                         <input type='text' name="accountHoldername" className='form-control' />
                     </div>
                     <div className='form-group mt-3 fw-bold'>
                         <label>ACCOUNT IFSC CODE</label>
                         <input type='text' name="accountIfsccode" className='form-control' />
                     </div>
                     <div className='form-group mt-3 fw-bold'>
                         <label>ACCOUNT BALANCE</label>
                         <input type='text' name="accountBalance" className='form-control' />
                     </div>
                     <div className='form-group mt-3 fw-bold'>
                         <label>PASSWORD</label>
                         <input type='number' name="password" className='form-control' />
                     </div>
                     <div className='form-group mt-3 fw-bold'>
                         <label>ACCOUNT HOLDER PLACE</label>
                         <input type='text' name="accountHolderplace" className='form-control' />
                     </div>
                     <div className='form-group mt-3 fw-bold'>
                         <label>CONTACT NO</label>
                         <input type='number' name=" accountHoldercontactno" className='form-control' />
                     </div>
                     <div className='row justify-content-around mt-4'>
                        <button className='col-3 ms-3 btn btn-outline-success'>SUBMIT</button>
                     </div>
                  </div>
             </div>
         </div>
     </div>
        </>
    )
}