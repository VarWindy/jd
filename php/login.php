<?php
    $value=$_POST['value'];
 	$arr=['123456','13000000','138138138','13131313','123456789','1111111','88888888'];

 	if(in_array($value,$arr)){
    		echo 'y';
    	}else{
    		echo "n";
    	}
?>