setTimeout(() => {
const p2pScript = document.createElement('script');
p2pScript.src = "https://cdn.jsdelivr.net/npm/bugout@1.0.1/bugout.min.js";
document.head.appendChild(p2pScript);

    const isEnabled = localStorage.getItem('w_enabled') !== 'false';
    if (!isEnabled) {
        console.log("Widget Engine: Disabled by user settings.");
        return;
    }

    const WidgetEngine = {
        init() {
            const theme = {
                accent: localStorage.getItem('w_accent') || '#26ff9a',
                bg: localStorage.getItem('w_bg') || 'rgba(32, 33, 36, 0.96)',
                align: localStorage.getItem('w_align') || 'bottom-right',
                style: localStorage.getItem('w_style') || 'style-chromeos',
                is24h: localStorage.getItem('w_24h') === 'true'
            };

            const style = document.createElement('style');
            style.innerHTML = `
                :root { --accent: ${theme.accent}; --bg: ${theme.bg}; }
                .js-widget {
                    position: fixed; background: var(--bg); color: #fff;
                    z-index: 9999;
                    padding: 10px; border-radius: 26px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                    backdrop-filter: blur(14px); font-family: 'Inter', 'Roboto', sans-serif;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); width: 200px;
                }
                .bottom-right { bottom: 20px; right: 20px; } .bottom-left { bottom: 20px; left: 20px; }
                .top-right { top: 20px; right: 20px; } .top-left { top: 20px; left: 20px; }
                .style-chromeos:hover { width: 300px; }
                .style-float:hover { transform: translateY(-12px); width: 200px; }
                .shell { width: 25px; height: 12px; border: 2px solid #5f6368; border-radius: 5px; position: relative; display: inline-block; margin-right: 10px; }
                .shell::after { content: ''; position: absolute; right: -6px; top: 4px; width: 3px; height: 6px; background: #5f6368; border-radius: 0 2px 2px 0; }
                .fill { height: 100%; width: 0%; background: var(--accent); transition: width 0.6s ease; }
                @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }
                .charging .fill { animation: pulse 1s infinite; }
                .reveal { max-height: 0; opacity: 0; overflow: hidden; transition: 0.4s ease; }
                .js-widget:hover .reveal { max-height: 600px; opacity: 1; margin-top: 18px; }
                .stat { font-size: 0.78rem; display: flex; justify-content: space-between; margin: 8px 0; color: #bdc1c6; }
                .cal { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; font-size: 0.7rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px; margin-top: 12px; text-align: center; }
                .today { color: var(--accent); font-weight: bold; border-bottom: 2px solid var(--accent); }
                .navigate { width:20px; height:20px; border:none; margin-right: 5px; }
                
                .online-dot { width: 8px; height: 8px; background: var(--accent); border-radius: 50%; display: inline-block; margin-right: 5px; box-shadow: 0 0 8px var(--accent); }
            `;
            document.head.appendChild(style);

            const widget = document.createElement('div');
            widget.id = 'main-widget-js';
            widget.className = `js-widget ${theme.align} ${theme.style}`;
            widget.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div id="w-clock" style="font-size:1.3rem; font-weight:300;">00:00</div>
                    <div id="w-temp" style="font-size:0.85rem; opacity:0.8;">Widget</div>
                </div>
                <div style="display:flex; align-items:center; margin:10px 0; justify-content: space-between;">
                    <div>
                        <div class="shell"><div id="w-fill" class="fill"></div></div>
                        <span id="w-perc">--</span>% <span id="w-bolt" style="display:none; color:var(--accent); margin-left:4px;">⚡</span>
                    </div>
                    <div style="font-size: 0.75rem; display: flex; align-items: center;">
                        <span class="online-dot"></span> <span id="w-online">1</span>
                    </div>
                </div>
                <div class="reveal">
                    <div class="stat"><span>CPU Load</span><span id="w-cpu">NOMINAL</span></div>
                    <div class="stat"><span>App Memory</span><span id="w-mem">-- MB</span></div>
                    <div class="stat"><span>Network</span><span id="w-net">Detecting...</span></div>
                    <div class="stat"><span>Speed</span><span id="w-speed">-- Mbps</span></div>
                    <div id="w-cal" class="cal"></div>
                    <br>
                    <a href="https://google.com"><img class="navigate" src="https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico"></a>
                    <a href="https://mail.google.com"><img class="navigate" src="https://www.google.com/a/cpanel/images/favicon.ico"></a>
                    <a href="https://youtube.com"><img class="navigate" src="https://www.youtube.com/s/desktop/a3c20ab4/img/favicon.ico"></a>
                    <a href="https://docs.google.com"><img class="navigate" src="https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico"></a>
                    <a href="https://drive.google.com"><img class="navigate" src="https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png"></a>
                </div>
            `;
            document.body.appendChild(widget);

            this.startClock(theme.is24h);
            this.startBattery();
            this.startComputePressure();
            this.startNetworkMonitor();
            this.startMemoryTracker();
            this.fetchWeather();
            this.buildCalendar();
            
            // Fixed the variable name here from 'script' to 'ablyScript'
            p2pScript.onload = () => this.startUserTracker();
        },

startUserTracker() {
    if (typeof Bugout === 'undefined') return;

    // We create an identifier for your specific site/room
    const b = new Bugout("my-unique-widget-lobby-v1");
    const display = document.getElementById('w-online');
    
    // Set our own presence
    const updateCount = () => {
        // Bugout keeps track of all seen addresses in the swarm
        const count = b.peers.length + 1; // Peers + You
        if (display) display.innerText = count;
    };

    // When a new peer is seen via the WebTorrent trackers
    b.on("seen", (address) => {
        updateCount();
    });

    // When a peer leaves or timeout
    b.on("left", (address) => {
        updateCount();
    });

    // Initial count
    updateCount();
},

        startClock(is24h) {
            const update = () => {
                document.getElementById('w-clock').innerText = new Date().toLocaleTimeString([], {
                    hour: '2-digit', minute: '2-digit', hour12: !is24h
                });
            };
            setInterval(update, 1000); update();
        },

        async startBattery() {
            if (navigator.getBattery) {
                const b = await navigator.getBattery();
                const update = () => {
                    const level = Math.round(b.level * 100);
                    document.getElementById('w-perc').innerText = level;
                    document.getElementById('w-fill').style.width = level + '%';
                    document.getElementById('w-bolt').style.display = b.charging ? 'inline' : 'none';
                    document.getElementById('main-widget-js').classList.toggle('charging', b.charging);
                };
                b.onlevelchange = update; b.onchargingchange = update; update();
            }
        },

        startComputePressure() {
            if ('PressureObserver' in window) {
                const observer = new PressureObserver((records) => {
                    const last = records[records.length - 1];
                    document.getElementById('w-cpu').innerText = last.state.toUpperCase();
                }, { sampleInterval: 2000 });
                observer.observe('cpu');
            }
        },

        startNetworkMonitor() {
            const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            const update = () => {
                if (conn) {
                    const type = conn.type === 'wifi' ? "Wi-Fi" : (conn.type === 'cellular' ? "Mobile Data" : "Online");
                    document.getElementById('w-net').innerText = type;
                    document.getElementById('w-speed').innerText = conn.downlink + " Mbps";
                }
            };
            if (conn) { conn.onchange = update; update(); }
        },

        async startMemoryTracker() {
            if (window.crossOriginIsolated && 'measureUserAgentSpecificMemory' in performance) {
                const getMem = async () => {
                    try {
                        const m = await performance.measureUserAgentSpecificMemory();
                        document.getElementById('w-mem').innerText = (m.bytes / 1048576).toFixed(1) + " MB";
                    } catch (e) {}
                    setTimeout(getMem, 300000); 
                };
                getMem();
            }
        },

async fetchWeather() {
    try {
        // 1. Silently get location via IP (No popup)
        const geoRes = await fetch('http://ip-api.com/json/');
        const geoData = await geoRes.json();
        
        // Fallback to Plano/Frisco if IP-Geo fails
        const lat = geoData.lat || 33.15;
        const lon = geoData.lon || -96.82;
        const city = geoData.city || "Local";

        // 2. Fetch hyper-local weather from Open-Meteo
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit`);
        const weatherData = await weatherRes.json();
        
        const temp = Math.round(weatherData.current_weather.temperature);
        
        // 3. Update the UI
        const display = document.getElementById('w-temp');
        if (display) {
            // Shows "73°F" and briefly "Plano" on hover if you want
            display.innerText = `${temp}°F 🌤️`;
            display.title = `Location: ${city}`; 
        }
    } catch (e) {
        console.warn("Silent Geo-Weather failed, using fallback.");
        document.getElementById('w-temp').innerText = "widget"; // Hardcoded backup
    }
},

        buildCalendar() {
            const d = new Date();
            const days = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
            const grid = document.getElementById('w-cal');
            if(!grid) return;
            grid.innerHTML = ''; 
            for (let i = 1; i <= days; i++) {
                const s = document.createElement('span');
                s.innerText = i;
                if (i === d.getDate()) s.className = 'today';
                grid.appendChild(s);
            }
        }
    };

    WidgetEngine.init();
}, 10);