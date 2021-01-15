var axios = require ("axios");
var cheerio = require ("cheerio");
var color = require("colors");



axios.get("https://arstechnica.com/").then(
    (res)=>{
        const $ = cheerio.load(res.data);

        $("li.tease ").each((i,ele) =>{
             const links = $(ele).find("a.overlay").attr("href");
             const text = $(ele).find("p.excerpt").text();
             console.log(text);

             console.log(links);

        })

    }
)