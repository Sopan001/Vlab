
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

    //let x1,y1;
    //x1,y1 = getXY()
    //console.log("X1 ",x1,"Y1",y1)

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
    //let x1,y1;
    //x1,y1 = getXY()
    //console.log("X1 ",x1,"Y1",y1)

        ctx.beginPath();
        ctx.moveTo(0, 95);
        ctx.lineTo(130, 97);
         ctx.lineTo(130, 125);
         ctx.lineTo(300, 125);
        ctx.strokeStyle = "red";
        ctx.stroke();
}


function drop(ev,item){
    var data=document.getElementById(id);
        if(id==item)
        {
            
           	ev.target.append(data);
           
        }
        else
        {
            alert(`It is not ${item}.`);
        }
}


function hideContent(name){
	name = document.getElementById(name);
	name.style.display = "none";
}

function lineDrop(ev,item)
{
	    var data=document.getElementById(id);
	    if(item == 'wire')
	    {
	    	if(id == 'blackwire')
        	{
            	draw_ground();
            	hideContent("blackwire");
        	}
        	else if(id == "redwire")
        	{
            	draw_positive();
            	hideContent("redwire");
        	}
	    }
	    else
	    {
	    	console.log("It is not wire");
	    }

}