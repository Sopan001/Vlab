let ans = ['Microcontroller','ARM','Pi','Arch Linux,Fedora Remix,Debian','64 bit','1.2GHz'];

function verifyAnswer()
{
	let score = 0;
	let checkedCount = 0;

	for(let i=0;i<6;i++)
	{	
		let faq = document.getElementsByName(`faq${i+1}`);
		for(let j=0;j<faq.length;j++)
		{	
			console.log(i,j)
			if(faq[j].checked)
			{
				if(faq[j].value == ans[i])
				{
					score++;
				}
				checkedCount++;
			}

	
		}
		
	}
	console.log(checkedCount);
	if(checkedCount == 6)
	{
		if(score>0)
		{
			Swal.fire({
	                icon: 'success',
	                title: 'Well Done',
	                text: `You Scored ${score}/6`,
	            });
		}
		else
		{
			Swal.fire({
	                icon: 'warning',
	                title: 'Oops...',
	                text: `You Scored ${score}/6`,
	            });
		}
	}
	else
	{

		Swal.fire({
	        icon: 'error',
	        title: 'Oops...',
	        text: `Some questions are not answered`,
	    });
	}
}