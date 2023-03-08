let inputTarefa = document.querySelector('#inputTarefa');
let btnADD = document.querySelector('#btnAdd');
let listaTarefas = document.querySelector('#listaTarefas');

inputTarefa.addEventListener('keypress', (e) =>{

    if (e.keyCode === 13) {
        let tarefa = {
            nome: inputTarefa.value ,
            id: gerarId(),
        }
        adicionarTarefa(tarefa);
    }

});

btnADD.addEventListener('click' , (e) =>{
    let tarefa = {
        nome: inputTarefa.value ,
        id: gerarId(),
    }
    adicionarTarefa(tarefa);
});

function gerarId(){
    return Math.floor(Math.randon() *3000);
}

function adicionarTarefa(tarefa){
    let li = criartagLi(tarefa);
    listaTarefas.appendChild(li);
    inputTarefa.value = '';
}

function criartagLi(tarefa){

    let li = document.createElement('li');
    
    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = '<i className="RiDeleteBin5Line"><RiDeleteBin5Line/></i>'

    let btnExcluir = document.createElement('button')
    btnExcluir.classList.remove('btnAcao');
    btnEditar.innerHTML = '<i className="BsPencilFill"><BsPencilFill/></i>'

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
    

}