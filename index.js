const {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  } = require('./employee'); // Adjust the path if necessary
  
  describe('employees', function() {
    let employee;
  
    // This hook will run before each test to initialize the employee object
    beforeEach(() => {
      employee = {
        name: 'John Doe',
        streetAddress: '1234 Elm Street'
      };
    });
  
    it('updateEmployeeWithKeyAndValue returns an employee with the original key value pairs and the new key value pair', function() {
      const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
      expect(updatedEmployee.name).toEqual('Jane Doe');
      expect(updatedEmployee.streetAddress).toEqual('1234 Elm Street');
    });
  
    it('destructivelyUpdateEmployeeWithKeyAndValue updates employee with the given key and value (it is destructive)', function() {
      destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '5678 Oak Avenue');
      expect(employee.streetAddress).toEqual('5678 Oak Avenue');
    });
  
    it('deleteFromEmployeeByKey deletes key from a clone of employee and returns the new employee (it is non-destructive)', function() {
      const updatedEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');
      expect(updatedEmployee).toEqual({ name: 'John Doe' });
      expect(employee).toEqual({ name: 'John Doe', streetAddress: '1234 Elm Street' });
    });
  
    it('destructivelyDeleteFromEmployeeByKey modifies the original employee', function() {
      destructivelyDeleteFromEmployeeByKey(employee, 'name');
      expect(employee).toEqual({ streetAddress: '1234 Elm Street' });
    });