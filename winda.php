<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<title>Winda</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	
    <link rel="stylesheet" href="style.css" type="text/css" />
    <link rel="stylesheet" href="css/fontello.css" type="text/css" />
    <script src="winda.js"></script>
   </head>

<body oncontextmenu="return false">

	<div id="container">
	
		<div id="logo">
                <a id="napislogo" href="#">PPH "WinDa"<br> Ładowność 12 osób / 1200 kg</a>
        </div>
    <div id = "wierszstatus">    
       <div id="zegar">zegar
       </div>
	   <div id="status">
                <i class="icon-battery-3">&#32;&#32;</i><i class="icon-wifi">winda@3&#32;&#32;</i><i class="icon-signal">g6&#32;&#32;</i>
       </div>
	</div>
		<div id="pietra">
			<div id="wybranepietra1"></div>
            <div id="wybranepietra2"></div>
            <div id="wybranepietra3"></div>   
		</div>
		
        <div id="panel">
		<div id="informacje">
  		</div>
        <div id="status2">
            <a href="#">&#32;KIERUNEK:&#32;</a>
            <a href="#"><i class="icon-up-fat"></i></a>
            <a  href="#">&#32;PIĘTRO:&#32;</a>
            <a  href="#" class="status2_mrugaj"><i class="icon-up-fat"></i>&#32;17</a> 
  		</div>
            
		
		<div id="przyciski">
            <div id="openclose">
                <a id="przyciskiopen" class="przycisk przyciskdrzwi" onclick="fn_dzialanie(1)" href="#"><i class="icon-to-end"></i><i class="icon-to-start"></i></a>
                <a id="przyciskiclose" class="przycisk przyciskdrzwi" onclick="fn_dzialanie(2)" href="#"><i class="icon-to-start"></i><i class="icon-to-end"></i></a>
			</div>
            <div id="stoppomoc">
                <a id="przyciskstop" class="przycisk przyciskalarm" onclick="fn_dzialanie(3)" href="#">STOP</a>
                <a id="przyciskpomoc" class="przycisk przyciskalarm" onclick="fn_dzialanie(4)" href="#">Pomoc</a>
            </div>
            <div id="startkasuj">
                <a id="przyciskidalej" class="przycisk przycisksterowanie cyfra_dis" onclick="fn_dzialanie(5)" href="#">Start</a>
                <a id="przyciskiup" class="przycisk przycisksterowanie cyfra_dis" onclick="fn_dzialanie(6)" href="#"><i class="icon-up-fat"></i></a>
                <a id="przyciskikasuj" class="przycisk przycisksterowanie cyfra_dis" onclick="fn_dzialanie(7)" href="#">Kasuj</a>
                <a id="przyciskidown" class="przycisk przycisksterowanie cyfra_dis" onclick="fn_dzialanie(8)" href="#"><i class="icon-down-fat"></i></a>
                
            </div>
		</div>
		</div>
	
	</div>

</body>
</html>