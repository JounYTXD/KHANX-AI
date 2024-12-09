const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭━━━〔 *KHANX-AI* 〕━━━┈⊷
┃★╭──────────────
┃★│ Owner : *Jᴀᴡᴀᴅ TᴇᴄʜX*
┃★│ Baileys : *Multi Device*
┃★│ Type : *NodeJs*
┃★│ Platform : *Heroku*
┃★│ Prefix : *[ Multi Prefix ]*
┃★│ Version : *1.0.0 Bᴇᴛᴀ*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━❮ UPDATE ❯━
┃◆ Use .Menu2 Because Updating Menu
╰━━━━━━━━━━━━⪼
Follow The Channel For More ✅
https://whatsapp.com/channel/0029VatOy2EAzNc2WcShQw1j
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX`

await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/hzagwo.jpg`},caption:dec},{quoted:mek});
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
