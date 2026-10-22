<div id="footer">
    <div id="footer-gifs">
        <?php
            $jsonPath = "./assets/footer_gifs/footer_gifs.json";
            $jsonString = file_get_contents($jsonPath);
            $gifs = json_decode($jsonString, true);
            foreach ($gifs as $gif) {
                if (array_key_exists("link", $gif)) {
                    echo "<a href='".$gif["link"]."'>
                        <img src='./assets/footer_gifs/".$gif["name"]."' alt='".$gif["alt"]."'>
                    </a>";
                } else {
                    echo "<img src='./assets/footer_gifs/".$gif["name"]."' alt='".$gif["alt"]."'>";
                }

            }
        ?>
    </div>
</div>