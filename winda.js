
window.onload = startnew;

var czasstart;
var czaskonca;
var czaswspolnika = 90; // czas wspólnika 90 min
var startpietra = -2;
var iloscpieter = 30;
var pietrazaznaczone = new Array(iloscpieter);
var obecnepietro = 13;
var nastepnepietro = 0;
var kod = 0;
var komunikatnr = 0;
var odliczanieminuty;
var pietro_13;
var infowysokosc = 570;
var czas;
var czasofset;
var czasawaria;
var czasofsetawaria;
    

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";SameSite=None; Secure" + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
function getTime(czasofset,czasofsetawaria)
{
    return (pobierzTime(czasofset,czasofsetawaria)).toLocaleString();
}

function pobierzTime(czasofset, ofset)
{
    var czas = new Date();
    var millisekundy = czas.getMilliseconds();
    millisekundy = millisekundy + czasofset + ofset;
    czas.setMilliseconds(millisekundy);
        return czas;
}

function startnew()
{

for(i=0; i < iloscpieter; i++)
    {
    pietrazaznaczone[i] = 0;
    }
pietra();
    
let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) 
  {
    start(true);
  } else 
  {
    start(false);   
  }
}


function start(poczatek)
{
if (poczatek)
{
czasofset = new Date();
  setCookie("czasofset.seth",czasofset.getHours(),30);
  setCookie("czasofset.setm",czasofset.getMinutes(),30);
  setCookie("czasofset.sets",czasofset.getSeconds(),30);
czasofsetawaria = new Date();
czas = new Date();
var seth = 13;    
var setm = 57;    
var sets = 24;    
czas.setHours(seth);
czas.setMinutes(setm);
czas.setSeconds(sets);
  setCookie("czas.seth",seth,30);
  setCookie("czas.setm",setm,30);
  setCookie("czas.sets",sets,30);
czasawaria = new Date()    
var setha = czas.getHours();    
var setma = czas.getMinutes();    
var setsa = czas.getSeconds();    
czasawaria.setHours(setha);
czasawaria.setMinutes(setma);
czasawaria.setSeconds(setsa);
  setCookie("czasawaria.setha",setha,30);
  setCookie("czasawaria.setma",setma,30);
  setCookie("czasawaria.setsa",setsa,30);
czasofset = czas - czasofset;
czasofsetawaria = czasawaria - czas; 
  setCookie("czasofsetawaria",czasofsetawaria,30);
czasstart = pobierzTime(czasofset, 0);
  setCookie("czasstart",czasstart,30);
czaskonca = pobierzTime(czasofset, 0);
  setCookie("czaskonca",czaskonca,30);
}
else
{
czas = new Date();
czas.setHours(Number.parseInt(getCookie("czas.seth")));
czas.setMinutes(Number.parseInt(getCookie("czas.setm")));
czas.setSeconds(Number.parseInt(getCookie("czas.sets")));  
czasawaria = new Date()    
czasawaria.setHours(Number.parseInt(getCookie("czasawaria.setha")));
czasawaria.setMinutes(Number.parseInt(getCookie("czasawaria.setma")));
czasawaria.setSeconds(Number.parseInt(getCookie("czasawaria.setsa")));
czasofset = new Date();
czasofset.setHours(Number.parseInt(getCookie("czasofset.seth")));    
czasofset.setMinutes(Number.parseInt(getCookie("czasofset.setm")));    
czasofset.setSeconds(Number.parseInt(getCookie("czasofset.sets")));    
czasofset = czas - czasofset;
czasofsetawaria = Number.parseInt(getCookie("czasofsetawaria"));    
czasstart = pobierzTime(czasofset, 0);
//czasstart = (getCookie("czasstart"));    
czaskonca = pobierzTime(czasofset, 0);
//czaskonca = (getCookie("czaskonca"));    
}

fn_dzialanie = fn_dzialanie0;    
    
var minuty = czaskonca.getMinutes();
minuty += czaswspolnika;
czaskonca.setMinutes(minuty);    
    //pokaż zegar
document.getElementById('zegar').innerHTML = getTime(czasofset,czasofsetawaria);    
    //start odświerzania zegara
setInterval(function() {
    document.getElementById('zegar').innerHTML = getTime(czasofset,czasofsetawaria); 
/*    var czas = new Date();
    var setha = czas.getHours();    
    var setma = czas.getMinutes();    
    var setsa = czas.getSeconds();    
    setCookie("czasawaria.setha",setha,30);
    setCookie("czasawaria.setma",setma,30);
    setCookie("czasawaria.setsa",setsa,30);
*/        }, 1000 );

var ofsetstart = Math.trunc((pobierzTime(czasofset, czasofsetawaria) - czasstart)/1000);    
    //start historii    
if (ofsetstart > 1) { historia();}
    else { setTimeout(function() { historia() }, 1000 * (1 - ofsetstart)); } 
     //piętro 13
if (ofsetstart > 15) { pietro13();}
    else { pietro_13 = setTimeout(function() { pietro13() }, 1000 * (15 - ofsetstart)); }
    //wiadomość 19 po 10 min - groźba;    
if (ofsetstart > (60 * 1)) { dodaj_grozba(1);}
    else { setTimeout(function() { dodaj_grozba(1) }, 1000 * 60 * (1 - ofsetstart / 60)); }
    //wiadomość 3 po 15 min - osoba;
if (ofsetstart > (60 * 2)) { dodaj_grozba(3);}
    else { setTimeout(function() { dodaj_grozba(3) }, 1000 * 60 * (2 -ofsetstart / 60)); }
    //wiadomość 5 po 30 min - broń ;
if (ofsetstart > (60 * 3)) { dodaj_grozba(5);}
    else { setTimeout(function() { dodaj_grozba(5) }, 1000 * 60 * (3 -ofsetstart / 60)); }  
    //wiadomość 7 po 45 min - przypomnienie;
if (ofsetstart > (60 * 45)) { dodaj_grozba(7);}
    else { setTimeout(function() { dodaj_grozba(7) }, 1000 * 60 * (45 -ofsetstart / 60)); }  
    //wiadomość 8 po 60 min - przypomnienie musimy;
if (ofsetstart > (60 * 60)) { dodaj_grozba(8);}
    else { setTimeout(function() { dodaj_grozba(8) }, 1000 * 60 * (60 -ofsetstart / 60)); }  
    //wiadomość 9 po 75 min - furtka;
if (ofsetstart > (60 * 75)) { dodaj_grozba(9);}
    else { setTimeout(function() { dodaj_grozba(9) }, 1000 * 60 * (75 -ofsetstart / 60)); }  
    //Odliczanie min po 80 min ;
if (ofsetstart > (60 * 80)) { 
                            dodaj_grozba(10);
                            odliczanieminuty = setInterval(function() {dodaj_grozba(10);}, 1000 * 60);}
    else { 
    setTimeout(function() { 
    dodaj_grozba(10);
    odliczanieminuty = setInterval(function() {dodaj_grozba(10);}, 1000 * 60); 
    }, 1000 * 60 * (80 -ofsetstart / 60));
 }  
    //Wyłączenie odliczania min po 89 min
if (ofsetstart > (60 * 89)) { clearInterval(odliczanieminuty);}
    else { setTimeout(function() { clearInterval(odliczanieminuty);}, 1000 * 60 * (89 -ofsetstart / 60)); }  
    //Odliczanie sek po 89 min ;
setTimeout(function() { 
    dodaj_grozba(11);
    odliczanieminuty = setInterval(function() {dodaj_grozba(11);}, 1000); 
    }, 1000 * 60 * (89 -ofsetstart / 60)); 
}


