import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const ListEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployees = (employee) => axios.post(REST_API_BASE_URL, employee,{withCredentials: true});

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL+'/'+employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL+'/'+employeeId, employee,{withCredentials: true});

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL+'/'+employeeId, {withCredentials: true});


//client_id =  405587287555-rs02kva6cb72dbgbp581toc62cldriia.apps.googleusercontent.com
// client_secret = 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