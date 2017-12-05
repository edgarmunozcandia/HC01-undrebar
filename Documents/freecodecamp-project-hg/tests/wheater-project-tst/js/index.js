  $(document).ready(function() {
     var lat;
        var long;
    
          $.getJSON("http://ip-api.com/json", function(data2){
            lat=data2.lat;
            long=data2.lon;

	var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=ece76f235407c9b938d8b7ad99f93be0';

        $.getJSON(api, function(data) {
          var fTemp;
          var cTemp;
          var kTemp;
            var tempSwap=true;


          // JSON call for Open Weather API
          var weatherType = data.weather[0].description;
          kTemp = data.main.temp;
          var windSpeed = data.wind.speed;
          var city = data.name;

          //Temperature in Kelvin
          fTemp = ((kTemp) * (9 / 5) - 459.67).toFixed(1);
          //Tem in F
          //City Name

          cTemp = (kTemp - 273).toFixed(1);


          console.log(city);
          $("#city").html(city);
          $("#wheatherType").html(weatherType);
          $("#fTemp").html(fTemp);
          $("#fTemp").click(function(){
                            
            if(tempSwap===false){
               $("#fTemp").html(fTemp + " &#8457;");
                tempSwap=true;
              }
             else{
              
               $("#fTemp").html(cTemp + "&#8451;");
               tempSwap=false;
             }
          
          });
          windSpeed = (2.237*(windSpeed)).toFixed(1);
          $("#windSpeed").html(windSpeed + " mph");

     
          
        if(fTemp <=20){
          $('body').css('background-image','url(https://www.highreshdwallpapers.com/wp-content/uploads/2013/12/Ice-Cold-Lake.jpg)');
        }
          
        else if(fTemp <=40){
             $('body').css('background-image','url(http://c1.peakpx.com/wallpaper/186/1024/948/early-snow-dream-winter-cold-wallpaper.jpg)');
        }
          
        else if(fTemp <=62){
             $('body').css('background-image','url(http://thewallpaper.co/wp-content/uploads/2016/01/hd-nature-images-organic-plants-fresh-air-widescreen-wallpapers-smart-phone-wallpapers-desktop-images-plant-background-images-1920x1026-768x410.jpg)');
        }
          
        else if(fTemp <=70){
             $('body').css('background-image','url(http://wallpaperstock.net/warm-autumn_wallpapers_24732_1920x1080.jpg)');
        }
          
         else if(fTemp >70){
             $('body').css('background-image','url(http://jllsly.com/wallpapers/tropical-beaches-with-palm-trees-s-wallpapers-mobile-Is-Cool-Wallpapers.jpg)'); 
                    
      }

       });
            
   });
         
});
