
<?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $term = $_POST["term"];
                $definition = $_POST["definition"];
                $html = 
                '<div id="' . uniqid() . '" class="termbox"><div class="term"><p>' 
                . htmlspecialchars($term) 
                . '</p></div><div class="definition"><p>' 
                . htmlspecialchars($definition) 
                . '</p></div>'
                . '<button onclick="removeTerm(this.parentNode.id)" class="remove-card"></button></div>';

                echo $html;
                exit;
            }
?>