 
const restApi = `http://localhost:8082/emp`;

const getEmpById = (empId) => {
    console.log(`getEmpById`);
    fetch(`${restApi}/getempbyid/${empId}`, { method: 'GET' })
        .then(data => {
            return data.json();
        })
        .then((response) => {
            document.getElementById("empData").innerHTML = JSON.stringify(response);
            document.getElementById("eid").value = '';
            console.log(JSON.stringify(response));

        })
        .catch((error) => {
            document.getElementById("eid").value = '';
            document.getElementById("empData").innerHTML = 'Something is wrong!';
            console.log(error);
        });
}

const getAllEmps = () => {
    console.log(`getAllEmps`);
    fetch(`${restApi}/emplist`)
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empList").innerHTML = response;
        })
        .catch(() => {
            document.getElementById("empList").innerHTML = 'Something is wrong!';
        });
}

const addEmp = () => {
    console.log(`addEmp`);
    fetch(`${restApi}/addemp`, {
        body: JSON.stringify({
            firstName: document.getElementById("firstName").value,
            salary: document.getElementById("salary").value,
            department: {
                departmentId: document.getElementById("departmentId").value
            }
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empAdded").innerHTML = response;
            document.getElementById("firstName").value = '';
            document.getElementById("salary").value = '';
            document.getElementById("departmentId").value = '';
        })
        .catch(() => {
            document.getElementById("empAdded").innerHTML = 'Something is wrong!';
            document.getElementById("firstName").value = '';
            document.getElementById("salary").value = '';
            document.getElementById("departmentId").value = '';
        });
}



