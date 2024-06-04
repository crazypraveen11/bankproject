import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export let Listalltransaction = () => {

    return (
        <>
            <div className="container mt-2" >
                <div className="row justify-content-center">
                    <div className="table-responsive-md " style={{ overflowX: 'auto' }}>
                        <table className=" table table-striped table-primary">
                            <thead id="texting">
                                <tr>
                                    <th>TRANSACTION NO</th>
                                    <th>TRANSACTION TYPE</th>
                                    <th>CURRENT BALANCE</th>
                                    <th>TRANSACTION AMOUNT</th>
                                    <th>TRANSACTIONHOLDER A/C NUMBER</th>
                                    <th>TRANSACTION DATE</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}