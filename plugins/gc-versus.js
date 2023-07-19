let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `*⺀𝐑𝐄𝐕𝐈𝐕𝐀𝐍 𝐏𝐋𝐀𝐍𝐓𝐀𝐒, 𝐓𝐄𝐍𝐄𝐌𝐎𝐒 𝐕𝐄𝐑𝐒𝐔𝐒🌱⺀*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣🌱 @${mem.id.split('@')[0]}\n`}
teks += `└𝐁𝐨𝐧𝐧𝐢𝐞𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['versus <mesaje>','Etique2 <mesaje>']
handler.tags = ['group']
handler.command = /^(versus|Etique2)$/i
handler.admin = true
handler.group = true
export default handler