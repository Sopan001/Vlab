// function getXY(){
//     // let con = document.getElementById("con");
//     // console.log(con)
//     // let ele = document.getElementById("Gnd");
//     // console.log(ele)
//     // let screen = con.getBoundingClientRect();
//     // console.log("x : ",screen.x,"Y : ",screen.y); 

//     // let co_ordinate = ele.getBoundingClientRect();
//     // console.log("x : ",co_ordinate.x,"Y : ",co_ordinate.y); 
//     // return co_ordinate.x,co_ordinate.y



//     let ele = document.getElementById("Gnd");
//     console.log("element",ele)
//     let top = ele.offsetTop;
//     let bottom = ele.offsetBottom;
//     let left =  ele.offsetLeft;
//     console.log("offset",top,bottom,left)

//     console.log("Parent",ele.offsetParent)

//     let container = document.getElementById("line_col");
//     console.log("container",container)
//     let conTop = container.offsetTop;
//     console.log("Top",conTop)

//     console.log(top - conTop)


//     var offsets = document.getElementById('Gnd').getBoundingClientRect();
//     var t = offsets.top;
//     var l = offsets.left;
//     console.log("GetB",t,l)


//     var soffsets = document.getElementById('line_col').getBoundingClientRect();
//     var ts = soffsets.top;
//     var ls = soffsets.left;
//     console.log("GetBS",ts,ls)

//     console.log(ts-t)

// }


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

draw_ground()
draw_positive()



//getXY()