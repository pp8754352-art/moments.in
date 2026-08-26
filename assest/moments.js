(function () {
    'use strict';

    /* -----------------------------------------------------
       MOBILE MENU
    ----------------------------------------------------- */
    var toggle = document.getElementById('mobileToggle');
    var menu = document.getElementById('mobileMenu');

    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            var isOpen = menu.classList.toggle('active');
            toggle.classList.toggle('active', isOpen);
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.remove('active');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* -----------------------------------------------------
       STICKY HEADER
    ----------------------------------------------------- */
    var header = document.getElementById('siteHeader');
    if (header) {
        var lastState = false;
        window.addEventListener('scroll', function () {
            var shouldStick = window.scrollY > 120;
            if (shouldStick !== lastState) {
                header.classList.toggle('is-sticky', shouldStick);
                lastState = shouldStick;
            }
        }, { passive: true });
    }

    /* -----------------------------------------------------
       FAQ ACCORDION
    ----------------------------------------------------- */
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = this.closest('.faq-item');
            var wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(function (el) {
                el.classList.remove('active');
            });
            if (!wasActive) item.classList.add('active');
        });
    });

    /* -----------------------------------------------------
       STAT COUNTERS
    ----------------------------------------------------- */
    var counters = document.querySelectorAll('.stat-number');
    if (counters.length && 'IntersectionObserver' in window) {
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                counterObserver.unobserve(el);

                var to = parseFloat(el.getAttribute('data-to')) || 0;
                var suffix = el.getAttribute('data-suffix') || '';
                var isDecimal = to % 1 !== 0;
                var duration = 1400;
                var start = null;

                function step(timestamp) {
                    if (!start) start = timestamp;
                    var progress = Math.min((timestamp - start) / duration, 1);
                    var current = to * progress;
                    el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        el.textContent = (isDecimal ? to.toFixed(1) : to) + suffix;
                    }
                }
                requestAnimationFrame(step);
            });
        }, { threshold: 0.4 });

        counters.forEach(function (el) { counterObserver.observe(el); });
    }

    /* -----------------------------------------------------
       CURVED SLIDER (3D drag carousel)
    ----------------------------------------------------- */
    (function () {
        var track = document.getElementById('sliderTrack');
        if (!track) return;

        var NUM = 25;
        var RADIUS = 2000;
        var SPEED = 0.12;
        var THRESHOLD = 50;

        var imgs = [
            'https://picsum.photos/seed/a1/600/800',
            'https://picsum.photos/seed/b2/600/800',
            'https://picsum.photos/seed/c3/600/800',
            'https://picsum.photos/seed/d4/600/800',
            'https://picsum.photos/seed/e5/600/800',
            'https://picsum.photos/seed/f6/600/800',
            'https://picsum.photos/seed/g7/600/800',
            'https://picsum.photos/seed/h8/600/800',
            'https://picsum.photos/seed/i9/600/800',
            'https://picsum.photos/seed/j10/600/800',
            'https://picsum.photos/seed/k11/600/800',
            'https://picsum.photos/seed/l12/600/800'
        ];

        var cards = [];
        var rotation = 0;
        var isDragging = false;
        var dragStartX = 0;
        var dragStartRot = 0;

        for (var i = 0; i < NUM; i++) {
            var card = document.createElement('div');
            card.className = 'curved-slide';
            var angle = (i / NUM) * 360;
            card.style.transform = 'rotateY(' + angle + 'deg) translateZ(' + RADIUS + 'px)';
            card._baseAngle = angle;

            var img = document.createElement('img');
            img.src = imgs[i % imgs.length];
            img.alt = 'slide';
            img.loading = 'lazy';
            card.appendChild(img);
            track.appendChild(card);
            cards.push(card);
        }

        function update() {
            if (!isDragging) {
                rotation += SPEED;
                if (rotation > 360) rotation -= 360;
            }
            track.style.transform = 'rotateY(' + rotation + 'deg)';

            cards.forEach(function (c) {
                var eff = (c._baseAngle - rotation) % 360;
                if (eff > 180) eff -= 360;
                if (eff < -180) eff += 360;
                c.classList.toggle('is-active', Math.abs(eff) < THRESHOLD);
            });

            requestAnimationFrame(update);
        }
        update();

        function onStart(clientX) {
            isDragging = true;
            dragStartX = clientX;
            dragStartRot = rotation;
            track.style.cursor = 'grabbing';
        }

        function onMove(clientX) {
            if (!isDragging) return;
            var delta = (clientX - dragStartX) * 0.35;
            rotation = dragStartRot + delta;
            if (rotation > 360) rotation -= 360;
            if (rotation < 0) rotation += 360;
        }

        function onEnd() {
            isDragging = false;
            track.style.cursor = 'grab';
        }

        track.addEventListener('mousedown', function (e) { onStart(e.clientX); });
        window.addEventListener('mousemove', function (e) { onMove(e.clientX); });
        window.addEventListener('mouseup', onEnd);

        track.addEventListener('touchstart', function (e) {
            var t = e.touches[0];
            if (t) onStart(t.clientX);
        }, { passive: true });

        track.addEventListener('touchmove', function (e) {
            var t = e.touches[0];
            if (t) onMove(t.clientX);
        }, { passive: true });

        track.addEventListener('touchend', onEnd, { passive: true });

        window.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') {
                rotation -= 6;
                if (rotation < 0) rotation += 360;
                e.preventDefault();
            }
            if (e.key === 'ArrowRight') {
                rotation += 6;
                if (rotation > 360) rotation -= 360;
                e.preventDefault();
            }
        });
    })();

var contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }
        // TODO: replace with a real fetch() call to your backend
        alert('Thanks! Your message has been received.');
        contactForm.reset();
    });
}

    /* -----------------------------------------------------
       NEWSLETTER FORM
    ----------------------------------------------------- */
    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var email = newsletterForm.querySelector('input[name="email"]');
            if (!email || !email.checkValidity()) {
                if (email) email.reportValidity();
                return;
            }
            // TODO: replace with a real fetch() call to your backend
            alert('Thanks for subscribing!');
            newsletterForm.reset();
        });
    }

})();