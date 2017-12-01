function getPage(page){
var pageId = page+".php";
var urls = "http://localhost/mwatch/"+pageId;
return urls;
}
function getPriceList(){
    var urlx = getPage('pricelist');
    $.get(urlx,
	function(datax){ 
	var tbl ="<table class='w3-table w3-bordered w3-striped w3-border w3-hoverable'>";
		tbl+="<thead>";
        tbl+="<tr><th colspan='9'>PRICELIST FOR SHARES TRADED ON"+datax.Pricelist[0].QDate+" ON THE FLOOR OF THE NSE</th></tr>";
		tbl+="<tr>";
		tbl+="<th align='center'>STOCK CODE</th>";
		tbl+="<th align='center'>PRICE OPEN</th>";
		tbl+="<th align='center'>PRICE CLOSE</th>";
		tbl+="<th align='center'>PRICE LOW</th>";
		tbl+="<th align='center'>PRICE HIGH</th>";
        tbl+="<th align='center'>PRICE CHANGE</th>";
		tbl+="<th align='center'>TRADES /DEALS</th>";
		tbl+="<th align='center'>VOLUME TRADED</th>";
		tbl+="<th align='center'>VALUE</th>";
		tbl+="</tr>";
		tbl+="</thead>";
	tbl += "<tbody>";

	datax.Pricelist.forEach(function(obj) { 
	tbl+="<tr>";
	tbl+="<td>"+obj.StockCode+"</td>";
	tbl+="<td align='right'>"+obj.POpen+"</td>";
	tbl+="<td align='right'>"+obj.PClose+"</td>";
	tbl+="<td align='right'>"+obj.PLow+"</td>";
	tbl+="<td align='right'>"+obj.PHigh+"</td>";
    tbl+="<td align='right'>"+obj.PChange+"</td>";
	tbl+="<td align='right'>"+obj.PTrades+"</td>";
	tbl+="<td align='right'>"+obj.PVolume+"</td>";
	tbl+="<td align='right'>"+obj.PValue+"</td>";
	tbl+="</tr>";
});
	tbl+="</tbody></table>";
	$("#pricelistc").html(tbl); });
}
function getTopGainers(){
    var urlz = getPage('topgainers');
     $.get(urlz,
	function(datax){
        //alert(datax);return 0;
        var tbl = "<table class='w3-table w3-bordered w3-striped w3-border w3-hoverable'>";
		tbl+="<thead>";
        tbl+="<tr><th colspan='5'>TOP GAINERS "+datax.Gainers[0].QDate+"</th></tr>";
		tbl+="<tr>";
		tbl+="<th align='center'>STOCK CODE</th>";
		tbl+="<th align='center'>PRICE OPEN</th>";
		tbl+="<th align='center'>PRICE CLOSE</th>";
		tbl+="<th align='center'>PRICE CHANGE</th>";
		tbl+="<th align='center'>% CHANGE</th>";
		tbl+="</tr>";
		tbl+="</thead>";
	tbl += "<tbody>";
    datax.Gainers.forEach(function(obj) { 
	tbl+="<tr>";
	tbl+="<td>"+obj.StockCode+"</td>";
	tbl+="<td align='right'>"+obj.POpen+"</td>";
	tbl+="<td align='right'>"+obj.PClose+"</td>";
	tbl+="<td align='right'>"+obj.PChange+"</td>";
	var perc = parseFloat((obj.PChange/obj.POpen)*100).toFixed(2);
	tbl+="<td align='right'>"+perc+"</td>";
	tbl+="</tr>";
    });
    tbl+="</tbody></table>";
	$("#Top5").html(tbl); });
}
function getTopLosers(){
    var urlo = getPage('toplosers');
     $.get(urlo,
	function(datax){
        var tbl = "<table class='w3-table w3-bordered w3-striped w3-border w3-hoverable'>";
		tbl+="<thead>";
        tbl+="<tr><th colspan='5'>TOP LOSERS "+datax.Losers[0].QDate+"</th></tr>";
		tbl+="<tr>";
		tbl+="<th align='center'>STOCK CODE</th>";
		tbl+="<th align='center'>PRICE OPEN</th>";
		tbl+="<th align='center'>PRICE CLOSE</th>";
		tbl+="<th align='center'>PRICE CHANGE</th>";
		tbl+="<th align='center'>% CHANGE</th>";
		tbl+="</tr>";
		tbl+="</thead>";
	tbl += "<tbody>";
    datax.Losers.forEach(function(obj) { 
	tbl+="<tr>";
	tbl+="<td>"+obj.StockCode+"</td>";
	tbl+="<td align='right'>"+obj.POpen+"</td>";
	tbl+="<td align='right'>"+obj.PClose+"</td>";
	tbl+="<td align='right'>"+obj.PChange+"</td>";
	var perc = parseFloat((obj.PChange/obj.POpen)*100).toFixed(2);
	tbl+="<td align='right'>"+perc+"</td>";
	tbl+="</tr>";
    });
    tbl+="</tbody></table>";
	$("#Low5").html(tbl); });
}
function getMarketIndex(){
    var urlb = getPage('marketindices');
    $.get(
        urlb,
        function(datax){
            var tbl = "<table class='w3-table w3-bordered w3-striped w3-border w3-hoverable'>";
		tbl+="<thead>";
        tbl+="<tr><th colspan='2'>NSE INDEX FOR "+datax.MarketIndex.QDate+"</th></tr>";
		tbl+="<tr>";
		tbl+="<th align='center'>INDICES</th>";
		tbl+="<th align='center'>VALUE</th>";
		tbl+="</tr>";
		tbl+="</thead>";
	tbl += "<tbody>";
    
	tbl+="<tr>";
	tbl+="<td>All Share Index</td>";
	tbl+="<td align='right'>???</td>";
	tbl+="</tr>";
   
    tbl+="<tr>";
	tbl+="<td>Capitalization</td>";
	tbl+="<td align='right'>"+datax.MarketIndex.capitalization+"</td>";
	tbl+="</tr>";
   
    tbl+="<tr>";
	tbl+="<td>Volume Traded</td>";
	tbl+="<td align='right'>"+datax.MarketIndex.volumetraded+"</td>";
	tbl+="</tr>";
   
    tbl+="<tr>";
	tbl+="<td>Trades</td>";
	tbl+="<td align='right'>"+datax.MarketIndex.deals+"</td>";
	tbl+="</tr>";
   
    tbl+="</tbody></table>";
	$("#MIndex").html(tbl);
        });
}
function getTopTradedValue(){
    var turl = getPage("topvalue");
    $.get(turl,
          function(datax){
                var tbl = "<table class='w3-table w3-bordered w3-striped w3-border w3-hoverable'>";
		tbl+="<thead>";
        tbl+="<tr><th colspan='5'>TOP TRADED SHARES BY VALUE "+datax.TOPVALUE[0].QDate+"</th></tr>";
		tbl+="<tr>";
		tbl+="<th align='center'>STOCK CODE</th>";
		tbl+="<th align='center'>PRICE</th>";
		tbl+="<th align='center'>VOLUME</th>";
		tbl+="<th align='center'>VALUE</th>";
		tbl+="</tr>";
		tbl+="</thead>";
	tbl += "<tbody>";
    datax.TOPVALUE.forEach(function(obj) { 
	tbl+="<tr>";
	tbl+="<td>"+obj.StockCode+"</td>";
	tbl+="<td align='right'>"+obj.RPrice+"</td>";
	tbl+="<td align='right'>"+obj.PVolume+"</td>";
	tbl+="<td align='right'>"+obj.PValue+"</td>";
	tbl+="</tr>";
    });
    tbl+="</tbody></table>";
	$("#topvalue").html(tbl); 
          });
}
function getTopTradedVolume(){
    var vurl = getPage("topvolume");
    $.get(vurl,
          function(datax){
                var tbl = "<table class='w3-table w3-bordered w3-striped w3-border w3-hoverable'>";
		tbl+="<thead>";
        tbl+="<tr><th colspan='5'>TOP TRADED SHARES BY VOLUME "+datax.TOPVOLUME[0].QDate+"</th></tr>";
		tbl+="<tr>";
		tbl+="<th align='center'>STOCK CODE</th>";
		tbl+="<th align='center'>TRADES</th>";
		tbl+="<th align='center'>VOLUME</th>";
		tbl+="</thead>";
	tbl += "<tbody>";
    datax.TOPVOLUME.forEach(function(obj) { 
	tbl+="<tr>";
	tbl+="<td>"+obj.StockCode+"</td>";
	tbl+="<td align='right'>"+obj.PTrades+"</td>";
	tbl+="<td align='right'>"+obj.PVolume+"</td>";
	tbl+="</tr>";
    });
    tbl+="</tbody></table>";
	$("#topvolume").html(tbl); 
          });
}
function getStocks(){
    var surl = getPage("getstocks");
    $.get(surl,
          function(datax){
            datax.SYMBOL.forEach(function(obj){
                $("#stockselect").append($('<option/>',{
                    value:obj.StockCode,
                    text:obj.StockCode
                    }));
          });
            });
}
function getStat(){
    var symbol = $("#stockselect").val();
    var tdate = $("#tradedate").val().split("/")[2]+"-"+$("#tradedate").val().split("/")[0]+"-"+$("#tradedate").val().split("/")[1];
    var gurl = getPage("getstockdatapoints")+"?symbol="+symbol+"&tdate="+tdate;
    var idate = tdate.split("-");
    var edate = parseInt(idate[0])-1+"-"+idate[1]+"-"+idate[2];
    $.get(gurl,
          function(datac){
            if (Object.keys(datac).length!=0){
            var ttle = datac.SERIES[0].StockCode+" Prices Movement BETWEEN "+tdate+" AND "+edate;
            doGraph(datac,ttle,datac.SERIES[0].StockCode,tdate,edate);
            }else{
                alert("Data not found for the combination of Date and Symbol Selected!");
            }
            });
}
function doGraph(dpoints,Gtitle,Symbol,SDate,EDate){
 var tabData = JSON.parse(JSON.stringify(dpoints.SERIES));
        var finals = [];
        for(var i = 0; i < tabData.length; i++)
        {
            var firstdate = tabData[i].QDate;
            var res = firstdate.replace(/[-]/g,','); 
            finals.push({ x: new Date(res), y:[parseFloat(tabData[i].POpen),parseFloat(tabData[i].PHigh),parseFloat(tabData[i].PLow),parseFloat(tabData[i].PClose)] });
        }
var chart = new CanvasJS.Chart("stockgraph",
{
	title:{
		text: Gtitle,
        color:"#fff"
	},
	exportEnabled: true,
	axisY: {
		includeZero:false,
		prefix: "N",
        color:"#fff",
		title: "Prices"
	},     
	axisX: {
		interval:1,
		valueFormatString: "DD-MMM",
        color:"#fff",
        title:"Transaction Date (DAYS)"
	},
	toolTip: {
		content: "Date:{x}</br><strong>Prices:</strong></br>Open:{y[0]}, Close:{y[3]}</br>High:{y[1]},Low:{y[2]}",
	},
	data: [
	{
		type: "candlestick",
        color:"red",
        dataPoints:finals
    }
    ]
});
chart.render();
//showDataPoints();
}
function showDataPoints(data){
    var str = "<table class='w3-table'>";
    str+="<thead><tr><th>DESCRIPTION</th><th>HIGH</th><th>LOW</th><th>AVG</th></tr></thead>";
    str+="<tbody>";
    data.forEach(function(obj){
        str+="<tr>";
        str+= "<td>"+obj.x+"</td>";
        str+= "<td>"+obj.y+"</td>";
        str+="</tr>";
        });
    str+="</tbody></table>";
    $("#stockshot").html(str);
}
function signUp(user){
    var urlu = getPage('register');
    var urlc = urlu+"?user="+user;
    $.get(
        urlc,
        onsuccess(function(datau){
            return datau;
            }),
        onerror(function(err,stat,msg){
            return stat+" : "+err+" - "+msg;
            })
    );
}
function readCookies(){
    return token;
}
function setCookies(){
    
}
function authuser(){
    var tk = readCookies();
    var urlo = getPage('authuser')+"?token="+tk;
    $.get(
        urlo,
        onsuccess(function(datao){
            return datao;
            }),
        onerror(function(err,stat,msg){
            return stat+" : "+err+" - "+msg;
            })
    );
}
