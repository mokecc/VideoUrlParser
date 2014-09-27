<?php
require_once "VideoUrlParser.class.php";
$result['data'] = VideoUrlParser::parse($_POST['url']);
if(!$result['data'])
	$result['status'] = 0;
else
	$result['status'] = 1;

echo json_encode($result);
exit;
?>
