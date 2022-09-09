class Contabla extends  HTMLElement{
    constructor(){
        super();
    }
    Geo(){
        const req = new XMLHttpRequest();
        const met =  'GET';
        const url = 'https://api.datos.gob.mx/v1/calidadAire';
        const datos = document.getElementById('datos') ;
    
        req.addEventListener('load', ()=>{
            if (req.status === 200){
            var json = JSON.parse(req.responseText);
            console.log(json);
            var arr =  Object.keys(json).map((key) => json[key])
            var stattionArr = arr[1];
             
            for(const i of stattionArr){
                datos.innerHTML += `<tr><td>`+i.stations[0].id +`</td>
                                     <td>`+i.stations[0].name+`</td>
                                     <td>`+i.stations[0].source_id+`</td>
                                     <td>`+i.stations[0].location.lat  +`</td>
                                     <td>`+i.stations[0].location.lon+`</td>
                                     <td>`+i.stations[0].indexes[0].calculationTime+`</td></tr>`;
               
            }
           
         }
   
        });
        req.open(met,url,true);
        req.send(null);
        }
   
}
customElements.define('mi-tabla', Contabla);

let tabla = new Contabla();
let tbody =  document.createElement('tbody');
document.body.appendChild(tabla);
tabla.appendChild(tbody);
tbody.setAttribute('id','datos');
tabla.Geo();
