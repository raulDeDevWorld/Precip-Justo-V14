var html_to_pdf = require('html-pdf-node');



export default function handler(req, res) {
    // res.status(200).json({ name: 'example' })

    let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

    let file = { content: "<h1>Welcome to html-pdf-node</h1>", name: 'example.pdf' };
    html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
        res.setHeader('Content-Type', 'application/pdf')
       return     res.send(pdfBuffer);
    });
}












// // var html_to_pdf = require('html-pdf-node');
// const express = require("express");
// // const createTemplate = require("../../components/pdfDoc");

// const app = express();
// // app.use(express.json());
// const port = 3000;

// app.get("/", async (req, res) => {

//     // let options = { format: 'A4' };
//     // // Example of options with args //
//     // // let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

//     // let file = { content: "<h1>Welcome to html-pdf-node</h1>" };
//     // // or //
//     // // let file = { url: "https://example.com" };
    // html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
    //     res.send("PDF Buffer:-", pdfBuffer);
    // });
//     res.send("hello world")
// });

// // app.listen(port, () => {

// //     console.log('funcionando')

// //     // console.log(`The sample PDF app is running on port ${port}.`);
// // });





