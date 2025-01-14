const express = require('express');
const config = require("./config");
const fs = require('fs');
const { exec } = require("child_process");
let router = express.Router()
const pino = require("pino");
let pairingInProgress;

const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser
} = require("@whiskeysockets/baileys");
const {upload} = require('./mega')

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    let num = req.query.number;
        async function XeonPair() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState(`./session`)
     try {
            let XeonBotInc = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: Browsers.macOS("Safari"),
             });
             if(!XeonBotInc.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await XeonBotInc.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            XeonBotInc.ev.on('creds.update', saveCreds)
            XeonBotInc.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {


		try{
                await delay(10000);
                    const sessionXeon = fs.readFileSync('./session/creds.json');

				const xeonses = await XeonBotInc.sendMessage(XeonBotInc.user.id, { document: sessionXeon, mimetype: `application/json`, fileName: `creds.json` });

		var auth_path = './session/'	
	const user_jid = jidNormalizedUser(XeonBotInc.user.id);

                const mega_url = await upload(fs.createReadStream(auth_path + 'creds.json'), `${user_jid}.json`);
               
                const string_session = mega_url.replace('https://mega.nz/file/', '')

                const md = "SUHAS-MD=" + string_session;
			
               const sid = config.BOT_NAME + string_session
    
               const dt = await XeonBotInc.sendMessage(user_jid, {

                    text: sid

                });


let eco = '*`'
let oce = '`*'
let oc = '>'

 let desc = `*🎉Sᴜʜᴀꜱ Mᴅ V9 Sᴇꜱꜱɪᴏɴ Iᴅ Iꜱ Cᴏɴɴᴇᴄᴛᴇᴅ Sᴜᴄᴄᴜꜱꜱꜰᴜʟʟʏ.✨*

*👋Hey...! I'm Suhas Pathsindu.(Suhas Bro). Follow Us & Shere Channel.🫶*

_*~💡 This bot is created to download and find various things quickly, logo, photo edit and many other features. This bot is created using Baileys.~*_

*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*

*🏮ꜱᴜʙꜱᴄʀɪʙᴇ ᴜꜱ* ➟https://youtube.com/@suhasbro

*💡ꜰᴏʟʟᴏᴡ ᴜꜱ* ➟https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o

*✨ᴡᴇʙ ꜱɪᴛᴇ* ➠ https://suhas-web-new.vercel.app/

*🎉ᴛᴇʟᴇɢʀᴀᴍ* ➠https://t.me/suhasbro

*🎊ʀᴇᴘᴏ* ➠https://github.com/suhasbro24/SUHAS-MD-V8

*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*


*_🗣️Sʜᴇʀᴇ Oᴜʀ YᴏᴜTᴜʙᴇ Cʜᴀɴɴᴇʟ Lɪɴᴋ & WʜᴀᴛꜱAᴘᴘ Cʜᴀɴɴᴇʟ Lɪɴᴋ Wɪᴛʜ Yᴏᴜʀ Fʀɪᴇɴᴅꜱ...💙_*

> *✨ Powered By SUHAS-MD-V9 💞*`; 

XeonBotInc.sendMessage(user_jid, {

text: desc,
contextInfo: {
externalAdReply: {
title: "✨ 𝚂𝚄𝙷𝙰𝚂-𝙼𝙳-𝚅9 💗",
body: `SUHAS-MD-V9 | WhatsApp Bot`,
thumbnailUrl: "https://telegra.ph/file/e069027c2178e2c7475c9.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},	
{quoted:dt})		
await delay(300);
await XeonBotInc.ws.close()				
		}catch(e){
	

exec('pm2 restart all')

		}
			
			
	await delay(100);
	
        return await removeFile('./session');
        process.exit(0)
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
               
		await delay(10000);
                    XeonPair();
                }
            });
        } catch (err) {
	     exec('pm2 restart all')
            console.log("service restated");
	XeonPair();
            
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await XeonPair()
});

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
	XeonPair();
exec('pm2 restart all')
})



setTimeout(() => {
  console.log('Restarting every 10 minutes is Successful ✅');
XeonPair();
    exec('pm2 restart all', (err, stdout, stderr) => {
        if (err) {
            console.error('Error restarting server:', stderr);
        } else {
            console.log('Server restarted successfully ✅');
        }
    });
}, 600000); 





module.exports = router
