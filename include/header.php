<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Moments - By MQLUS</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css?family=DM%20Sans:700,600,500,400&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="stylesheet" href="assest/moments.css?v=<?php echo time(); ?>">
</head>

<body>
    <!-- ============================================================
    SITE HEADER
    ============================================================ -->
    <header class="site-header" id="siteHeader" role="banner">
        <div class="header-inner">
            <div class="header-logo">
                <a href="moments">
                    <img src="images/image.png" alt="Moments" width="auto" height="auto">
                </a>
            </div>

            <nav class="header-nav" aria-label="Primary navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#pricing">Services <span class="plus">+</span></a></li>
                    <li style="position:relative;">
                        <a href="#contact">Work</a>
                        <span class="work-badge">7</span>
                    </li>
                    <li><a href="#contact">Pages <span class="plus">+</span></a></li>
                    <li><a href="#contact">Blog <span class="plus">+</span></a></li>
                    <li><a href="#contact">Shop <span class="plus">+</span></a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div class="header-cta">
                <a href="#contact">
                    <span>Book Now</span>
                    <span class="arrow">↗</span>
                </a>
            </div>

            <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        <div class="mobile-menu" id="mobileMenu">
            <a href="/">Home</a>
            <a href="#pricing">Services +</a>
            <a href="#contact">Work</a>
            <a href="#contact">Pages +</a>
            <a href="#contact">Blog +</a>
            <a href="#contact">Shop +</a>
            <a href="#contact">Contact</a>
            <a class="mobile-cta" href="#contact">GET IN TOUCH ↗</a>
        </div>
    </header>