function pietro13()
{
    document.getElementById("status2").innerHTML = '<a href="#">&#32;KIERUNEK:&#32;</a><a href="#"><i class="icon-up-fat"></i></a><a href="#">&#32;PIĘTRO:&#32;</a><a href="#" class="status2_mrugaj"><i class="icon-hourglass"></i>&#32;13</a>';
    fn_dzialanie = fn_dzialanie1;
    historia2();
}

function komunikat(nr)
{
var czasobecny = pobierzTime(czasofset, czasofsetawaria);
var minuty = Math.trunc((czaskonca - czasobecny) / 1000 / 60);
var sekundy = Math.trunc((czaskonca - czasobecny) / 1000 );
switch (nr)
    {
        case 0: 
            return 'Winda w ruchu.';
            break;    
        case 1: 
            komunikatnr = 2;
            return 'Jesteście na piętrze technicznym.<br>Jesteście w pułapce.<br>Widzę i słyszę was. Winda jest zaminowana.<br>Tu nikt nie usłyszy waszych krzyków.<br>Nie próbujcie się kontaktować przez<br>telefony, bo odpalę ładunki.<br>Spadniecie, zostanie z was miazga.<br>Całkiem jak w windzie na stadionie.<br> ';
            break;    
        case 2: 
            return 'To nic nie da.<br>Mam pełną kontrolę nad windą.<br> '
            break;
        case 3:
            komunikatnr = 4;
            return 'Macie ' + minuty + ' min, aby wybrać kogoś.<br>Kogoś kto umrze w tej windzie.<br>To nie jest żart.<br>Pamiętacie, co się stało w windzie w klubie?<br>Tam zginęła tylko jedna osoba.<br>Na stadionie nie uwierzyli, zginęli wszyscy.<br>Ile będzie trupów w tej windzie?<br>To zależy tylko od Was, czy wytypujecie kogoś.<br>Później dowiecie się jak go zabić,<br>na razie nie martwcie się tym.<br> ';  
            break;    
        case 4: 
            return 'To nic nie da.<br>Mam pełną kontrolę nad windą.<br>A pozostało ' + minuty + ' min,<br>aby kogoś wybrać.<br> ';
            break;
        case 5: 
            komunikatnr = 6;
            return 'Jeden z nas ma ukrytą broń.<br>Użyjcie jej.<br>Jeden strzał, najlepiej w głowę.<br> ';
            break;
        case 6: 
            return 'To nic nie da.<br>Mam pełną kontrolę nad windą.<br>A pozostało: ' + minuty + ' min,<br>do końca waszego czasu.<br> ';
            break;
        case 7: 
            return 'Czas ucieka, macie jeszcze: ' + minuty + ' min,<br>aby wybrać kogoś.<br>Jego życie za Wasze.<br> ';
            break;
        case 8: 
            return 'Czas ucieka, macie jeszcze: ' + minuty + ' min,<br>aby kogoś zabić.<br>Nie musimy tu wszyscy umierać.<br> ';
            break;
        case 9: 
            return 'Macie ' + minuty + ' min,<br> jeżeli nie usłyszę wystrzału<br> odpalę ładunki zginiecie wszyscy.<br> ';
            break;
        case 10: 
            komunikatnr = 10;
            return 'Do końca czasu pozostało: ' + minuty + ' min.<br> ';
            break;
        case 11: 
            if (sekundy > 0)
                {
                return 'Do końca czasu pozostało ' + sekundy + ' sek.<br> ';
                }
            else
                {
                //Koniec po 90 min ;
                clearInterval(odliczanieminuty);
                komunikatnr = 12;
                return '<br>KONIEC CZASU<br>Możecie wezwać policję.<br> ';
                }
            break;    
        case 12:
            return'Policja jest już w drodze.';
            break;
    }
}

