var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu button');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened')
})


let theory = document.getElementById("theory");
let procedure = document.getElementById("procedure");
let simulation = document.getElementById("simulation");
let faq = document.getElementById("faq");
let theory_btn = document.getElementById("theory_btn");
let procedure_btn = document.getElementById("procedure_btn");
let simulation_btn = document.getElementById("simulation_btn");
let faq_btn = document.getElementById("faq_btn");

function onClickTheory()
{
	theory.style.display="flex";
	procedure.style.display="none";
	simulation.style.display="none";
	faq.style.display="none";

	theory_btn.style.color="#5838fc";
	procedure_btn.style.color="#000";
	simulation_btn.style.color="#000";
	faq_btn.style.color="#000";
}


function onClickProcedure()
{
	theory.style.display="none";
	procedure.style.display="flex";
	simulation.style.display="none";
	faq.style.display="none";

	theory_btn.style.color="#000";
	procedure_btn.style.color="#5838fc";
	simulation_btn.style.color="#000";
	faq_btn.style.color="#000";
}

function onClickSimulation()
{
	theory.style.display="none";
	procedure.style.display="none";
	simulation.style.display="flex";
	faq.style.display="none";

	theory_btn.style.color="#000";
	procedure_btn.style.color="#000";
	simulation_btn.style.color="#5838fc";
	faq_btn.style.color="#000";
}

function onClickFAQ()
{
	theory.style.display="none";
	procedure.style.display="none";
	simulation.style.display="none";
	faq.style.display="flex";

	theory_btn.style.color="#000";
	procedure_btn.style.color="#000";
	simulation_btn.style.color="#000";
	faq_btn.style.color="#5838fc";
}

