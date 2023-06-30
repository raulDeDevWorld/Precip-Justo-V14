'use client'

import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useUser } from "../context/Context.js"
import { useState, useRef, useEffect } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import Button from '../components/Button'
import { useRouter } from 'next/navigation';


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
    image: {
        boxSizing: 'border-box',
        position: 'relative',
        objectFit: 'cover'
    },

})

const PDFView = ({ dbUrl, style }) => {
    const router = useRouter()

    const [dataUrl, setDataUrl] = useState('');

    const { userDB, user, recetaDB, cart } = useUser()
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
            router.pathname !== '/DownloaderPDF' && window.open(`https://collage-two.vercel.app/DownloaderPDF?dataUrl=${dataUrl}&uid=${user.uid}`, '_system')
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
                            <Text style={{ fontSize: '12px' }}>En precio justo nos sentimos orgullosos de poder brindar nuestro apoyo a medicos de gran capacidad, asi como un amplio profesionalismo como el Dr. {user.nombre}</Text>
                        </View>

                        <View style={{ display: 'flex', width: '100%', flexDirection: 'row', paddingTop: '50px' }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: '12px', alignText: 'center' }}>RECETA MEDICA</Text>

                                <View style={{ paddingTop: '25px' }}>
                                    <Text style={{ fontSize: '12px' }}>Paciente: {recetaDB.paciente}</Text>
                                </View>
                                <View style={{ paddingTop: '25px' }}>
                                    <Text style={{ fontSize: '12px' }}>Diagnostico: {recetaDB.diagnostico}</Text>
                                </View>
                                <View style={{ paddingTop: '25px' }}>
                                    <Text style={{ fontSize: '12px' }}>Hospital o centro de salud: {recetaDB.hospital}</Text>
                                </View>
                                <View style={{ paddingTop: '25px' }}>
                                    <Text style={{ fontSize: '12px' }}>Hospital o centro de salud: {user.nombre}</Text>
                                </View>

                                <Text style={{ fontSize: '12px', alignText: 'center', paddingTop: '25px' }}>TOTAL PRODUCTOS</Text>

                                {Object.values(cart).length > 0 ? Object.values(cart).map((i, index) => {
                                    return <View style={{ paddingTop: '25px' }}  >

                                        <Text style={{ fontSize: '12px' }}>
                                            Nombre de producto: {i['nombre de producto 1']}
                                        </Text>
                                        <Text style={{ fontSize: '12px' }}>
                                            Cantidad: {i['cantidad']}u
                                        </Text>

                                    </View>
                                }) : ''}





                                {/* <View style={{ paddingTop: '25px' }}>

                                    <span className='font-bold '>TOTAL: </span>
                                    <span className='font-bold '>
                                        {Object.values(cart).reduce((acc, i, index) => {
                                            const sum = i['costo'] * i['cantidad']
                                            return sum + acc
                                        }, 0)} BOB
                                    </span>

                                </View> */}







                                {/* <li className='flex justify-between text-gray-700 text-[16px] '>
                                    <span className='font-bold '>TOTAL: </span>
                                    <span className='font-bold '>
                                        {Object.values(cart).reduce((acc, i, index) => {
                                            const sum = i['costo'] * i['cantidad']
                                            return sum + acc
                                        }, 0)} BOB
                                    </span>
                                </li> */}
















                            </View>
                            <View style={{ width: '50%' }}>
                                <Image src="/logo-main.png" style={{ height: '130px', width: '100px' }}></Image>
                                {dataUrl ? <Image src={dataUrl} style={{ width: '200px', height: '200px', marginTop: '50px' }} />
                                    : ''}
                            </View>
                        </View>



                    </Page>
                </Document>
            }
                fileName='Receta'>

                {({ blob, url, loading, error }) =>
                    <Button theme={'Primary'} click={(e) => download(url)}> {'Descargar PDF'}</Button>
                }
            </PDFDownloadLink>}
        </div>
    )
}

export default PDFView