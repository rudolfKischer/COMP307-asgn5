<html>
 <head>
 <link rel="stylesheet" href="style.css">
  <title>PHP Test</title>
 </head>
 <body onload='load()'>
 <?php 
 $header = './matter/mini5header.txt';
 $content = './matter/mini5content.txt';
 $home = './matter/mini5home.txt';
 $hobbies = './matter/mini5hobbies.txt';
 $footer = './matter/mini5footer.txt';
 

 display($header);
 display($content);
 display($footer);
 

function display($path) {
    $file = fopen($path,"r");
    while(!feof($file)) {
        $line = fgets($file);
        echo $line;
    }
    fclose($file);
}
 ?>
 <script type="text/javascript" src="mini5.js"></script>
 </body>
</html>
