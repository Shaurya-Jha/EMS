import { adminData, employeesData } from "./data";

export function setLocalStorage() {
  localStorage.setItem('employees', JSON.stringify(employeesData));
  localStorage.setItem('admin', JSON.stringify(adminData));
}

export function getLocalStorage() {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  
  return { employees, admin };
}