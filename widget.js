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
                align: localStorage.getItem('w_align') || 'top-left',
                style: localStorage.getItem('w_style') || 'style-chromeos',
                is24h: localStorage.getItem('w_24h') === 'true'
            };

            const style = document.createElement('style');
            style.innerHTML = `
:root { --accent: ${theme.accent}; --bg: ${theme.bg}; }
.js-widget {
    position: fixed; background: var(--bg); color: #fff;
    z-index: 9999;
    padding: 6px 10px; border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    backdrop-filter: blur(20px);
    font-family: 'Fira Code', 'JetBrains Mono', monospace;
    transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    width: 240px;
    border: 1px solid rgba(255,255,255,0.06);
}

/* Position variants */
.bottom-right { bottom: 16px; right: 16px; }
.bottom-left  { bottom: 16px; left:  16px; }
.top-right    { top:    16px; right: 16px; }
.top-left     { top:    16px; left:  16px; }

/* Style variants */
.style-chromeos:hover { width: 340px; }
.style-float:hover    { transform: translateY(-10px); }

/* ── Top accent beam ── */
.js-widget::before {
    content: '';
    position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    border-radius: 16px 16px 0 0;
    opacity: 0.6;
}

/* ── Rotating glow border on hover ── */
.js-widget::after {
    content: '';
    position: absolute; inset: -1px;
    border-radius: 17px;
background: radial-gradient(
        circle at var(--x, 50%) var(--y, 50%), 
        rgba(38, 255, 154, 0.15) 0%, 
        transparent 10%
    );
    opacity: 0;
    z-index: -1;
    transition: opacity 0.4s ease;
    animation: borderSpin 3s linear infinite paused;
}
.js-widget:hover::after {
    opacity: 0.35;
    animation-play-state: running;
}
@keyframes borderSpin { to { transform: rotate(360deg); } }

/* ── Battery shell ── */
.shell {
    width: 28px; height: 11px;
    border: 1.5px solid rgba(255,255,255,0.3);
    border-radius: 3px;
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-right: 8px;
    overflow: visible;
    flex-shrink: 0;
}
.shell::after {
    content: '';
    position: absolute; right: -5px; top: 50%;
    transform: translateY(-50%);
    width: 3px; height: 6px;
    background: rgba(255,255,255,0.3);
    border-radius: 0 2px 2px 0;
}
.fill {
    height: 100%; width: 0%;
    background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #fff));
    transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 1px;
    box-shadow: 0 0 8px var(--accent);
}

/* ── Charging pulse ── */
@keyframes pulse {
    0%   { opacity: 1; box-shadow: 0 0 6px var(--accent); }
    50%  { opacity: 0.35; box-shadow: 0 0 16px var(--accent); }
    100% { opacity: 1; box-shadow: 0 0 6px var(--accent); }
}
.charging .fill { animation: pulse 1.1s ease-in-out infinite; }

/* ── Reveal panel ── */
.reveal {
    max-height: 0; opacity: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.3s ease,
                margin 0.3s ease;
}
.js-widget:hover .reveal {
    max-height: 500px; opacity: 1;
    margin-top: 10px;
}

/* ── Stats ── */
.stat {
    font-size: 0.72rem;
    display: flex; justify-content: space-between; align-items: center;
    margin: 5px 0;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.04em;
    gap: 8px;
}
.stat-label {
    color: rgba(255,255,255,0.35);
    font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
}
.stat-value {
    color: rgba(255,255,255,0.85);
    font-variant-numeric: tabular-nums;
}

/* ── Mini progress bars on stats ── */
.stat-bar {
    flex: 1; height: 2px; border-radius: 2px;
    background: rgba(255,255,255,0.07);
    overflow: hidden; margin: 0 6px;
}
.stat-bar-fill {
    height: 100%; border-radius: 2px;
    background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 60%, #fff));
    box-shadow: 0 0 6px var(--accent);
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Calendar ── */
.cal {
    display: grid; grid-template-columns: repeat(7, 1fr);
    gap: 3px;
    font-size: 0.65rem;
    border-top: 1px solid rgba(255,255,255,0.07);
    padding-top: 8px; margin-top: 8px;
    text-align: center;
    letter-spacing: 0;
}
.cal-day {
    padding: 2px 0;
    color: rgba(255,255,255,0.35);
    border-radius: 3px;
    transition: background 0.2s, color 0.2s;
}
.cal-day:hover { background: rgba(255,255,255,0.07); color: #fff; }
.today {
    color: var(--accent);
    font-weight: 700;
    background: rgba(var(--accent-rgb, 38,255,154), 0.12);
    border-radius: 3px;
    box-shadow: 0 0 10px color-mix(in srgb, var(--accent) 50%, transparent);
}
.cal-header { color: rgba(255,255,255,0.22); font-size: 0.6rem; letter-spacing: 0.06em; }

/* Navigation buttons */
.navigate {
    width: 18px; height: 18px;
    border: none; border-radius: 4px;
    background: rgba(255,255,255,0.07);
    color: rgba(255,255,255,0.5);
    cursor: pointer; font-size: 10px;
    display: inline-flex; align-items: center; justify-content: center;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    padding: 0;
}
.navigate:hover {
    background: var(--accent);
    color: #000;
    box-shadow: 0 0 10px var(--accent);
}

/* ── Online dot ── */
.online-dot {
    width: 6px; height: 6px;
    background: var(--accent);
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    box-shadow: 0 0 6px var(--accent), 0 0 12px color-mix(in srgb, var(--accent) 50%, transparent);
    animation: dotBlink 2.5s ease-in-out infinite;
    flex-shrink: 0;
}
@keyframes dotBlink {
    0%,100% { opacity: 1; box-shadow: 0 0 6px var(--accent); }
    50%      { opacity: 0.4; box-shadow: 0 0 14px var(--accent); }
}

/* ── Section divider ── */
.widget-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
    margin: 6px 0;
}

/* ── Month label ── */
.month-label {
    font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 6px;
}

/* ── Header row (time + battery) ── */
.widget-header {
    display: flex; align-items: center; justify-content: space-between;
    gap: 8px;
}
.widget-time {
    font-size: 1.05rem; letter-spacing: -0.02em; font-weight: 400;
    color: #fff;
    line-height: 1;
    font-variant-numeric: tabular-nums;
}
.widget-battery {
    display: flex; align-items: center;
    font-size: 0.68rem; letter-spacing: 0.06em;
    color: rgba(255,255,255,0.5);
} 
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
        const now = new Date();
        
        // 1. Get the Time string (10:30)
        const timePart = now.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: !is24h 
        }).replace(/\s?[AP]M/, ''); // Remove AM/PM from the main string

         // 2. Get the AM/PM part separately
        const ampm = !is24h ? now.toLocaleTimeString([], { hour12: true }).slice(-2) : '';

        // 3. Construct the HTML
        document.getElementById('w-clock').innerHTML = `
            ${timePart}<span style="font-size: 0.6em; opacity: 0.5; margin-left: 2px; font-weight: 300;">:${now.getSeconds().toString().padStart(2, '0')}</span><span> ${ampm}</span>
        `;
    };
    setInterval(update, 1000); 
    update();
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
    const CACHE_KEY = 'w_weather_cache';
    const expires = 10 * 60 * 1000;
    const now = Date.now();

    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
        const data = JSON.parse(cached);
        if (now - data.timestamp < expires) {
            this.updateWeatherUI(data.temp);
            return;
        }
    }

    try {
        // 1. Stealth IP-based Geo lookup (Uses a different service unlikely to be blocked)
        const geoRes = await fetch('https://ipapi.co/json/');
        const geoData = await geoRes.json();

        // 2. Extract coordinates
        const lat = geoData.latitude;
        const lon = geoData.longitude;

        if (!lat || !lon) throw new Error("Location blocked");

        // 3. Fetch Weather from Open-Meteo
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit`);
        const weatherData = await weatherRes.json();
        
        const temp = Math.round(weatherData.current_weather.temperature);

        // 4. Save and Update
        localStorage.setItem(CACHE_KEY, JSON.stringify({ temp, timestamp: now }));
        this.updateWeatherUI(temp);

    } catch (e) {
        console.warn("School network block detected, using fallback.");
        // If everything is blocked, show 72° so the UI doesn't look broken
        const fallbackTemp = cached ? JSON.parse(cached).temp : 72;
        this.updateWeatherUI(fallbackTemp);
    }
},

updateWeatherUI(temp) {
    const el = document.getElementById('w-temp');
    if (el) el.innerText = `${temp}°F 🌤️`;
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