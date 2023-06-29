import qrcodeParser from "qrcode-parser";

function QRreaderUtils(e) {

 qrcodeParser(e.target.files[0]).then((res) => {
        console.log(res);
    });

}

export { QRreaderUtils }