function dodaj_grozba(nr)
{
var elmnt = document.getElementById("informacje");    
var tresc_diva = document.createElement("div")    
tresc_diva.innerHTML = '<div class="grozby" style="text-align: center"><br>' + komunikat(nr) + '<br></div>' ;
elmnt.appendChild(tresc_diva);
infowysokosc = elmnt.scrollHeight;    
infowysokosc += 50
elmnt.scrollTop = infowysokosc;  
}


function historia2()
{
    var czas = pobierzTime(czasofset, 0);
    dodaj_informacje(czas,'PIĘTRO: 13','green');
    dodaj_informacje(0,'zamknięte drzwi','gray');
    dodaj_informacje(0,'aby otworzyć drzwi użyj kodu','orange');
    dodaj_informacje(0,'kolejne PIĘTRO: '+nastepnepietro,'orange');
}

function historia()
{
    var elem;
    var czas = pobierzTime(czasofset, 0);
    var sek = czas.getSeconds();
    sek -= 335; czas.setSeconds(sek);
    
    dodaj_informacje(czas,'PIĘTRO: 7','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: -1','orange');
    sek = czas.getSeconds();sek += 3; czas.setSeconds(sek);
    dodaj_informacje(czas,'wybrano PIĘTRO: 0','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: 0','orange');
    sek = czas.getSeconds();sek += 10; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    
    sek = czas.getSeconds();sek += 3; czas.setSeconds(sek);
    dodaj_informacje(czas,'stop PIĘTRO: 3','orange');
    dodaj_informacje(czas,'kolejne PIĘTRO: 3','orange');
    
    sek = czas.getSeconds();sek += 27; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: 3','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: 0','orange');
    sek = czas.getSeconds();sek += 10; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    
    sek = czas.getSeconds();sek += 22; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: 0','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: -1','orange');
    sek = czas.getSeconds();sek += 17; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    
    sek = czas.getSeconds();sek += 15; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: -1','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: -2','orange');
    sek = czas.getSeconds();sek += 3; czas.setSeconds(sek);
    dodaj_informacje(czas,'użycie przycisku "zamknięcie drzwi"','violet');
    sek = czas.getSeconds();sek += 1; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    sek = czas.getSeconds();sek += 2; czas.setSeconds(sek);
    dodaj_informacje(czas,'stop PIĘTRO: -1','gray');

    sek = czas.getSeconds();sek += 13; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: -2','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: -1','orange');
    sek = czas.getSeconds();sek += 3; czas.setSeconds(sek);
    dodaj_informacje(czas,'wybrano PIĘTRO: 27','gray');
    elem = document.getElementById("cyfra_" + 27); zaznaczpietro(elem);
    sek = czas.getSeconds();sek += 2; czas.setSeconds(sek);
    dodaj_informacje(czas,'wybrano PIĘTRO: 5','gray');
    dodaj_informacje(czas,'wybrano PIĘTRO: 10','gray');
    dodaj_informacje(czas,'wybrano PIĘTRO: 9','gray');
    sek = czas.getSeconds();sek += 0; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    
    sek = czas.getSeconds();sek += 5; czas.setSeconds(sek);
    dodaj_informacje(czas,'stop PIĘTRO: 3','gray');

    sek = czas.getSeconds();sek += 10; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: -1','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: 3','orange');
    sek = czas.getSeconds();sek += 3; czas.setSeconds(sek);
    dodaj_informacje(czas,'wybrano PIĘTRO: 0','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: 0','orange');
    sek = czas.getSeconds();sek += 5; czas.setSeconds(sek);
    dodaj_informacje(czas,'wybrano PIĘTRO: 17','gray');
    elem = document.getElementById("cyfra_" + 17); zaznaczpietro(elem);
    nastepnepietro = 17;
    dodaj_informacje(czas,'użycie przycisku "PT"','gray');
    dodaj_informacje(0,'podaj kod czynności','gray');
    sek = czas.getSeconds();sek += 1; czas.setSeconds(sek);
    dodaj_informacje(czas,'wykonano #999','gray');
    sek = czas.getSeconds();sek += 0; czas.setSeconds(sek);
    dodaj_informacje(czas,'użycie przycisku "zamknięcie drzwi"','violet');
    sek = czas.getSeconds();sek += 1; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    
    sek = czas.getSeconds();sek += 15; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: 0','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: 3','orange');
    sek = czas.getSeconds();sek += 9; czas.setSeconds(sek);
    dodaj_informacje(czas,'wybrano PIĘTRO: 7','gray');
    sek = czas.getSeconds();sek += 3; czas.setSeconds(sek);
    dodaj_informacje(czas,'wybrano PIĘTRO: 6','gray');
    sek = czas.getSeconds();sek += 5; czas.setSeconds(sek);
    dodaj_informacje(czas,'użycie przycisku "otwarcie drzwi"','violet');
    sek = czas.getSeconds();sek += 0; czas.setSeconds(sek);
    dodaj_informacje(czas,'użycie przycisku "PT"','gray');
    dodaj_informacje(0,'podaj kod czynności','gray');
    sek = czas.getSeconds();sek += 1; czas.setSeconds(sek);
    dodaj_informacje(czas,'wykonano #013','gray');
    sek = czas.getSeconds();sek += 9; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    
    
    sek = czas.getSeconds();sek += 20; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: 3','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: 5','orange');
    sek = czas.getSeconds();sek += 9; czas.setSeconds(sek);
    dodaj_informacje(czas,'wybrano PIĘTRO: 25','gray');
    elem = document.getElementById("cyfra_" + 25); zaznaczpietro(elem);
    sek = czas.getSeconds();sek += 10; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    
    
    sek = czas.getSeconds();sek += 15; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: 5','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: 7','orange');
    sek = czas.getSeconds();sek += 0; czas.setSeconds(sek);
    dodaj_informacje(czas,'stop PIĘTRO: 6','orange');
    sek = czas.getSeconds();sek += 10; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    
    sek = czas.getSeconds();sek += 10; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: 6','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: 7','orange');
    sek = czas.getSeconds();sek += 3; czas.setSeconds(sek);
    dodaj_informacje(czas,'użycie przycisku "zamknięcie drzwi"','violet');
    sek = czas.getSeconds();sek += 1; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    
    sek = czas.getSeconds();sek += 10; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: 7','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: 9','orange');
    sek = czas.getSeconds();sek += 10; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    
    sek = czas.getSeconds();sek += 15; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: 9','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: 10','orange');
    sek = czas.getSeconds();sek += 3; czas.setSeconds(sek);
    dodaj_informacje(czas,'użycie przycisku "zamknięcie drzwi"','violet');
    sek = czas.getSeconds();sek += 1; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');

    sek = czas.getSeconds();sek += 10; czas.setSeconds(sek);
    dodaj_informacje(czas,'PIĘTRO: 10','green');
    dodaj_informacje(0,'otwarte drzwi','gray');
    dodaj_informacje(0,'kolejne PIĘTRO: 17','orange');
    sek = czas.getSeconds();sek += 10; czas.setSeconds(sek);
    dodaj_informacje(czas,'zamknięte drzwi','gray');
    
}

