
customElements.define('button-share',class extends HTMLElement{
    constructor(){
        super();
        this.addEventListener('click',function(e){
            buscar();
        });
    }
})

function buscar(){
    const tablaAct = document.getElementById('datos');
    let busqueda = document.getElementById('input-busqueda').value.toLowerCase();


    // Recorremos todas las filas con contenido de la tabla
    for (let i = 1; i < tablaAct.rows.length; i++) {

        let found = false;
        const cellsOfRow = tablaAct.rows[i].getElementsByTagName('td');
        // Recorremos todas las celdas
        for (let j = 0; j < cellsOfRow.length && !found; j++) {
            const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            // Buscamos el texto en el contenido de la celda
            if (busqueda.length == 0 || compareWith.indexOf(busqueda) > -1) {
                found = true;
            }
        }
        if (found) {
            tablaAct.rows[i].style.display = '';
        } else {
            // si no ha encontrado ninguna coincidencia, esconde la
            // fila de la tabla
            

           tablaAct.rows[i].style.display = 'none';
        }
    }

    // mostramos las coincidencias
    let lastTR = tablaAct.rows[tablaAct.rows.length - 1];
    const td = lastTR.querySelector("td");
    lastTR.classList.remove("hide", "red");
    if (busqueda == "") {
        lastTR.classList.add("hide");
    }

}