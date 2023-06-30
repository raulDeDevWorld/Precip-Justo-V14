'use client'

import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useUser } from "../context/Context.js"
import { useState, useRef, useEffect } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import Button from '../components/Button'
import { useRouter } from 'next/router'
import { writeUserData } from '../firebase/utils'


Font.register({ family: "Inter", src: "/assets/font.otf" })

const styles = StyleSheet.create({
    body: {
        position: 'relative',
        boxSizing: 'border-box',
        padding: '1cm',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0 0 5px 1px rgb(175, 175, 175)',
    },
    form: {
        boxSizing: 'border-box',
        position: 'relative',
        width: '6cm',
        height: '8cm',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2mm solid rgb(229, 229, 229)',
        margin: '0.5mm'
    },

    formReverse: {
        boxSizing: 'border-box',
        position: 'relative',
        width: '6cm',
        height: '8cm',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0.5mm dashed rgb(229, 229, 229)',
        margin: '0.5mm'
    },


    image: {
        boxSizing: 'border-box',
        position: 'relative',
        objectFit: 'cover'
    },

    heart: {
        height: '50px',
        width: '50px',
        textAlign: 'center',
        position: 'absolute',
        fontSize: '12px',
        color: 'rgb(0, 0, 0)',
        border: 'none',
        padding: '5px',
        marginBottom: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const PDFView = ({ dbUrl, style }) => {
    const router = useRouter()

    const [ dataUrl, setDataUrl] = useState('');

    const {userDB, user} = useUser()
    const [isCliente, setisCliente] = useState(false);

    function download(url) {

        const isWebview = () => {

            if (typeof window === undefined) { return false };

            let navigator = window.navigator;

            const standalone = navigator.standalone;
            const userAgent = navigator.userAgent.toLowerCase();
            const safari = /safari/.test(userAgent);
            const ios = /iphone|ipod|ipad/.test(userAgent);
            return ios ? !standalone && !safari : userAgent.includes('wv');
        }
        if (isWebview()) {
            writeUserData (`/`, {[user.uid]: image}, null)
            router.pathname !== '/DownloaderPDF' &&   window.open(`https://collage-two.vercel.app/DownloaderPDF?dataUrl=${dataUrl}&uid=${user.uid}`, '_system')
        } else {
            console.log('no es una webview')
        }
    }


    useEffect(() => {
        setDataUrl(dbUrl)
        setisCliente(true)
    });

    return (
        <div>
            {isCliente && <PDFDownloadLink document={
                <Document>
                    <Page size='A4' style={styles.body} >
                        <View>
                            <Text>En prcio justo nos sentimos orgullosos de poder brindar nuestro apoyo a medicos de gran capacidad, asi como un amplio profesionalismo como el Dr.</Text>
                        </View>

                        <View>
                            <Text>RECETA MEDICA</Text>
                            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a ratione, sequi cum quaerat, exercitationem labore incidunt repellendus corporis, debitis assumenda! Eius veritatis at a corrupti illo quo nostrum ipsum!
                            Id inventore minus nam eveniet neque unde accusamus dolorum culpa esse alias, adipisci voluptatem. Alias laboriosam, tempore assumenda aliquid suscipit est facilis. Delectus enim, libero numquam assumenda quae recusandae aliquid.
                            Modi dolorum mollitia ea ipsa autem eveniet dignissimos, expedita excepturi dolores esse blanditiis aut voluptas deleniti aspernatur eos ad maxime temporibus quaerat magni voluptatibus unde doloribus animi, vel cum? Eaque.</Text>
                        </View>
                        <View style={styles.container} >
                            <Text>TOTAL PRODUCTOS</Text>
                            {uuid && uuid.map((i, index) =>
                                <View style={styles.box} key={index}>
                                    <Image src='/logo.png' style={styles.image}></Image>
                                    <Text style={styles.text}>Gracias por tu compra</Text>
                                    <Text style={styles.text}>Tu codigo de activación es el:</Text>
                                    <Text style={styles.text}>{i}  </Text>
                                </View>
                            )}
                        </View>
                    </Page>
                </Document>
            }
                fileName='Activadores'>

                {({ blob, url, loading, error }) =>
                    <Button theme={'Primary'} click={(e)=>download(url)}> {'Descargar PDF'}</Button>
                }
            </PDFDownloadLink>}
        </div>
    )
}

export default PDFView