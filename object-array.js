const number = [1 , 2, 7, 11, 98];
const players = [{}, {}, {}];
const employees = [
{Name : 'Anik', Designation:'Web Developer', Salary: 30000 },
{Name: 'Rahim', Designation: 'Content Writer', Salary: 23000 },
{Name: 'Karim', Designation: 'Digital Marketer', Salary: 19000}

]
employees[1].Name = 'Sofik'
// console.log(employees[0].Salary)

// for (const employee of employees){
//     console.log(employee.Salary, employee.Designation)
// }

for(const emp of employees){
    const person = emp;
    const personInfo = person.Name + ' '+ person.Salary;
    console.log(personInfo)
}