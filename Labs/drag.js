let circuit = {
    'arduino':false,
    'blackwire':false,
    'redwire':false,
    'led':false
};


function updateCircuit(name){
    circuit[name] = true;
}


function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    id=ev.target.id;
}

function draw_ground()
{
    let c =document.getElementById("black");
    let ctx = c.getContext("2d");

    ctx.lineWidth = 1;


        ctx.beginPath();
        ctx.moveTo(0, 68);
        ctx.lineTo(210, 68);
        ctx.lineTo(210, 120);
        ctx.lineTo(275, 120);
        ctx.strokeStyle = "black";
        ctx.stroke();
}


function draw_positive()
{
    let c =document.getElementById("red");
    var ctx = c.getContext("2d");


        ctx.beginPath();
        ctx.moveTo(0, 95);
        ctx.lineTo(130, 97);
         ctx.lineTo(130, 125);
         ctx.lineTo(300, 125);
        ctx.strokeStyle = "red";
        ctx.stroke();
}



function drop(ev,item){
    var data=document.getElementById(item);
    // let label = `${item}_label`;
    // label =document.getElementById(label);
        if(id==item)
        {
            let label = `${item}_label`;
            label =document.getElementById(label);
            updateCircuit(id);
            label.style.visibility = "hidden";
           	ev.target.append(data);
           
        }
        else
        {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `It is not ${item}.`
            });
        }
}


function hideContent(name){
	name = document.getElementById(name);
	name.style.display = "none";
}



function lineDrop(ev,item)
{
	    //var data=document.getElementById(item);
        // let label = `${item}_label`;
        // label =document.getElementById(label);
	    if(id == 'blackwire' || id == "redwire")
	    {   
            
            let label = `${item}_label`;
            label =document.getElementById(label);

	    	if(id == 'blackwire')
        	{
            	draw_ground();
            	hideContent("blackwire");
                updateCircuit(id);
                label.style.visibility = "hidden";
        	}
        	else if(id == "redwire")
        	{
            	draw_positive();
            	hideContent("redwire");
                updateCircuit(id);
                label.style.visibility = "hidden";
        	}
	    }
	    else
	    {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'It is not wire',
            });
	    }

}

function changeImage(){
    var image=document.getElementById("led");
    if (image.src.match("img/led.png")) {
        image.src = "img/demo3.png";       
      } else {
        image.src = "img/led.png";
      }
}


function isValidCircuit()
{
    cnt = 0
    for(let index in circuit){
        if(circuit[index] === true)
        {
            cnt++;
        }
    }
    if(cnt == 4)
    {
        return true;
    }
    return false;
}


function onSubmit()
{   
    if(isValidCircuit())
    {   
        let col1 = document.getElementById("col1");
        let col2 = document.getElementById("col2");
        let col3 = document.getElementById("col3");

        col1.style.border = "none";
        col2.style.border = "none";
        col3.style.border = "none";

        setInterval(changeImage, 1000);
    }
    else
    {
        Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Circuit is not complete',
        })
    }
}