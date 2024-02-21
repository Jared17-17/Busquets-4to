const app = {
    urlDatos : "/resources/data/autos.json",
    filtro : "todos",

    cargarFichas : function(){
        const fichas = document.getElementById("#fichas");
        let html = "";
        fetch(app.urlDatos)
        .then( response => response.json() )
        .then( autos => {  
            for( let auto of autos){
                if(auto.tipo == app.filtro || app.filtro == "todos"){
                    html += `
                    <div class="ficha">
                        <img src="resources/images/${ auto.foto}>
                        <div class="datos">
                            <h3>${ auto.marca }</h3>
                            <span>${ auto.modelo}</span>
                            <span>${auto.anion}</span>
                            <br>
                            <small>
                                ${ auto.motor.desplazamiento } 
                                ${ auto.motor.potencia } 
                                ${ auto.motor.rendimiento } 
                            </small>
                        </div>
                    </div>    
                    `;
                }
            }
            fichas.innerHTML = html;
        }).catch( error => console.error(error));
    }
};