import React from 'react'
import { deleteProduct } from '../../services/ProductService'
import {useDispatch} from "react-redux"

import {productRed} from "../../redux/productListReducer"
const DangerModal = ({item}) => {
  let dispatch = useDispatch()

  let finallyDelete = async (c_item) => {
if(c_item?.length === 1) {
  let id = c_item[0]?.item?._id
  // console.log(id)
  let deletedProduct = await deleteProduct(id)
  let data = deleteProduct?.data?.data
let filteredData = data?.filter(item => item?._id !== data?._id)
dispatch(productRed(filteredData))
} else {
  let id = []
  c_item?.map((each_item) => (
    id.push(each_item?.item?._id)
  ))
  // console.log(id)
}
  }
  return (
    <>
    {item?.length !== 0 && (
               <div className="modal fade" id="al-danger-alert" tabIndex={-1} aria-labelledby="vertical-center-modal" aria-hidden="true">
               <div className="modal-dialog modal-sm">
                 <div className="modal-content modal-filled bg-light-danger">
                   <div className="modal-body p-4">
                     <div className="text-center text-danger">
                       <i className="ti ti-hexagon-letter-x fs-7" />
                       <h4 className="mt-2">Are you sure to delete {item && item?.length === 1 ? item[0]?.item.name : (
                 `${item[0]?.item?.name} and ${item?.length - 1} more items`
)}?</h4>
                       <p className="mt-3">
                         After deleting this product, you can find it in the trash/bin, and after 30 days, you will be unable to recover it.
                       </p>
                       <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal" onClick={()=> finallyDelete(item)}>
                         Yes delete
                       </button>
                     </div>
                   </div>
                 </div>
                 {/* /.modal-content */}
               </div>
             </div>
    )}

    </>
  )
}

export default DangerModal