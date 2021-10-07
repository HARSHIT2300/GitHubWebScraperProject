const url = "https://github.com/topics";
const request = require("request");
const cheerio = require("cheerio");
const obj = require("./ReposPage");
request(url,cb);

function cb(error,response,html)
{
    if(error)
    console.log(error);
    else if(response.statusCode == 404)
    {
        console.log("Page Not Found");
    }
    else
    extractLink(html);
}
function extractLink(html)
{
    let $ = cheerio.load(html);
     let topicLinks = $(".no-underline.d-flex.flex-column.flex-justify-center");
     for(let i=0;i<topicLinks.length;i++)
     {
            let link = $(topicLinks[i]).attr("href");
        //  link = "https://github.com"+link;
            link = `https://github.com${link}`;
            let techtopicname = link.split('/').pop();   // on doing .pop() operation we get the last element of the array formed on splitting the link on basis of /  charachter.... 
            //  console.log(link);
            obj(link,techtopicname);
            // named the object as obj to check whether it works with a different name or not. it works
     }
}