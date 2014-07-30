	var url = "http://localhost/remote";
	var representationOfDesiredState = "The cheese is old and moldy, where is the bathroom?";

	var client = new XMLHttpRequest();

	client.open("GET", url, false);

	client.setRequestHeader("Content-Type", "text/plain");

	client.send(representationOfDesiredState);

	/*if (client.status == 200){
	    // alert("The request succeeded!\n\nThe response representation was:\n\n" + client.responseText)
	    // console.log(client.responseText);
	}
	else{
	    alert("The request did not succeed!\n\nThe response status was: " + client.status + " " + client.statusText + ".");
	}*/
	var response = client.responseText;
	var  parsedJson= eval('('+JSON.parse(response)+')');
	
	var continentArr=parsedJson.continents;
	

	var mainJson=document.getElementById('displayJson');
	var ul1= document.createElement('ul');

	for(var i=0;i<continentArr.length;i++)
		{
			var li1=document.createElement("li");
			li1.className="continentlist";
			li1.innerHTML +="<span>"+continentArr[i].continent+"</span>";
			var countriesArr=continentArr[i].countries;
			var ul2=document.createElement("ul");
			for(var j= 0;j<countriesArr.length;j++)
			{
				var li2 = document.createElement('li');
				/*for(coun in countriesArr[j])
					{
						li2.innerHTML+=(countriesArr[j][coun]);
					}*/
					var countryName = countriesArr[j].country;
					var countrySlug = countryName.replace(/\s+/g, '_');
					var countryLink = "http://localhost/travel/"+countrySlug+"/"+countriesArr[j].id;
					li2.innerHTML+="<a href='"+countryLink+"'>"+countryName+"</a>";

					ul2.appendChild(li2);

			}

			li1.appendChild(ul2);
			ul1.appendChild(li1);
			ul1.className="continent";

		}
		
		mainJson.appendChild(ul1);