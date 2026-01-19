const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: France_King,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function BLACK_KILLER_XMD_() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_France_King = France_King({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_France_King.ev.on('creds.update', saveCreds)
			Qr_Code_By_France_King.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_France_King.sendMessage(Qr_Code_By_France_King.user.id, { text: '' + b64data });
	  
			 let BLACK_KILLER_XMD_TEXT= `
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
⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸⫸`
	 await Qr_Code_By_France_King.sendMessage(Qr_Code_By_France_King.user.id,{text: BLACK_KILLER_XMD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_France_King.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					BLACK KILLER-XMD();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await BLACK KILLER-XMD ()
});
module.exports = router
