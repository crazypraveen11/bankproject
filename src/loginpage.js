 <div className='backgroundimage' style={{width:'1354px', height:'625px'}} id='backgroundimage'>
              <div className='row justify-content-center mt-1'>
                  <div className =" mt-4 mb-5 col-5 ">
                      <div className="row card  align-items-center mt-2" style={{boxShadow:'5px 6px 6px'}} >
                          <h1 className ="text-center mb-2 p-5">Welcome to  <span className="text-danger">Indian Bank</span></h1>
                         <form className=" row col-lg-7 ">
                             <div className="">
                                    <label className="form-label ">Username</label>
                                    <input type="text" className="form-control ms-5 mt-1 "  placeholder="Enter Username" style={{borderRadius:'20px'}} />      
                             </div>
                             <div className=" mt-3">
                                    <label className="form-label text-start ">Password</label>
                                    <input type="password" className="form-control ms-5 mt-1" placeholder="Enter Password" style={{borderRadius:'20px'}} />   
                             </div>
                             <div className='mt-4 ms-3'>
                                 <input type='checkbox' className='ms-1' />
                                 <label className='ms-2'>Remember me</label>
                                 <a href='#!' className='ms-4'>Forgot Password?</a>
                             </div>
                             <div className="text-center mt-4 ">
                                 <button className="btn btn-outline-success" style={{borderRadius:'17px'}}
                                    onClick={
                                        ()=>{
                                            setCreatepage(true)
                                        }
                                    }
                                    >Login
                                 </button>
                             </div>
                             <div className='mt-3'>
                                 <label className='ms-3'>Don't have an account?</label>
                                 <a href='#!' className='ms-4'>Create new </a>
                             </div>
                             <div class="  text-center mt-4 ">
                                  <a href="#!"><i class="bi bi-facebook me-4 ms-3"></i></a>
                                  <a href="#!"><i class="bi bi-instagram me-4"></i></a>
                                  <a href="#!"><i class="bi bi-youtube me-4"></i></a>
                                  <a href="#!"><i class="bi bi-whatsapp me-4 "></i></a>
                             </div>
                         </form><br/>
                     </div>
                 </div>
             </div>
         </div> 