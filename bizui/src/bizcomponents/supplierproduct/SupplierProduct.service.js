
import { get,put,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'

const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}supplierProductManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}supplierProductManager/loadSupplierProduct/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateSupplier = (ownerClass, id, filterKey, pageNo) => {
 
  const url = `${PREFIX}supplierProductManager/requestCandidateSupplier/ownerClass/id/filterKey/pageNo/`
  const requestParameters = {id, ownerClass,filterKey, pageNo}
  return postForm({url,requestParameters})
}	

const transferToAnotherSupplier = (id, parameters) => {
  const url = `${PREFIX}supplierProductManager/transferToAnotherSupplier/id/anotherSupplierId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addProductSupplyDuration = (targetObjectId, parameters) => {
  const url = `${PREFIX}supplierProductManager/addProductSupplyDuration/supplierProductId/quantity/duration/price/tokensExpr/`
  const supplierProductId = targetObjectId
  const requestParameters = { ...parameters, supplierProductId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateProductSupplyDuration = (targetObjectId, parameters) => {
  const url = `${PREFIX}supplierProductManager/updateProductSupplyDurationProperties/supplierProductId/id/quantity/duration/price/tokensExpr/`
  const supplierProductId = targetObjectId
  const requestParameters = { ...parameters, supplierProductId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeProductSupplyDurationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}supplierProductManager/removeProductSupplyDurationList/supplierProductId/productSupplyDurationIds/tokensExpr/`
  const requestParameters = { ...parameters, supplierProductId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}



// Filter this out when no functions

const  listFunctions = () => {
  return get({
    url: `${PREFIX}supplierProductService/listFunctions/`,
  })
}


const  saveRequest = (data) => {

  return put({
    url: `${PREFIX}supplierProductService/save/`,
    data,
  })
}


const  processRequest = (data) => {

  return put({
    url: `${PREFIX}supplierProductService/process/`,
    data,
  })
}

const SupplierProductService = { view,
  load,
  addProductSupplyDuration,
  updateProductSupplyDuration,
  removeProductSupplyDurationList,
  requestCandidateSupplier,
  transferToAnotherSupplier, listFunctions, saveRequest, processRequest}
export default SupplierProductService

