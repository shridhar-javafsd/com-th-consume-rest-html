
const restApi = `http://localhost:8082`;

const empDataToBeAdded = {
    firstName: 'Vaman',
    salary: 98765,
    department: {
        departmentId: 30
    }
};

const getEmpById = (empId) => {
    fetch(`${restApi}/getempbyid/${empId}`)
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empData").innerHTML = response;
            document.getElementById("eid").value = '';
        })
        .catch((error) => {
            alert(error);
        });
}

const getAllEmps = () => {
    fetch(`${restApi}/emplist`)
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empList").innerHTML = response;
        })
        .catch((error) => {
            alert(error);
        });
}

const addEmp = () => {
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
        .catch((error) => {
            alert(error);
        });
}



