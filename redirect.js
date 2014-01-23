<script LANGUAGE="JavaScript">
var start=new Date();
  start=Date.parse(start)/1000;
  var counts=7;   <!--/ Время ожидания /-->
  function CountDown(){
    var now=new Date();
    now=Date.parse(now)/1000;
    var x=parseInt(counts-(now-start),10);
    if(document.form1){document.form1.clock.value = x;}
    if(x>0){
      timerID=setTimeout("CountDown()", 100)
    }else{
      location.href="http://my.deee.su//"  <!--/ Ссылка /-->
    }
  }
window.setTimeout('CountDown()',100);
</script>
<------------------------------------------------------------->
<--    Скрипт был разработан при участии @Deee  @P2n33D     -->
<--Написание скриптов любой сложности на заказ : buy@deee.su-->
<------------------------------------------------------------->
