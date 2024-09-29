<?php
// Define the path to your actual file on the server
$file = '/assets/files/MichelleHuResume.pdf';  // The real path to the PDF

if (file_exists($file)) {
    // Set headers to serve the PDF
    header('Content-Type: application/pdf');
    header('Content-Disposition: inline; filename="MichelleHuResume.pdf"');
    header('Content-Length: ' . filesize($file));

    // Serve the file
    readfile($file);
    exit;
} else {s
    echo "File not found.";
}
?>
