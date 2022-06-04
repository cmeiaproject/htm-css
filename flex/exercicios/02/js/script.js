let comboFlexDirection;
let comboFlexDirectionRemover;
let comboFlexWrap;
let comboFlexWrapRemover;
let comboFlexJustifyContent;
let comboFlexJustifyContentRemover;
let comboFlexAlignItems;
let comboFlexAlignItemsRemover;
let comboFlexAlignContent;
let comboFlexAlignContentRemover;
let comboFlexCaixaOrdem;
let comboFlexOrder;
let comboFlexOrderRemover;


let container;
let divID;

function comboFlexOpcoesOnChange(e)
{
	let value = e.target.value;
	console.log(value);
	if( !container.classList.contains(value) )
	{	
		console.log('adicionado->' + value);
		container.classList.add(value);
	}	
}

function comboFlexItemOpcoesOnChange(e)
{
	let value = e.target.value;
	let name = comboFlexCaixaOrdem.value;
	let divID = document.getElementById(name);
	
	console.log(value);
	console.log(divID);	
	
	
	if( !divID.classList.contains(value) )
	{	
		console.log('adicionado->' + value);
		divID.classList.add(value);
	}	
}

function comboFlexItemOpcoesRemoverOnChange(e)
{
	let value = e.target.value;
	let name = comboFlexCaixaOrdem.value;
	let divID = document.getElementById(name);
	
	console.log(value);
	
	if( value == 'todos' )
	{
		for(let i=0; i < e.target.length; i++)
		{
			value = e.target.options[i].value;
			divID.classList.remove(value);			
		}	
	}	
	else if( divID.classList.contains(value) )
	{	
		console.log('removido->' + value);
		divID.classList.remove(value);
	}	
}


function comboFlexOpcoesRemoverOnChange(e)
{
	let value = e.target.value;
	console.log(value);
	
	if( value == 'todos' )
	{
		for(let i=0; i < e.target.length; i++)
		{
			value = e.target.options[i].value;
			container.classList.remove(value);			
		}	
	}	
	else if( container.classList.contains(value) )
	{	
		console.log('removido->' + value);
		container.classList.remove(value);
	}	
}

function popularcomboFlexOpcoesRemover()
{
//	let opcoes = comboFlexOpcoes.options;
//	console.log(opcoes.length);
//	for(let i = 0; i < comboFlexOpcoes.length; i++)
//	{
//		comboFlexOpcoesRemover.options.add( opcoes[i] );
//		console.log(i);
//	}	
	let opcaoNenhum = '<option value="none" selected>Nenhum</option>';
	let opcaoTodos = '<option value="todos">Remover Todos</option>';
	comboFlexDirectionRemover.innerHTML = opcaoNenhum;
	comboFlexDirectionRemover.innerHTML += comboFlexDirection.innerHTML;
	comboFlexDirectionRemover.innerHTML += opcaoTodos;
	
	comboFlexWrapRemover.innerHTML = opcaoNenhum;
	comboFlexWrapRemover.innerHTML += comboFlexWrap.innerHTML;	
	comboFlexWrapRemover.innerHTML += opcaoTodos;	
	
	comboFlexJustifyContentRemover.innerHTML = opcaoNenhum;
	comboFlexJustifyContentRemover.innerHTML += comboJustifyContent.innerHTML;		
	comboFlexJustifyContentRemover.innerHTML += opcaoTodos;
	
	comboFlexAlignItemsRemover.innerHTML = opcaoNenhum;
	comboFlexAlignItemsRemover.innerHTML += comboAlignItems.innerHTML;			
	comboFlexAlignItemsRemover.innerHTML += opcaoTodos;				
	
	comboFlexAlignContentRemover.innerHTML = opcaoNenhum;
	comboFlexAlignContentRemover.innerHTML += comboAlignContent.innerHTML;			
	comboFlexAlignContentRemover.innerHTML += opcaoTodos;			
	
	comboFlexOrderRemover.innerHTML = opcaoNenhum;
	comboFlexOrderRemover.innerHTML += comboFlexOrder.innerHTML;
	comboFlexOrderRemover.innerHTML += opcaoTodos;					
}




window.onload = function()
				{
					comboFlexDirection = document.getElementById("comboFlexDirection");
					comboFlexDirectionRemover = document.getElementById("comboFlexDirectionRemover");			
					comboFlexWrap = document.getElementById("comboFlexWrap");
					comboFlexWrapRemover = document.getElementById("comboFlexWrapRemover");			
					comboFlexJustifyContent = document.getElementById("comboJustifyContent");
					comboFlexJustifyContentRemover = document.getElementById("comboJustifyContentRemover");			
					comboFlexAlignItems = document.getElementById("comboAlignItems");
					comboFlexAlignItemsRemover = document.getElementById("comboAlignItemsRemover");			
					comboFlexAlignContent = document.getElementById("comboAlignContent");
					comboFlexAlignContentRemover = document.getElementById("comboAlignContentRemover");			
					comboFlexCaixaOrdem = document.getElementById("comboCaixaOrdem");
					comboFlexOrder = document.getElementById("comboFlexOrder");
					comboFlexOrderRemover = document.getElementById("comboFlexOrderRemover");					
					
					container = document.getElementById("container");					
					comboFlexDirection.onchange = comboFlexOpcoesOnChange;
					comboFlexDirectionRemover.onchange = comboFlexOpcoesRemoverOnChange;					
					comboFlexWrap.onchange = comboFlexOpcoesOnChange;
					comboFlexWrapRemover.onchange = comboFlexOpcoesRemoverOnChange;					
					comboFlexJustifyContent.onchange = comboFlexOpcoesOnChange;
					comboFlexJustifyContentRemover.onchange = comboFlexOpcoesRemoverOnChange;					
					comboFlexAlignItems.onchange = comboFlexOpcoesOnChange;
					comboFlexAlignItemsRemover.onchange = comboFlexOpcoesRemoverOnChange;					
					comboFlexAlignContent.onchange = comboFlexOpcoesOnChange;
					comboFlexAlignContentRemover.onchange = comboFlexOpcoesRemoverOnChange;					
					
					comboFlexOrder.onchange = comboFlexItemOpcoesOnChange;
					comboFlexOrderRemover.addEventListener('change', comboFlexItemOpcoesRemoverOnChange);					
					
					popularcomboFlexOpcoesRemover();					
				}