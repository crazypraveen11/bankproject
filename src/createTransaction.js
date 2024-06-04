import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export var Createtransactionform = () => {


    return (
        <>
            <div className="container-fluid mt-2 ">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 ">
                        <h1 className="text-primary text-uppercase fw-bolder text-center ">
                            <br></br>CREATE NEW TRANSACTION</h1>
                        <div className='container'>
                            <div className="form group mt-4">
                                <label>TRANSACTION NUMBER</label>
                                <input type="number"
                                    name="transactionNumber"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mt-4">
                                <label>TRANSACTION TYPE</label>
                                <select name="transactionType"
                                    className="form-select mt-1">
                                    <option selected hidden>SELECT YOUR TYPE</option>
                                    <option>Credit</option>
                                    <option>Debit</option>
                                </select>
                            </div>
                            <div className="form group mt-4">
                                <label>TRANSACTION AMOUNT</label>
                                <input type="number"
                                    name="transactionAmount"
                                    className="form-control"
                                />
                            </div>
                            <div className="form group mt-4">
                                <label>TRANSACTIONHOLDER NUMBER</label>
                                <input type="text"
                                    name="transactionHolderNumber"
                                    className="form-control"
                                />
                            </div>
                            <div className="form group mt-4">
                                <label>ACCOUNT BALANCE</label>
                                <input type="text"
                                    name="currentBalance"
                                    className="form-control"
                                />
                            </div>
                            <div className="form group mt-4">
                                <label>TRANSACTION DATE</label>
                                <input type="date"
                                    name="transactionDate"
                                    className="form-control"
                                />
                            </div>
                            <div className="row justify-content-around mt-5">
                                <button className="btn btn-success col-3 ms-3" >SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}