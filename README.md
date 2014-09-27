VideoUrlParser
==============

VideoUrlParser是一款基于PHP根据视频URL抓取视频信息的工具，支持优酷、土豆、酷六、56、乐视、搜狐、腾讯、新浪

##版本
v1.2

##更新
[2012-02-25]
[修正]ku6部分网址不能解析bug
[2012-02-24]
[修正]tudou网因gzip导致的解析失败
[增强]支持sohuTV、新浪视频、腾讯视频

##用法
require_once "VideoUrlParser.class.php";
$url = "http://v.youku.com/v_show/id_XMjkwMzc0Njg4.html";
$info = VedioUrlParser::parse($url);

##作者
http://www.hdj.me/videourlparser
