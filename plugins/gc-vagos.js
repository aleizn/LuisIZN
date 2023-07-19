let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝐀𝐍𝐎𝐓𝐄𝐍𝐒𝐄 𝐍𝐎 𝐒𝐄𝐀𝐍 𝐕𝐀𝐆𝐎𝐒:* ${pesan}`
let teks = `*⺀𝐃𝐄𝐒𝐏𝐈𝐄𝐑𝐓𝐄𝐍 𝐅𝐋𝐎𝐉𝐎𝐒⺀*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣😈 @${mem.id.split('@')[0]}\n`}
teks += `└𝐁𝐨𝐧𝐧𝐢𝐞𝐁𝐨𝐭 
└𝐦𝐯𝐩_𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝟐𝟎`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['vagos <mesaje>','Eti3 <mesaje>']
handler.tags = ['group']
handler.command = /^(vagos|Eti3)$/i
handler.admin = true
handler.group = true
export default handler