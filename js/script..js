const formularioUsuarios = document.querySelector (".formularioUsuarios")
cost tarjetaUsuarios = document.querySelector("#tarjetaUsuarios")
const usuarios = []

const renderizarUsuarios = () => {
    tarjetaUsuarios.innerHTML= ""
    for (const usuario of usuarios) {
        tarjetaUsuarios.innerHTML += `
        <div>
            <h2>Origen: ${usuario.origen}<h2>
            <p>Destino: ${usuario.destino}<p>
            <p>Fecha: ${usuario.fecha}<p>
            <Pasajeros: ${usuario.pasajeros}<p>
        <div>
        `
    }
}

formularioUsuarios.addEventListener("submit", (event) => {event.preventDefault})


console.log (formularioUsuarios.destino.value)

usuarios.push({

    origen: formularioUsuarios.nombre.value,
    destino: formularioUsuarios.destino.value,
    fecha: formularioUsuarios.fecha.value,
    Pasajeros: formularioUsuarios.pasajeros.value
})

renderizarUsuarios()
