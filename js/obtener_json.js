const tabla = document.querySelector('#tabla_usuarios tbody');

function obtener_datos(){
    fetch('usuarios.json')
    .then(resp => resp.json())
    .then (datos_usuarios => {
        datos_usuarios.forEach(usuario => {
            // console.log(usuario);
            const row = document.createElement('tr');
            row.innerHTML += 
            `<td>${usuario.id}</td>
            <td>${usuario.name}</td> 
            <td>${usuario.email}</td>
            <td>${usuario.address.city}</td>
            `;
            tabla.appendChild(row);    
        });
        

    });

}

obtener_datos();