var html_to_pdf = require('html-pdf-node');

export default function handler(req, res) {
    // res.status(200).json({ name: 'example' })
    let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

    let file = { content: "<h1>Welcome to html-pdf-node</h1>", name: 'example.pdf' };

    html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
        res.setHeader('Content-Type', 'application/pdf')
        return res.send(pdfBuffer);
    });
}





// const htmlPdf = require('html-pdf-chrome');

// // htmlPdf.create(html, options).then((pdf) => pdf.toBase64());
// // htmlPdf.create(html, options).then((pdf) => pdf.toBuffer());
// // htmlPdf.create(html, options).then((pdf) => pdf.toStream());

// export default function handler(req, res) {
//     // res.status(200).json({ name: 'example' })

//     const html = '<p>Hello, world!</p>';
//     const options = {
//       port: 3000, // port Chrome is listening on
//     };

//     htmlPdf.create(html, options).then((pdf) =>
//     console.log(pdf)

//    res.send(pdf.toFile('test.pdf'))) ;

//    // res.setHeader('Content-Type', 'application/pdf')
//     // return res.send(pdfBuffer);

  
// }






