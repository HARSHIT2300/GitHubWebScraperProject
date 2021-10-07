const request = require("request");
const cheerio = require("cheerio");
const extractIssuesHtml = require("./Issues");

function getTechPageURL(url,techname){
    request(url,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    } else if(response.statusCode == 404)
    {
        console.log("Page Not Found");
    }
    else{
         extractIssueLink(html);
        // console.log(html);
    }
}

function extractIssueLink(html)
{
    let $ = cheerio.load(html);
    let Repoarr = $(".f3.color-text-secondary.text-normal.lh-condensed");
    // console.log(techname);
    for(let i=0;i<8;i++)
    {
            let anchorarr = $(Repoarr[i]).find("a");
            let repolink = $(anchorarr[1]).attr("href");
            let reponame = repolink.split('/').pop();
            issueslink = "https://github.com"+repolink+"/issues";
            //  console.log(issueslink);
           
            extractIssuesHtml(issueslink,techname,reponame);
    }
        
}


}


module.exports = getTechPageURL;