function dodaj_informacje(czas,wiadomosc,kolor)
{
var elmnt = document.getElementById("informacje");    
if (czas != 0)
    {
        var czas_diva = document.createElement("div")    
        czas_diva.innerHTML = '<div style="color:lightblue; padding-top:5px; text-align: right">' + czas.toLocaleString() + '</div>';   
        elmnt.appendChild(czas_diva);
        infowysokosc = elmnt.scrollHeight;    
        infowysokosc += 50
        elmnt.scrollTop = infowysokosc; 
    }
var tresc_diva = document.createElement("div")    
tresc_diva.innerHTML = '<div style="color:'+kolor+' ; padding-left:15px">' + wiadomosc + '</div>' ;
elmnt.appendChild(tresc_diva);
infowysokosc = elmnt.scrollHeight;    
infowysokosc += 50
elmnt.scrollTop = infowysokosc;   
}

function fn_dzialanie0(nr)
{
kod = 0;
var czas = pobierzTime(czasofset, czasofsetawaria); 
switch (nr)
    {
    case 1: dodaj_informacje(czas,'użycie przycisku "zamknięcie drzwi"','violet');
            dodaj_informacje(0,'niedozwolona operacja','red');    
            dodaj_informacje(0,'drzwi zamnięte','gray');
            break;
    case 2: dodaj_informacje(czas,'użycie przycisku "otwarcie drzwi"','violet');
            dodaj_informacje(0,'niedozwolona operacja','red');    
            dodaj_informacje(0,'kabina w ruchu','orange');
            break;
    case 3: dodaj_informacje(czas,'użycie przycisku "STOP"','red');
            dodaj_informacje(0,'kabina zatrzyma się na najbliższym piętrze','red');   
            dodaj_informacje(0,'jeżeli drzwi się nie otworzą proszę czekać <br>na zgłoszenie serwisu','orange');
            clearTimeout(pietro_13);
            pietro13();
            break;
    case 4: dodaj_informacje(czas,'użycie przycisku "Pomoc"','red');
            dodaj_informacje(0,'proszę czekać na zgłoszenie serwisu','orange');
            break;
    case 5: dodaj_informacje(czas,'użycie przycisku "Start"','red');
            dodaj_informacje(0,'niedostępna operacja','red');    
            dodaj_informacje(0,'aby odblokować użyj kodu','orange');
            break;
    case 6: dodaj_informacje(czas,'użycie przycisku kierunku "Góra"','red');
            dodaj_informacje(0,'niedostępna operacja','red');    
            dodaj_informacje(0,'aby odblokować użyj kodu','orange');
            break;
    case 7: dodaj_informacje(czas,'użycie przycisku "Kasuj"','red');
            dodaj_informacje(0,'niedostępna operacja','red');    
            dodaj_informacje(0,'aby odblokować użyj kodu','orange');
            break;
    case 8: dodaj_informacje(czas,'użycie przycisku kierunku "Dół"','red');
            dodaj_informacje(0,'niedostępna operacja','red');    
            dodaj_informacje(0,'aby odblokować użyj kodu','orange');
            break;
    }
}


