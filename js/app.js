function cargarJSON() {
    fetch("./data/data.json")
        .then(function(res) {
            return res.json();
        })
        .then(function(data){
            let html = document.querySelector("#names-content");
            let empleados = data.empleados;
            for (let i = 0; i < empleados.length; i++) {
              html.innerHTML +=`
              <tr>
              <th scope="row">${empleados[i].id}</th>
              <td>${empleados[i].name}</td>
              <td>${empleados[i].Telephone}</td>
              <td>${empleados[i].Speciality}</td>
              <td>${empleados[i].Department}</td>
            </tr>
              `
            }
        })
        .catch(function(error) {
            console.log(error);
        });
  }

  cargarJSON()