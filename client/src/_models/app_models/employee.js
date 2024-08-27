class Employee {
  constructor(employeeItem) {
    this.id = employeeItem.id
    this.goByName = employeeItem.goByName
    this.firstName = employeeItem.firstName
    this.lastName = employeeItem.lastName
    this.suffix = employeeItem.suffix
    this.hireDate = employeeItem.hireDate
    this.role = employeeItem.role
    this.imageFileName = employeeItem.imageFileName
  }
}

export default Employee
