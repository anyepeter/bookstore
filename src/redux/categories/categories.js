const CHECKSTATUS = 'CHECKSTATUS';

const checkStatus = (id) =>{
  return {
    type: CHECKSTATUS,
    id
  }
}