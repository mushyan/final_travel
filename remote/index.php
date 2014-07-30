<?php
    	header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST');

		function setokstatus($data)
	    {
	        return "{\"data\":".$data."}";
	    }
	    
	    $countries = file_get_contents("continent.json");
	    // var_dump($countries);
		echo json_encode($countries);
	?>