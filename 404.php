<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404</title>
</head>

<body>

    <style>
        /* ============================================================
    404 ERROR PAGE - FULL STYLES
    ============================================================ */

        .error-404 {
            background: #ffffff;
            padding: 120px 0 160px;
            min-height: calc(100vh - 200px);
            display: flex;
            align-items: center;
        }

        .error-404-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 40px;
            width: 100%;
        }

        .error-404-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        /* --- 404 Number --- */
        .error-404-number {
            font-size: clamp(120px, 20vw, 220px);
            font-weight: 900;
            line-height: 1;
            color: #1a1a1a;
            margin: 0 0 10px;
            letter-spacing: -8px;
            background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* --- Heading --- */
        .error-404-heading {
            font-size: clamp(28px, 4vw, 42px);
            font-weight: 700;
            color:  #00d8e4;
            margin: 0 0 16px;
            letter-spacing: -1px;
        }

        /* --- Text --- */
        .error-404-text {
            font-size: 18px;
            line-height: 1.7;
            color: #4a4a4a;
            margin: 0 0 40px;
            max-width: 500px;
        }

        /* --- Button --- */
        .error-404-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 14px 36px;
            background: #1a1a1a;
            color: #ffffff;
            text-decoration: none;
            border-radius: 50px;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid #1a1a1a;
        }

        .error-404-btn:hover {
            background: transparent;
            color: #1a1a1a;
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .error-404-btn .btn-arrow {
            display: inline-block;
            transition: transform 0.3s ease;
        }

        .error-404-btn:hover .btn-arrow {
            transform: translateX(6px);
        }

        /* --- Responsive --- */
        @media (max-width: 600px) {
            .error-404 {
                padding: 80px 0 120px;
                min-height: calc(100vh - 160px);
            }

            .error-404-container {
                padding: 0 20px;
            }

            .error-404-number {
                font-size: clamp(80px, 15vw, 140px);
                letter-spacing: -4px;
            }

            .error-404-heading {
                font-size: 24px;
            }

            .error-404-text {
                font-size: 16px;
                padding: 0 10px;
            }

            .error-404-btn {
                padding: 12px 28px;
                font-size: 15px;
            }
        }

        @media (max-width: 480px) {
            .error-404 {
                padding: 60px 0 80px;
                min-height: calc(100vh - 140px);
            }

            .error-404-number {
                font-size: 80px;
                letter-spacing: -2px;
            }

            .error-404-heading {
                font-size: 20px;
            }

            .error-404-text {
                font-size: 14px;
            }

            .error-404-btn {
                padding: 10px 22px;
                font-size: 14px;
                gap: 8px;
            }
        }
    </style>

    <main id="main" class="site-main">
        <!-- ============================================================
    404 ERROR PAGE
    ============================================================ -->
        <section class="error-404 section-pad" aria-labelledby="error-title">
            <div class="container error-404-container">
                <div class="error-404-content">
                    <h1 class="error-404-number" id="error-title">404</h1>
                    <h2 class="error-404-heading">Page Not Found</h2>
                    <p class="error-404-text">Oops! The page you are looking for does not exist or has been moved.</p>
                    <a href="/" class="error-404-btn">Go Back Home <span class="btn-arrow" aria-hidden="true">→</span></a>
                </div>
            </div>
        </section>
    </main>



</body>

</html>