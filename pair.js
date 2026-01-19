const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: France_King,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function BLACK KILLER-XMD() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_France_King = France_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                browser: Browsers.macOS('Chrome')
             });
             if(!Pair_Code_By_France_King.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_France_King.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_France_King.ev.on('creds.update', saveCreds)
            Pair_Code_By_France_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(50000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(8000);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id, { text: ''+ b64data });

               let 𝔹𝕃𝔸ℂ𝕂 𝕂𝕀𝕃𝕃𝔼ℝ-𝕏𝕄𝔻 = `




⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷
🚀  𝗕𝗢𝗧 𝗖𝗢𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬🚀
⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸

╔════════════════▣
┊✺┌── ❐ 🛰️ 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 ❐ ──⊷
╠✤│👉 https://whatsapp.com/channel/0029VbAhAOJISTkRkIw3Sy1D
┊✺└────••••────⊷
╚════════════════▣

╔════════════════▣
┊✺┌── ❐ ⚡ 𝐆𝐑𝐎𝐔𝐏 ❐ ──⊷
╠✤│👉 https://chat.whatsapp.com/GgvYBezrmKLKJTllr7dD76
┊✺└────••••────⊷
╚════════════════▣

╔════════════════▣
┊✺┌── ❐ 💀 𝐑𝐄𝐏𝐎 ❐ ──⊷
╠✤│👉 https://github.com/mrblackkillersy-cmd/---
┊✺└────••••────⊷
╚════════════════▣

⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷
✨ 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗠𝗥 𝗕𝗟𝗔𝗖𝗞 𝗞𝗜𝗟𝗟𝗘𝗥✓ ✨
⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸
`
 await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id,{text:BLACK_KILLER_XMD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_France_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    BLACK KILLER-XMD ();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await BLACK KILLER-XMD ()
});
module.exports = router
