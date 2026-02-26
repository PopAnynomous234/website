import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { 
  getDatabase, 
  ref, 
  runTransaction, 
  onValue 
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDB2GVl8AdhQF-XMWSU3JvQ05Kb5Gp424s",
  authDomain: "chat-283f4.firebaseapp.com",
  databaseURL: "https://chat-283f4-default-rtdb.firebaseio.com",
  projectId: "chat-283f4",
  storageBucket: "chat-283f4.firebasestorage.app",
  messagingSenderId: "585084707472",
  appId: "1:585084707472:web:328cc1e40654787e1eee15",
  measurementId: "G-0EP9CX2LX7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log("era10.js loaded");
// ====================
// Configuration for jsDelivr CDN
// ====================
const GITHUB_USERNAME = 'PopAnynomous234';
const REPO_NAME = 'Goodboy';
const BRANCH_NAME = 'main';
const GAMES_FOLDER = '';    
// jsDelivr Base URL: https://cdn.jsdelivr.net/gh/{user}/{repo}@{branch}/{path}
const JSDELIVR_BASE_URL = `https://cdn.jsdelivr.net/gh/${GITHUB_USERNAME}/${REPO_NAME}@${BRANCH_NAME}/${GAMES_FOLDER}`;
// Result: https://cdn.jsdelivr.net/gh/PopAnynomous234/Goodboy@main/

const games = [
    {
        title: "Suggest a Game",
        image: "https://cdn.jsdelivr.net/gh/PopAnynomous234/Goodboy/download.png",
        url: "suggestagame.html"
    },
    {
        title: "Asteroid Dodger",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLeJf7t2Qa7wF0LWciwDeCMGwcBOu-Wli5w&s",
        url: "asteroidd.html"
    },
    {
        title: "Steal a Brainrot",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrmQEtR_vNM0wK28umgIOWHGNvDUyCwYBGw&s",
        url: "stealabrainrot.html"
    },
    {
        title: "Minecraft 1.8.8",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0vHoJhpj8iQsP4b7Fu4Kxk-dZR1tu1XbHw&s",
        url: "mine18.html"
    },
    {
        title: "Minecraft 1.12.2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4xkP7SwGg6blUCTGhhSiWJX6Fvd_GhNLEQ&s", 
        url: "mine12.html"
    }, 
    {
        title: "Flood Runner",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrsFBub418I3qZX7KCZoi9mCpPEZpej4QE2w&s", 
        url: "floodrunner.html"
    },
        {
        title: "1v1 lol",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_VJHSxfnqXMWET4enHb2tyaIZ6vD2mhAzg&s", 
        url: "1v1lol.html"
    },
        {
        title: "Among us",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Lei9hPG6FBd1r7ti47J0ZpZEtZDpkECRGg&s", 
        url: "amongus.html"
    },
        {
        title: "Fruit Ninja",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUXZoTMrcrW_WjRlvqzsOhGsmIAZxnwwslA&s", 
        url: "fruitninja.html"
    },
        {
        title: "Magic fluids",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5_yAhxWqZlLRyB1WfhBJQhd2M5nXCRQuGQ&s", 
        url: "fluid.html"
    },
        {
        title: "Cut the Rope",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7uiDH7JKismIvap7cVj87Flkm64rKV8kDQ&s", 
        url: "cuttherope.html"
    },
        {
        title: "Noob Biker",
        image: "https://cdn.jsdelivr.net/gh/CoolDude2349/everything@main/crazymotor/icon.png", 
        url: "noobbiker.html"
    },
        {
        title: "Gun-Spin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpop1oMO0cbM3tnnZW_nO0XhoaT-B9aw7FCA&s", 
        url: "gunspin.html"
    },
        {
        title: "Drift Boss",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwFr4kacOiUXdrORwrSnDw3EDCG71R_og2A&s", 
        url: "driftboss.html"
    },
            {
        title: "Crazy Cattle",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWW8oAEFcbkh3uPA3fhbxbL1doeTKtQrRyg&s", 
        url: "crazycattle.html"
    },
            {
        title: "Crazy Chicken",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfCY9yv-id1-LyFfY64HiOjuZfqCwxa6_vVA&s", 
        url: "crazychicken.html"
    },
            {
        title: "Elastic Face",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSVtL6OOr884Lu4jPWFoL3hthn3SltP6knQ&s", 
        url: "elasticface.html"
    },
            {
        title: "Temple run 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQea-2_8_ZHjIOokaGPpCrEAwiczBLsBhZKQ&s", 
        url: "templerun2.html"
    },
            {
        title: "Subway Surfers:Barcelona",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZmdjY8aF1nahmdOg3R40QUIwQTKXprEtmg&s", 
        url: "subwaysurfersbarc.html"
    },
            {
        title: "Subway Surfers:Houston",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZmdjY8aF1nahmdOg3R40QUIwQTKXprEtmg&s", 
        url: "subwaysurfershouston.html"
    },
            {
        title: "Subway Surfers:London",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZmdjY8aF1nahmdOg3R40QUIwQTKXprEtmg&s", 
        url: "subwaysurferslondon.html"
    },
                {
        title: "Subway Surfers:Iceland",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZmdjY8aF1nahmdOg3R40QUIwQTKXprEtmg&s", 
        url: "subwaysurfersiceland.html"
    },
                {
        title: "Grow a Garden",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTnqq11pxg73Cumg4UTd9tMi7NLAKpCQiIQ&s", 
        url: "growagarden.html"
    },
                {
        title: "Doomz.io",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwX0R1Mfdp90fJpKod8zGdvDM4QcEcxx5C4ySlAXrm5tF6dXUnJmGdAKNw0P2xRmIl2eI&usqp=CAU", 
        url: "doomzio.html"
    },
                {
        title: "Extreme Run 3d",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4E4Sj7vHwEOXlBJbnVEtJC3274QJOZ4Xn2g&s", 
        url: "extremerun.html"
    },
                {
        title: "Traffic Jam 3d",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-PDRFohPHOd3aE9BsrtOkrSFi_ygCqbR3g&s", 
        url: "trafficjam3d.html"
    },
                {
        title: "Baseball Bros",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEXWNxeGiuyN5yV2A3HqGBPfcu2WYwW0JJyw&s", 
        url: "baseballbros.html"
    },
                {
        title: "Dogeminer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQa5TMgbuvbD501Z4tAAh3OgXngwdTJz0VGA&s", 
        url: "dogeminer.html"
    },
                {
        title: "Backrooms",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrN3vq51KSDHq579xhP-0mlEPedjb4YeCxfw&s", 
        url: "backroom.html"
    },
                {
        title: "Basket Random",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJDo2hZCIM_BpQ6S4EfeUl2wzzDx-EE-yfQ&s", 
        url: "basketrandom.html"
    },
    {
        title: "Cookie Clicker",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKljBD9rNQeXpZVkcstSTVEIhe8Q8d1zrVg&s", 
        url: "cookieclicker.html"
    },
    {
        title: "100 Sk!bidi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSgZDBPDBlYqksWiCvdxT0EFUO8JgSM_wbg&s", 
        url: "100skibidi.html"
    },
    {
        title: "Snow Rider 3d",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkY-5wyeay3Ot1wpl7S52pgxQrZCFdGwffpctRnbMAYNoJkPI_8lGxpaYi83hwdwYTLE_0A1xzo19fIaDExyDa6Wua6-BGJ1rcVRQQ8Ne6xg&s=10", 
        url: "snowrider.html"
    },
    {
        title: "Soccer Bros",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRikvBH-f1GpxUwX21kRhIaEpCucTEjKNd4Q&s", 
        url: "soccerbros.html"
    },
    {
        title: "Retro Bowl",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMP8sYHYvkZ_tA_49kL-coqh2rrKd1DG4XjnxoxBaqj-rT0-5eVa3b19B3Y2L29kX5sKqAlBwrhDNbgvr9PMYRFUZvk9WPnretbaBT7qX&s=10", 
        url: "retrobowl.html"
    },
    {
        title: "Infinity Craft",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjv4EdkyRptF-Ev_sp_mhriLgQ0mb7-AwZQ&s", 
        url: "infinitycraft.html"
    },
    {
        title: "Drive Mad",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7sXF1VXQwu1jp9DmYmaiiLLivZ73jfbVag&s", 
        url: "drivemadfixed.html"
    },
    {
        title: "Bitlife",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5an-QjWBQdDbu3aiOEJ0cECI2TUtTZpcpeQ&s", 
        url: "bitlife.html"
    },
    {
        title: "Apple Shooter",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HCZkhoYcG1yyjojxRKkp3aH779-_BBhN4A&s", 
        url: "appleshooter.html"
    },
    {
        title: "Capybara Clicker",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRY-zbNUs9_CxuGwCCIUP-sC_0sZVYtTwhFQ&s", 
        url: "capybaraclicker.html"
    },
    {
        title: "Stickman Duel",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTNe_kQzXFhS29sd9ab-iLpDxZy7yl2NHtA&s", 
        url: "stickmanduel.html"
    },
    {
        title: "Tag",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKbxjfBvHtqm-ABW5fy5Vwy_iHaBiRsFEVg&s", 
        url: "tag.html"
    },
    {
        title: "YoHoHo.io",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDa_9_qcWGmU124Wh8X84f9hcAJAghMsosiw&s", 
        url: "yohoho.html"
    },
    {
        title: "10 Minutes Till Dawn",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivCAuwA5fsCSJ9UlaqTSZIOpaay6nBmdbog&s", 
        url: "10mintilldawn.html"
    },
    {
        title: "Baldi's Basics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDPdZPnJ_sL788teC8ue-s5LE0L6ychD5uA&s", 
        url: "baldib.html"
    },
    {
        title: "Plants Vs Zombies Mobile",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAl4H39pNM3M9fFy34I-5no39k1TqbDb3Q3A&s", 
        url: "Plantszombiesmobile.html"
    },
    {
        title: "Car King Arena",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DN6XweHTtDX6MunzbJBvUHJ8c4vJKuoOiw&s", 
        url: "carkingarena.html"
    },
    {
        title: "Google Dino",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV4txKWRls_a7GGcYSblBnUqVm4I9AJc1Ng&s", 
        url: "googledino.html"
    },
    {
        title: "Bacon May Die",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NX20eLgtAd-i-Lq6ea2lp_kFa_j-JLWx3Q&s", 
        url: "baconmaydie.html"
    },
    {
        title: "Bloons TD 4",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiFZqLgc_jbu0YbA9GCj4bgDaX6b4I-wPeQ&s", 
        url: "bloons4.html"
    },
    {
        title: "!2 Mini Battles",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrl5z2RBUCeqxQcVsLHTwEw90MTkpz0bX-g&s", 
        url: "12minibattle.html"
    },
    {
        title: "Friday Night Funkin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFu8Faz-jiQ1K6Cl2qx6cLwVxaKH8KwelEjQ&s", 
        url: "fnf.html"
    },
    {
        title: "Basket Bros",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DS1Utc4EYB6haCn8v-AdqcpEL8A_yUqoyQ&s", 
        url: "basketbros.html"
    },
    {
        title: "Amigo Pancho",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IFYqysHpsVNHveeuhbOVFNX3gXFYZD8XGg&s", 
        url: "amigopancho.html"
    },
    {
        title: "Boxing Random",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUyiQcp3T1Zx36b1gSAB6kFhpE9P6i9-7Bg&s", 
        url: "boxingrandom.html"
    },
    {
        title: "Coal LLC ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVteK8v7_r0awG-sUBQdfPbBqS0CKq0Nd0A&s", 
        url: "coalllc.html"
    },
    {
        title: "Coffee Maker",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGmJYw82REOS1PGANqqkms-tdNi4BElG93g&s", 
        url: "coffeemaker.html"
    },
    {
        title: "Chess Classic",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeRdL0CZJRLote4pTBWlarGeh3YJSS3-PqA&s", 
        url: "chess.html"
    },
    {
        title: "Draw Climber",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQsDdqvtws3CA2-a4h6wFMxkHFtoRstdbsw&s", 
        url: "drawcli.html"
    },
    {
        title: "Super Hot",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSusmmHR2LJPH1c32eP6SsXbpBd6jSrHhwz5A&s", 
        url: "superhot.html"
    },
    {
        title: "Super Cold",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRD9kVj7NErVgRKBKOd0nXePXidZV0Xhsf1g&s", 
        url: "supercold.html"
    },
    {
        title: "UNO!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINFqAssGntD31P9ctQlL1IWVhrZdWsjoFmQ&s", 
        url: "uno.html"
    },
    {
        title: "Aquapark.io",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CStWB1FyBHeEcGwKGXFBgys1qZIM56Z4mw&s", 
        url: "aquaparkio.html"
    },
    {
        title: "Command Strike",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVnET3XmNxfKz01Iw_9lW_J0Aauq2_TTomg&s", 
        url: "commandstrike.html"
    },
    {
        title: "Konkr.io",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWHbyzpdkCOtCkJTt-MEgYYLlFTmxSXPL2Wg&s", 
        url: "konkr.html"
    },
    {
        title: "Bad Monday Simulator",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2g2uSPmW1ishU9tYQYRoUVX9S1QTXVl-mg&s", 
        url: "badmondaysimulator.html"
    },
    {
        title: "Bob the Robber 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjquL2TQKEg0DJzIzAauuULNpbNOK2PgaWTw&s", 
        url: "bobtherobber2.html"
    },
    {
        title: "Bob the Robber 5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh16St57XOnFOuPrsYcyQRVogJn41wJ0vKIg&s", 
        url: "bobtherobber5.html"
    },
    {
        title: "Death Chase",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSale-M6iwRaTM8VgwjIoPzEp2corZQUp8i3A&s", 
        url: "deathchase.html"
    },
    {
        title: "Ducklings.io",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-oA7OyPYUspsoOLiwNwJrW2VjB3EXwwxJw&s", 
        url: "ducklingsio.html"
    },
    {
        title: "Duke Nukem 3D",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrqdOWSmURaeEm51hYPRfkM-D8j6AzXkNVA&s", 
        url: "dukenukem3d.html"
    },
    {
        title: "DUD",
        image: "https://cdn.jsdelivr.net/gh/PopAnynomous234/Goodboy/dud.png", 
        url: "dud.html"
    },
    {
        title: "Eagle Ride",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxHbjQLzDrQkXvo5oRjhmUSRuIIt0RmSxGg&s", 
        url: "eagleride.html"
    },
    {
        title: "Hei$t",
        image: "https://cdn.jsdelivr.net/gh/PopAnynomous234/Goodboy/heist.png", 
        url: "heist.html"
    },
    {
        title: "Lock the Door",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3DgCsYtoOc1erxULg229mcjZc64VzTLC8Q&s", 
        url: "lockthedoor.html"
    },
    {
        title: "Little Alchemy 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm884LBT2afwjnPJQLeBCj_Qi_dTS2AdhpUw&s", 
        url: "littlealchemy2.html"
    },
    {
        title: "OVO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSai2LyQhsnZ58KyMGpl4Ue8ZxCiUIu60UQSA&s", 
        url: "ovo.html"
    },
    {
        title: "OVO 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKEojd4l-EVknGePBazMvvUV_Q8qAnYcuIA&s", 
        url: "ovo2.html"
    },
    {
        title: "OVO 3D",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpM908rx_4GWKgJxk5In3yxCSRSL29E5ZXNQ&s", 
        url: "ovo3d.html"
    },
    {
        title: "Opposite Day",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyZT6JWfWC0vymRN_Wgd36TYjXNHT81OyZg&s", 
        url: "oppositeday.html"
    },
    {
        title: "Push your Luck",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufRk05QZJGUMSqcu30GrXfHkLODstyyrEfg&s", 
        url: "pushyourluck.html"
    },
    {
        title: "Ragdoll Soccer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2v_IS4-4Pg5qVO-7WimOYJo8EwJ313OQDQ&s", 
        url: "ragdollsoccer.html"
    },
    {
        title: "Retro Ping Pong",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Kv5oVA07m19A8pxgT63q2WlmNR6ryHr86g&s", 
        url: "retroping.html"
    },
    {
        title: "Pixel Speedrun",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXW8zH2vIr9LKgztdVm5NbIUOkKi9MoPlTA&s", 
        url: "ragdollsoccer.html"
    },
    {
        title: "Parking Furry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnECnC1Hr6aSLpXJn0NIVVPVmYM8UbbgMwMQ&s", 
        url: "parkingfurry.html"
    },
    {
        title: "Basketball Stars",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEms05jFAmmbQsTJfOuPkitVQh8Bat8dKMQ&s", 
        url: "basketstar.html"
    },
    {
        title: "Age of War",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6MbF1zCKvVxApyi0wrXMtNbXFH382-UeuQ&s", 
        url: "ageofwar.html"
    },
    {
        title: "Achilles",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDcNC7dVAZrASE2eySNwgZTeCMaOO-nHLeQ&s", 
        url: "achilles.html"
    },
    {
        title: "Abandoned 3",
        image: "https://cdn.jsdelivr.net/gh/PopAnynomous234/goodboy/abandoned3.png", 
        url: "abandoned3.html"
    },
    {
        title: "Duck Life",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lxjSB2BogLXN00v-U4-4iacuqhc-2D2SIA&s", 
        url: "ducklife.html"
    },
    {
        title: "Duck Life 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKlbRp7srttMo1AQo_VGWXJl_KqZy4b5zTg&s", 
        url: "ducklife2.html"
    },
    {
        title: "Duck Life 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-4BMyvsdDf60WAsWcQItmhyMDsH6GgBqYg&s", 
        url: "ducklife3.html"
    },
    {
        title: "Duck Life 5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrWmewsI0UI6Jf3X3Fv-4hjrc4Ml35cmf3A&s", 
        url: "ducklife5.html"
    },
    {
        title: "Los Angeles Shark",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkhAxtzhgpYXfUwfPSVkqjqc-RO03Qym-yg&s", 
        url: "lashark.html"
    },
    {
        title: "Dig to China",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWpwJxTbUiQkzWUQi3SVgI9yuGgerYzkcJg&s", 
        url: "digtochina.html"
    },
    {
        title: "Agar.io Offline",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AS6R80UpGyTkMXwRhbAuTNdWgsnieXzS-g&s", 
        url: "agario.html"
    },
    {
        title: "Blastronaut",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpwbWzS6dXVyMY8Z2E448U4XQ2-1NPpKcQQ&s", 
        url: "blastronaut.html"
    },
    {
        title: "Hardware Tycoon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8kH2X0-tha5ZWrHaWisra77aot638FJdWA&s", 
        url: "hardwaretycoon.html"
    },
    {
        title: "Hungry Knight",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QGSodEvn-Nrd1QLXrnTWNUD8R0YcZEqR0w&s", 
        url: "hungrynight.html"
    },
    {
        title: "Age of War 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkYVnjGB7Xw7PBvJPtPtoXmjcSmCQ9RW2-Q&s", 
        url: "ageofwar2.html"
    },
    {
        title: "Achilles 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsS4GT449ShT4Bpx_8gt_vQtdT8eXFYaSwYQ&s", 
        url: "achilles2.html"
    },
    {
        title: "Achievement Unlocked",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbodxFAotuu8sh4MO2dWh4F83npWsj86ULtQ&s", 
        url: "achievement.html"
    },
    {
        title: "Achievement Unlocked 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNJ9Mw5FrGAZpN0YLvdfBaon3kjtAJWj9WA&s", 
        url: "achievement2.html"
    },
    {
        title: "Achievement Unlocked 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRX0g3H5lemsBzuuOGaQZWBYE0Hor8pHMOfw&s", 
        url: "achievement3.html"
    },
    {
        title: "A Koopa's Revenge",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl85ccKGp-EtEMb32gE1wUL3uud2aPbh0dTw&s", 
        url: "koopa.html"
    },
    {
        title: "A Koopa's Revenge 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsayyRdgmXZqgdjUtAZ4Mo0Ymp_80EGQ-Ew&s", 
        url: "koopa2.html"
    },
    {
        title: "Bloxorz",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqcFOES57O4vj2C2Qnku0IyspNV69vwNmog&s", 
        url: "bloxorz.html"
    },
    {
        title: "Bloons",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIqKCU3OrjyWgFpO0QrdmII8tcp59A29jeA&s", 
        url: "bloon.html"
    },
    {
        title: "Bloons 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNZ-fehyT0Gf58n-aVuckWwODy0Eds0fETw&s", 
        url: "bloon2.html"
    },
    {
        title: "Bloons TD 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuELjSMNl8AeRnTy_zF7dRobpM2F5sSsk6vw&s", 
        url: "bloons1.html"
    },
    {
        title: "Bloons TD 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUN6w9KTUcVJ4YhK9Tm1kLo027HD5qGw7QdQ&s", 
        url: "bloons2.html"
    },
    {
        title: "Bloons TD 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWa6u_F9NnTevn2w5uqyypgQiv0T57wN2dg&s", 
        url: "bloons3.html"
    },
    {
        title: "Bloons TD 5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNcBvwpfYka3lqZouhevedQU0LlIa7m0HzA&s", 
        url: "bloons5.html"
    },
    {
        title: "Bubble Shooter",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73rKM0UeCFq61i2Dw9DblGqIlwuoag-zDgQ&s", 
        url: "bubblesh.html"
    },
    {
        title: "Escape Road",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7nNI9QfTSsfTCnd7PZ5ESgLanfQaVY3hIA&s", 
        url: "escaperoadfixed.html"
    },
    {
        title: "Escape Road 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8__2Nm52usbdV3DDbvZg0e97L4Qrjmmj6A&s", 
        url: "escaperoad2.html"
    },
    {
        title: "Enchain",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJXftcnuEEyP1RiOUELk-hdHoMJgw1gsr3Q&s", 
        url: "enchain.html"
    },
    {
        title: "FNAF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMBGbAHLedua6hBuESFTNdP76rr-Xs53wlw&s", 
        url: "fnaf.html"
    },
    {
        title: "Paper.io Mania",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTM4hfk7A8NgS_eaRVbwWpSEhLfcAKTvyL2Q&s", 
        url: "paperiomania.html"
    },
    {
        title: "Pac-Man",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8bUavksf1fLVNJ7irKJ1wAEC9dZJ7Rm9jg&s", 
        url: "pacman.html"
    },
    {
        title: "Silk",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SXG3JmGCIBnN7q6ckoAnhfjmXUHw4ETnQg&s", 
        url: "silk.html"
    },
    {
        title: "Ace Attorney",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgykqWmu-cZjxpjJ9JcTK1ApyGd4zuOEEy2g&s", 
        url: "acea.html"
    },
    {
        title: "Ace Attorney - Justice for All",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7EX-6WLA9kqcuL1StiGo_PSEK69BCGqvfw&s", 
        url: "aceaj.html"
    },
    {
        title: "Ace Attorney - Trails and Tribulations",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSb_Wc-7egGAnk8eLkmtpp6axYGmIeheUK5w&s", 
        url: "silk.html"
    },
    {
        title: "One Piece",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRqv29v-li2zmqqxpBDMOVq2v0FdDPiwa1Q&s", 
        url: "onepiece.html"
    },
    {
        title: "Pokémon Classic",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5t9b13JK5yLL26VeZSnzkaVD7xK-375q9w&s", 
        url: "pokeclassic.html"
    },
    {
        title: "Pokémon Emerald clear",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEAyYSqU0Yr3L8QBNPyNj-v9oT4z8DNulB-g&s", 
        url: "pokeeme.html"
    },
    {
        title: "Pokémon Dreamstone",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOY-kiey5pI7gHVghMymO5XkvIriOnIbS2Q&s", 
        url: "pokedream.html"
    },
    {
        title: "Pokémon Red Version",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Z5VM1ZH8QdwA5fa53EqMV42MjESwu-BeUA&s", 
        url: "pokered.html"
    },
    {
        title: "Pokémon Silver Version",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC3pgMUrcaufTQBQTZIV0jhaMaKrNHYvTydw&s", 
        url: "poksi.html"
    },
    {
        title: "Pokémon Sapphire",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyd3w-cekIYcgiVZQT5dKi-Yo31cNHpFh9xQ&s", 
        url: "pokesa.html"
    },
    {
        title: "Sonic Advance",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwNHUy4i688gbpW_KY4g7lob3xZFE2PDCYg&s", 
        url: "sonic.html"
    },
    {
        title: "Sonic Battle",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFg5_yx5hiqzZeNO3JRaH63U6nh68LMn9mQ&s", 
        url: "sonicb.html"
    },
    {
        title: "Super Mario Advance",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCURU-CgfrQ4uXXBwj4jXc_sE-tobXfHvmwg&s", 
        url: "supermario.html"
    },
    {
        title: "Super Mario Land",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmm9bLeq6LlGOvr7xu_7EvxDukXEOhIMSVA&s", 
        url: "supermariol.html"
    },
    {
        title: "Twisted Metal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7cX7zOTS_mRUXX8rjbdvNHsUk2tBPAKLwOg&s", 
        url: "twistedmetal.html"
    },
    {
        title: "Twisted Metal 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaNdRUTAmgZKiY3hecHmO5TXVPsIMOrE1gQ&s", 
        url: "twistedmetal2.html"
    },
    {
        title: "Pepsi Man",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW6j0t0e0qDpJdIxKteUzog5_Z9bWElRBHXQ&s", 
        url: "pepsiman.html"
    },
    {
        title: "FNAF 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wghs5HzMbAW9gkmS3Nkc5wNkY4pdzeSFWw&s",
        url: "fnaf2.html"
    },
    {
        title: "FNAF 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKKVcRgA_UpO9YtMRoHlYL93qhPPl1DcepA&s",
        url: "fnaf3.html"
    },
    {
        title: "FNAF 4",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNFav3cIoeq8egxa5tlTydCVy9mJ5BnbOHg&s",
        url: "fnaf4.html"
    },
    {
        title: "FNAF World",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kcvPI-PUIZliCc_29e_-F0JJ6HGQHTjwVw&s",
        url: "fnafworld.html"
    },
    {
        title: "Five Nights at Candy's",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJl2MlFUUSTc8kddL6-9zrTKumbvhCJHAYg&s",
        url: "fnac.html"
    },
        {
        title: "Stickman Kombat 2D",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu7IP2r8P74edCob_Ma0Gthz51cm8PQC-LMg&s",
        url: "stick.html"
    },
    {
        title: "Bottle Flip",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqA_2Q3iyzD8JgnPFyAixi3Cdmt2ZoLLR0eQ&s",
        url: "bottle.html"
    },
    {
        title: "Slope",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3-ook6c3OlcZYAcNU6KbEjs79K4BGFOGUg&s",
        url: "slope.html"
    },
    {
        title: "Slope 2 Player",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4M_99Un_dFeo6YkgejrmoenWIqT1nvbI3hA&s",
        url: "slope2.html"
    },
    {
        title: "Slope 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1tHWOQJlt8lfke14PSDUubojia30JfRskg&s",
        url: "slope3.html"
    },
    {
        title: "Smash Karts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHpaEKu-dAdRPF4cRaNa5rftEW9-xznJfbw&s",
        url: "smashk.html"
    },
    {
        title: "Apple Worm",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5UVgdYZje3RNLHAIsCyAAgvjpJrEipBurA&s",
        url: "applew.html"
    },
    {
        title: "Stickman Hook",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCWdJ7OxBWOtsfvbsWMNE3a4lF2xd1onTGA&s",
        url: "stickmanh.html"
    },
        {
        title: "House of Hazards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZT-fW0-kYdKhBs3pSQhh12Xbdqtm1eEBRg&s",
        url: "houseofh.html",
    },
    {
        title: "FNAW",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2SbLYcNK-_pdZ_zmC2krsXIwW-g7RnUYMw&s",
        url: "fnaw.html",
    },
    {
        title: "Ragdoll Archers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-08BxjorOyXwNYJNu-Ab_tm6dGU124_Qzg&s",
        url: "ragdolla.html",
    },
    {
        title: "Real Flight Simulator",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7Wgt_I-Xh10lwneougN2lkx0HwPxKVCWVA&s",
        url: "realflightsim.html",
    },
    {
        title: "We Become What We Behold",
        image: "https://img.youtube.com/vi/-amgr2RgCBc/0.jpg",
        url: "webecome.html",
    }, 
    {
        title: "UGS Library",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFfpMZ2POZsgEjd3l1QjvNJw410x4zK9cGw&s",
        url: "library.html",
    }, 
    {
        title: "Granny",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYg41d0mA8Q__ZdcPMu2Jufov4Dybznxz6tw&s",
        url: "granny.html",
    }, 
    {
        title: "FNF Vs FNAF",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzagY0XfBh05mYjRTWn9cJHUnxQqo2F6ufw&s",
        url: "fnff.html",
    }, 
    {
        title: "FNF Soft",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfc6dJMFHYvl_Y69u-zhbZu1BAnivpZ5pxQ&s",
        url: "fnfs.html",
    },
        {
        title: "Tomb of the Mask",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkJllI-wE8T0q92etiav74apIKDHAyxSVnA&s",
        url: "tomb.html"
    },
    {
        title: "Rooftop Snipers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTag63wCguBuuC0qpSFaTLJH4wZQoAxeuQ8-w&s",
        url: "rooftop.html"
    },
    {
        title: "Rooftop Snipers 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwpyb70B7A3Zv6gVATVN4rz_nd--rK3otaQ&s",
        url: "rooftop2.html"
    },
    {
        title: "Wrestle Bros",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzp9Q6iTk9nWB6lUMTAiPoicoI0ugkfa_X-w&s",
        url: "wrestlebros.html"
    },
    {
        title: "3 Dash",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aIyH4UIZtEXCjJCnGNVbjMBIRZROk6hNdQ&s",
        url: "3dash.html"
    },
    {
        title: "Bottle Jump 3D 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfurGbkxXlqet4thykpSloL334FTyHVYCyCw&s",
        url: "bottlej.html"
    },
    {
        title: "Block the Pig",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANptG0byYTV2qrCKqCj9zeCxYSNnIUQss_w&s",
        url: "blockpig.html"
    },
    {
        title: "Marble Race",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dJ9UR-tKm_MDcHeshIaHB7M0NDBhVyxZCQ&s",
        url: "marbler.html"
    },
    {
        title: "Block Blast",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeDHw2ZglbHYznFItvZ3T3I0aI-_aySuXsg&s",
        url: "blockblast.html"
    },
    {
        title: "Brawl Stars",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXyvxgz9hdlDbimAoCEbDe7gIy2q3YEpNu1Q&s",
        url: "brawl.html"
    },
    {
        title: "2PlayerGames.org",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2b2-Mv6owfqjeOQU6IUwg4mpP2X328QxiQ&s",
        url: "2player.html"
    },
    {
        title: "99 Nights in the forest",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBAWM38pvyW1KbRrIq2Xqn1LhQkfonZ7mIw&s",
        url: "99nights.html"
    },
        {
        title: "Geometry Dash Subzero",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfwAxV9ehfW5YL1mtacnfvlJUsiXQGjw1Pw&s",
        url: "geometryd.html"
    },
    {
        title: "Blackjack",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrve6NJuvXJEa2KYZ8kZsF3j7H30CLgsEdw&s",
        url: "blackjack.html"
    },
    {
        title: "Geometry Dash Lite",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskfP3QSLz4ccJ3IUBqnmjzPZzDgCpCqsbpw&s",
        url: "geometryda.html"
    },
    {
        title: "Indian Truck Simulator",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8gEvGBZz6TQYf2LAP37GKIg2tqYlAjkPbA&s",
        url: "indian.html"
    },
    {
        title: "Airline Tycoon",
        image: "data:image/png;base64,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",
        url: "airline.html"
    },
     {
        title: "Geometry Dash Lite",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskfP3QSLz4ccJ3IUBqnmjzPZzDgCpCqsbpw&s",
        url: "geometryda.html"
    },
    {
        title: "Hollow knight",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5R6yPD79p50UfhaliNUVRnsIUEm8Crh0-2w&s",
        url: "hollowk.html"
    }

];
// ====================
// DOM Elements
// ====================
const cardContainer = document.getElementById('card-container');
const gameContainer = document.getElementById('game-container');
const fullscreenIframe = document.getElementById('fullscreen-iframe');
// Note: fullscreenIframe is defined but not used here, only gameContainer is used in fullscreen functions.

// ====================
// Functions
// ====================

/**
 * Generates game cards based on the 'games' array.
 */
async function generateCards() {
    const container = document.getElementById('card-container');
    container.innerHTML = '';

    // 1️⃣ Create all Firebase requests at once
    const promises = games.map(game => {
        const gameId = game.url.replace('.html', '');
        const gameRef = ref(database, "gameViews/" + gameId);

        return new Promise(resolve => {
            onValue(gameRef, snapshot => {
                resolve({
                    game,
                    count: snapshot.exists() ? snapshot.val() : 0
                });
            }, { onlyOnce: true });
        });
    });

    // 2️⃣ Wait for all requests in parallel
    const results = await Promise.all(promises);

    // 3️⃣ Create cards all at once
    results.forEach(({ game, count }) => {
        const gameId = game.url.replace('.html','');
        const gameRef = ref(database, "gameViews/" + gameId);

        const card = document.createElement('div');
        card.className = 'game-card';
        card.dataset.url = game.url;

card.innerHTML = `
    <img src="${game.image}" alt="${game.title}">
    <h2>${game.title}</h2>
    ${game.type ? `<div class="type-tag">${game.type}</div>` : ''}
    <div class="view-counter">
        <i class="fas fa-eye"></i>
        <span class="count">${count}</span>
    </div>
`;

        card.addEventListener('click', async () => {
            await runTransaction(gameRef, (current) => (current || 0) + 1);

            const counter = card.querySelector('.count');
            counter.textContent = parseInt(counter.textContent) + 1;

            sessionStorage.setItem('currentGameUrl', JSDELIVR_BASE_URL + game.url);
            window.location.href = 'loader.html';
        });

        container.appendChild(card);
    });

    updateDisplay();
}
/**
 * Constructs the full jsDelivr URL, stores it in sessionStorage, and redirects
 * to the loader page.
 */
function openGameInFullscreen(event) {
    event.preventDefault();

    const relativeUrl = event.currentTarget.dataset.url;
    if (!relativeUrl) return;

    // Construct the full absolute URL using the jsDelivr base
    const fullGameUrl = JSDELIVR_BASE_URL + relativeUrl;
    
    // 1. Store the new full game URL in session storage
    sessionStorage.setItem('currentGameUrl', fullGameUrl);
    
    // 2. Redirect the user to the loader page
    window.location.href = 'loader.html';
}

    generateCards();