function fn_dzialanie1(nr)
{
kod = 0;
var czas = pobierzTime(czasofset, czasofsetawaria); 
switch (nr)
    {
    case 1: dodaj_informacje(czas,'użycie przycisku "zamknięcie drzwi"','violet');
            dodaj_informacje(0,'niedozwolona operacja','red');    
            dodaj_informacje(0,'drzwi zamnięte','gray');
            break;
    case 2: if (obecnepietro != 13)
            {
                dodaj_informacje(czas,'użycie przycisku "otwarcie drzwi"','violet');
            }
            else
                {
                dodaj_informacje(czas,'użycie przycisku "otwarcie drzwi"','violet');
                dodaj_informacje(0,'niedozwolona operacja','red');    
                dodaj_informacje(0,'aby otworzyć drzwi użyj kodu','orange');
                }
                break;
    case 3: dodaj_informacje(czas,'użycie przycisku "STOP"','red');
            dodaj_informacje(0,'niedozwolona operacja','red');    
            dodaj_informacje(0,'kabina stoi na piętrze','orange');
            //dodaj_informacje(0,'proszę czekać na zgłoszenie serwisu','orange');
            break;
    case 4: dodaj_informacje(czas,'użycie przycisku "Pomoc"','red');
            dodaj_informacje(0,'proszę czekać na zgłoszenie serwisu','orange');
            break;
    case 5: dodaj_informacje(czas,'użycie przycisku "Start"','red');
            dodaj_informacje(0,'niedostępna operacja','red');    
            dodaj_informacje(0,'aby odblokować użyj kodu','orange');
            break;
    case 6: dodaj_informacje(czas,'użycie przycisku kierunku "Góra"','red');
            dodaj_informacje(0,'niedostępna operacja','red');    
            dodaj_informacje(0,'aby odblokować użyj kodu','orange');
            break;
    case 7: dodaj_informacje(czas,'użycie przycisku "Kasuj"','red');
            dodaj_informacje(0,'niedostępna operacja','red');    
            dodaj_informacje(0,'aby odblokować użyj kodu','orange');
            break;
    case 8: dodaj_informacje(czas,'użycie przycisku kierunku "Dół"','red');
            dodaj_informacje(0,'niedostępna operacja','red');    
            dodaj_informacje(0,'aby odblokować użyj kodu','orange');
            break;
    }
if ((komunikatnr > 0)&&(kod==0)) { dodaj_grozba(komunikatnr); }    
}


