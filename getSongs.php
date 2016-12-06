<?php

$params = json_decode(trim(file_get_contents('php://input')), true);

$id = $params['id'];

if ($id == 1) {

    $songs = array(

        ['title' => 'first', 'file' => '1.mp3'],
        ['title' => 'second', 'file' => '2.mp3'],
        ['title' => 'third', 'file' => '3.mp3']

    );

    echo json_encode($songs);

} elseif ($id == 2) {

    $songs = array(

        ['title' => 'third', 'file' => '3.mp3'],
        ['title' => 'second', 'file' => '2.mp3'],
        ['title' => 'first', 'file' => '1.mp3']

    );

    echo json_encode($songs);

}
