<?php

// Create a form for uploading videos
echo '<form action="upload.php" method="post" enctype="multipart/form-data">';
echo '<input type="file" name="video">';
echo '<input type="submit" value="Upload">';
echo '</form>';

// If the form is submitted, upload the video
if (isset($_POST['submit'])) {

  // Get the video file
  $video = $_FILES['video'];

  // Check if the video is a valid video file
  if (!in_array($video['type'], ['video/mp4', 'video/avi', 'video/flv'])) {
    echo 'Invalid video file.';
    exit;
  }

  // Check if the video is too large
  if ($video['size'] > 100000000) {
    echo 'Video is too large.';
    exit;
  }

  // Move the video to the `/videos` directory
  move_uploaded_file($video['tmp_name'], 'uploads/' . $video['name']);

  // Display a success message
  echo 'Video uploaded successfully.';

}

?>
