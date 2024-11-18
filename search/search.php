<?php
// Check if a query is provided
if (!isset($_GET['q']) || empty(trim($_GET['q']))) {
    echo "Please provide a search query.";
    exit;
}

$query = trim($_GET['q']);
$resultsFile = "results.txt";

// Check if the results file exists
if (!file_exists($resultsFile)) {
    echo "Results file not found.";
    exit;
}

$results = file($resultsFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$matches = [];

// Search for matches
foreach ($results as $line) {
    preg_match('/\{s=(.+?) d="(.+?)"\}/', $line, $match);
    if ($match) {
        $url = $match[1];
        $description = $match[2];
        if (stripos($description, $query) !== false) {
            $matches[] = ['url' => $url, 'description' => $description];
        }
    }
}

// Output results
if (empty($matches)) {
    echo "No results found for '$query'.";
} else {
    foreach ($matches as $match) {
        echo "<div class='result'>";
        echo "<a href='" . htmlspecialchars($match['url']) . "' target='_blank'>" . htmlspecialchars($match['url']) . "</a>";
        echo "<p>" . htmlspecialchars($match['description']) . "</p>";
        echo "</div>";
    }
}
?>
