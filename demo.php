<?php
require_once "VideoUrlParser.class.php";
$urls[] = "http://v.youku.com/v_playlist/f12280371o1p0.html";
//$urls[] = "http://v.youku.com/v_show/id_XMjI4MDM4NDc2.html";
//$urls[] = "http://www.tudou.com/playlist/p/l13087099.html";
//$urls[] = "http://www.tudou.com/programs/view/ufg-A3tlcxk/";
//$urls[] = "http://v.ku6.com/special/show_4926690/Klze2mhMeSK6g05X.html";
//$urls[] = "http://www.56.com/u68/v_NjI2NTkxMzc.html";
//$urls[] = "http://www.letv.com/ptv/vplay/1168109.html";
//$urls[] = "http://video.sina.com.cn/v/b/46909166-1290055681.html";

foreach($urls as $url){
    $info = VideoUrlParser::parse($url);
    //var_dump($info);
    echo "<a href='{$info['url']}' target='_new'>{$info['title']}</a>";
    echo "<br />";
    echo $info['object'];
    echo "<br />";
}
?>
