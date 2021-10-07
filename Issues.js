const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit");
function  extractIssuesHtml(url,techname,reponame){
    request(url,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else if(response.statusCode == 404)
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
    const $ = cheerio.load(html);
    let issuesArr = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
    let linkArr = [];
    // console.log(reponame);
    for(let i=0;i<issuesArr.length;i++)
    {
        let issueLink = $(issuesArr[i]).attr("href");
        // console.log(issueLink);
        linkArr.push(issueLink);
    }
    // console.log(techname,"          ",linkArr);
    let folderpath = path.join(__dirname,techname);
    create_dir(folderpath);
    let filepath =  path.join(folderpath,reponame+".pdf");
    let text = JSON.stringify(linkArr);
    let pdfDoc = new pdfkit();
    pdfDoc.pipe(fs.createWriteStream(filepath));
    pdfDoc.text(text);
    pdfDoc.end();
}
}
module.exports =  extractIssuesHtml;

function create_dir(folder_path)
{
    if(fs.existsSync(folder_path)==false) fs.mkdirSync(folder_path);
}