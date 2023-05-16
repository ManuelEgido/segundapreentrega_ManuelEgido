const capital = parseInt(prompt("Ingresa su capital invertir: "));
if (capital <= 0) {
    alert("El capital debe ser mayor a 0");
} else {
    const interes = parseInt(prompt("Ingresa su tasa de interes: "));
    if (interes <= 0) {
        alert("El interes debe ser mayor a 0");
    } else {
        const plazo = parseInt(prompt("Ingresa la cantidad de años: "))* 12 ;
        if (plazo <= 0) {
            alert("El plazo debe ser mayor a 0");
        }else {
        
            
            var today = new Date();
            /*
             * ARREGLO DE MESES
             * [
             * {ID: 1, MES: 01, ANIO: 2023, ACUMULADO: 3456},
             * {ID: 2, MES: 02, ANIO: 2023, ACUMULADO: 3456},
             * ]
             * 
             */
            var array_meses =[];
            const tasa = interes/ 12 / 100;
            //defino la funcion para calcular el capital acumulado
            const calcularCap = (cap, tasa) => cap * (tasa);
            // para calcular todos los meses en el bucle tenemos que primero calcular el acumulado del primer mes
            let capAcumulado = capital + (calcularCap(capital, tasa));
            array_meses.push({ID: 1, MES: today.getMonth() +1 , ANIO: today.getFullYear(), ACUMULADO: capAcumulado});
            // como ya tenemos el primer mes el bucle arranca en el indice 2
            for (var i = 2; i <= plazo ; i++) {
                today.setMonth(today.getMonth()+1);
                capAcumulado += calcularCap(capAcumulado, tasa);
                array_meses.push({ID: i, MES: today.getMonth() +1 , ANIO: today.getFullYear(), ACUMULADO: capAcumulado});
            }

            array_meses.forEach(element => console.log(element));
            alert(`Su capital acumulado es: ${capAcumulado}`);

            const filtroXmes = parseInt(prompt("Ingrese numero de mes a filtrar: "));
            if (filtroXmes < 1 || filtroXmes > 12)
            {alert ("Ingrese un numero de mes valido (del 1 al 12)")}
            else {

                const result = array_meses.filter(element => element.MES === filtroXmes);
                //imprime array completo
                console.log(result);
                //imprime elemento por elemento del array
                result.forEach(element => console.log(element));

                let contenedor = document.getElementById("contenedor");
                result.forEach((item) => {
                    let div = document.createElement("div");
                    div.innerHTML = `
                      <h2>ID: ${item.ID}</h2>
                      <h2>MES: ${item.MES}</h2>
                      <h2>AÑO: ${item.ANIO}</h2>
                      <h2>ACUMULADO: ${item.ACUMULADO}</h2>
                      <hr />
                    `;
                  
                    contenedor.append(div);
                  });
            }
        }

    }

}