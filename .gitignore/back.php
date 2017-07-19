<?php
$urles = $_POST['urles'];
$id = $_POST['id'];
$title = getTitle($urles);
echo json_encode(['title' => $title, 'id' => $id]);
function getTitle($urles) {
    $page_content = file_get_contents ($urles);
    preg_match_all("|<title>(.*)</title>|sUSi", $page_content, $titles);
    return $titles[1];

    //return mt_rand(0,100);
}