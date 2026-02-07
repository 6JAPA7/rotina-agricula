let contador = 0
let input = document.getElementById('tarefa');
let main = document.getElementById('areaLista');
let btnAdd = document.getElementById('btn');
mainLista = [];


function add(){
    let tarefa = input.value;
    ++contador
    
    if ((tarefa !== null)& (tarefa !=="") & (tarefa !== undefined)) {
        ++contador;
    
        let novoItem = `<div id="${contador}" class="noDone">
            <span class="texto-tarefa">`+tarefa+`</span>
            <button onclick="concluir(${contador})">✔ Concluir</button>
            <button onclick="deletar(${contador})">🗑 Deletar</button>
        </div>`;
        
        
        main.innerHTML += novoItem;

        mainLista.push(tarefa)
        
        input.value = ""
        input.focus()
        console.log(mainLista)
        console.log(novoItem)
     }}

function deletar(id){
    var task = document.getElementById(id);
    task.remove();
}
function concluir(id){
    var noDone = document.getElementById(id);
    var classe = noDone.getAttribute('class');
   
    if (classe === "noDone") {
        noDone.classList.remove('noDone');
        noDone.classList.add('done');
        noDone.parentNode.appendChild(noDone)
    
    }
    else {

    }
}
input.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})