function fn_cyfra(element)
{
    var str = element.id;
    var numer = str.slice(6);
if (kod > 0)
    {
    kod--;
    if (kod == 0)
        {
        var czas = pobierzTime(czasofset, czasofsetawaria);
        dodaj_informacje(czas,'odmowa dostepu: nieprawidłowy kod','red');
        }
    }
    else
    {
    var czas = pobierzTime(czasofset, czasofsetawaria);
    switch (numer)
    {
    case '13':  
                dodaj_informacje(czas,'użycie przycisku "PT"','gray');        
                dodaj_informacje(0,'podaj kod czynności','gray');        
                kod = 4;
                break;
    default:    
        if (pietrazaznaczone[numer - startpietra ] != 1)
        {
        zaznaczpietro(element)
        dodaj_informacje(czas,'wybrano PIĘTRO: ' + numer,'gray');        
            if ((numer < nastepnepietro) && (numer > obecnepietro))             
                {
                nastepnepietro = numer;
                dodaj_informacje(0,'kolejne PIĘTRO: '+numer,'orange');
                }
            pietrazaznaczone[numer - startpietra ] = 1;
            if (numer < obecnepietro)
                {
                dodaj_informacje(0,'uwaga: obecny ruch w górę','red');
                }
            }
            break;
    }
    }
if ((komunikatnr > 0)&&(kod==0)) { dodaj_grozba(komunikatnr); }        
}

function zaznaczpietro(element)
{
    document.getElementById(element.id).classList.remove("cyfra_off");
    document.getElementById(element.id).classList.add("cyfra_on");
        
}

function pietra()
{ 
	var kolumna = 3;
    var odstep = new Array(3);
    odstep[0] = '';
    odstep[1] = '<a class="odstep" href="#"></a>';
    odstep[2] = odstep[1] + odstep[1];
    
    var nrpietra = iloscpieter + startpietra - 1 ;
    for (j=0; j <3; j++)
    {
    var tresc_diva = odstep[j];    
    for (i=0; i < iloscpieter / 3; i++)
	{	
        var element = "cyfra_" + nrpietra;
        if (nrpietra == 13)
            {
            tresc_diva = tresc_diva + '<a class="cyfra cyfra_dis" onclick="fn_cyfra(this)" id="'+element+'" href="#">PT</a>';	    
            }
        else
            {
            tresc_diva = tresc_diva + '<a class="cyfra'+(pietrazaznaczone[nrpietra - startpietra]==1?" cyfra_on":" cyfra_off") +'" onclick="fn_cyfra(this)" id="'+element+'" href="#">'+nrpietra+'</a>';	    
            }
    nrpietra--    
    }
    document.getElementById("wybranepietra" + kolumna--).innerHTML = tresc_diva;    
    }
	
}