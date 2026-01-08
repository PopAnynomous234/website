document.addEventListener('DOMContentLoaded', function() {
    // 1. DYNAMICALLY CREATE PARTICLE DIV (Runs on all pages)
    if (!document.getElementById('particles-js')) {
        var div = document.createElement('div');
        div.id = 'particles-js';
        
        // --- CRITICAL CSS FOR FULLSCREEN BACKGROUND ---
        div.style.position = 'fixed'; 
        div.style.top = '0';
        div.style.left = '0';
        
        // Use Viewport Units (vw/vh) for reliable fullscreen coverage
        div.style.width = '100vw'; 
        div.style.height = '100vh'; 
        
        // Ensure it sits behind all content
        div.style.zIndex = '-1'; 
        
        document.body.appendChild(div);
    }

    // 2. Load particles.js library
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    
    script.onload = function() {
        // --- Configuration and Persistence ---
        const defaultConfig = {
            particles: {
                number: { value: 105 },
                color: { value: '#26FF9A' },
                shape: { type: 'star' },
                opacity: { value: 0.2 },
                size: { value: 5.5 },
                move: { enable: true, speed: 1.5 },
                line_linked: { enable: true }
            },
            interactivity: {
                events: { onhover: { enable: true, mode: 'repulse' } }
            }
        };

        let savedSettings = localStorage.getItem('particlesSettings');
        let config = savedSettings ? JSON.parse(savedSettings) : defaultConfig;

        // Function to initialize/restart particles
        function initParticles() {
            // Note: particlesJS attempts to clear and reinitialize the canvas
            particlesJS('particles-js', config);
        }

        // 3. CONDITIONAL CONTROL LOGIC (Only runs on the Settings Page)
        const amountSlider = document.getElementById('particlesAmount');

        if (amountSlider) {
            // If the control elements exist, define control-specific variables and functions
            const speedSlider = document.getElementById('moveSpeed');
            const sizeSlider = document.getElementById('sizeRange');
            const shapeSelect = document.getElementById('shapeSelect');
            const amountValue = document.getElementById('amountValue');
            const speedValue = document.getElementById('speedValue');
            const sizeValue = document.getElementById('sizeValue');

            function setControlValues(cfg) {
                amountSlider.value = cfg.particles.number.value || 105;
                speedSlider.value = cfg.particles.move.speed || 1.5;
                sizeSlider.value = cfg.particles.size.value || 5.5;
                shapeSelect.value = cfg.particles.shape.type || 'star';

                amountValue.textContent = amountSlider.value;
                speedValue.textContent = speedSlider.value;
                sizeValue.textContent = sizeSlider.value;
            }

            function updateParticles() {
                config.particles.number.value = parseInt(amountSlider.value, 10);
                config.particles.move.speed = parseFloat(speedSlider.value);
                config.particles.size.value = parseFloat(sizeSlider.value);
                config.particles.shape.type = shapeSelect.value;

                // Save new settings
                localStorage.setItem('particlesSettings', JSON.stringify(config));

                // Apply new settings
                initParticles(); 
            }

            // Initialize control panel values based on saved config
            setControlValues(config);

            // Attach event listeners to update and save settings
            amountSlider.addEventListener('input', function() {
                amountValue.textContent = this.value;
                updateParticles();
            });

            speedSlider.addEventListener('input', function() {
                speedValue.textContent = this.value;
                updateParticles();
            });

            sizeSlider.addEventListener('input', function() {
                sizeValue.textContent = this.value;
                updateParticles();
            });

            shapeSelect.addEventListener('change', updateParticles);
        }

        // 4. FINAL INITIALIZATION (Runs on all pages using the default or saved config)
        initParticles();
    };
    
    document.head.appendChild(script);
});
