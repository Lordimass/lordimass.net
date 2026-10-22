<!DOCTYPE html>
<html data-bs-theme="light">

<head>
    <title>Lordimass.net</title>
    <link rel="icon" type="image/x-icon" href="images/Pfp Mark 2.ico">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" type="text/css" href="css/common.css">
    <link rel="stylesheet" type="text/css" href="css/home.css">
    <link rel="stylesheet" type="text/css" href="./components/ProjectCard/ProjectCard.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous">
    <script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-1a/pXj49ZQ1aHEmrJ+gMw1otqoVsYwlEnlD8mIfY2TV03r20Y0CN7uqx1tQogjPL" crossorigin="anonymous"></script>

    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
</head>

<body>
<script src="scripts/oneko/oneko.js" data-cat="scripts/oneko/oneko.gif"></script>

<div class="half-split content-box">

    <div id="sticker">
        <img src="images/Lordi Sticker.png" alt="A sticker of my imp character playing on a handheld computer" style="width:75%;height:75%;margin:0 auto">
    </div>

    <div id="main-info">
        <h1> Welcome to Lordimass.net :D </h1>
        <p> Hi! I'm Lordi and I do stuff. I like to code, draw, and play games with friends.</p>
        <p>
            Currently, I'm very focused on Hytale! I've been spending a lot of my time modding it and generally being
            part of the amazing community that's forming around it.
        </p>
        <p>
            Previously, I was part of a community called Havoc. We did lots of different projects, but the most notable
            was our award-winning annual 24hr charity streams which I am very proud to have been the lead organiser of.
            Check out our website for that at <a href="https://havoc-hub.com" target="_blank">havoc-hub.com</a>.
        </p>
        <p>
            Anyway, the point of this website is to be a little hub for myself and everything I do, rather than
            focusing on just one community or project, it's basically just another portfolio site from a random
            programmer on the internet, we've all seen them before :P.
        </p>
    </div>
</div>


<div class="socials">
    <a href="https://twitter.com/lordimass" target="_blank" class="soc"
       style="background-color: #249ef0;">
        <img src="images/twitter.svg" alt="twitter logo"></a>
    <a href="https://discord.com/users/969949353605230604" target="_blank" class="soc"
       style="background-color: #5462e5;">
        <img src="images/discord.svg" alt="discord logo"></a>
    <a href="https://youtube.com/@lordimass" target="_blank" class="soc"
       style="background-color: #ff0808;">
        <img src="images/youtube.svg" alt="youtube logo"></a>
    <a href="https://twitch.tv/lordimass" target="_blank" class="soc"
       style="background-color: #8b44f7;">
            <img src="images/twitch.svg" alt="twitch logo"></a>
    <a href="https://steamcommunity.com/id/Lordimass/" target="_blank" class="soc"
       style="background-image: linear-gradient(#121d39, #1a6893)">
            <img src="images/steam.svg" alt="steam logo"></a>
</div>

<div id="hytale-mods-container">
    <h1>Hytale Mods</h1>
    <div id="hytale-mods">
        <script src="components/ProjectCard/HytaleMods.js" type="module"></script>
    </div>
</div>

<!-- Adding the footer to the end of the page -->
<?php include "components/footer.php" ?>

<!--<div id="footer"></div>-->
<!--<script src="footer/loadfooter.js"></script>-->

<script src="js/index.js"></script>
</body>
</html>