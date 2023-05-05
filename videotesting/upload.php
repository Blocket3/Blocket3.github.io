<?php

// Get the video file from the POST request
$video = $_FILES['video'];

// Check if the video file is valid
if ($video['error'] !== UPLOAD_ERR_OK) {
  die('Error uploading video: ' . $video['error']);
}

// Move the video file to the uploads directory
move_uploaded_file($video['tmp_name'], 'uploads/' . $video['name']);

// Redirect the user back to the index page
header('Location: /');

?>
