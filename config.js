//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/04e09c20e70de180ee319.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255673750170";
global.owner = process.env.OWNER_NUMBER || "255673750170";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pCRlRORkE4aGFQK2NydEJUNUdCNVB6UXBTdk92NWhBdkYxMlhsaUgxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEVmWW9FSENqbnI0ZnVJMDhzMzczS1RscmFJazQ4M3JUUExjUDI4UWpXWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQm9sWDBxT1FJajZITUE4OHhibW1vdFNhd0ozYm93SlpDcHh1Y1Bhb2xVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1MzRNQW9vS2RMck1admtrSUdjbTYxNmZLOU1qa1ZwVDBkeDl1dWtLVVJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGSlZYTmRON1R2dWhPSnY0VkF6OS8xcFdkM1ptbHR3bEVVRlFXeWJpMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpYdktCYVdqTHZkdmxEcGx4d1dYdTZ0QkFNT0E3MXV0Vlhaa2FUN2I0U1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVlbDFQbzBpNkllWitlWWsvYm9ibjZvb1Z1SjRaanQwK1hvNUlxNzVsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ZqZ2dDSmdCUkZQWG1mTk9CSVRwWWhHUCtZeWZNaDN6R3RjZlhDS2pGdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMrZVZnNWVLZjB1UjF6UzRGNCs0RlprVnFQUzAwaER0WGFTTXZXOEduV2lzWWQ2MER5TXo5bFpxbjlheG1JZ3lxRmp6cW9WUk9KTHRXODhwRnhtK0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6ImdqVGdXOVdNQzZuZXJnTmx5ZnJ2ai9JaTRqUHZtZ2sxZG1hb3d3V3pTWW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IllVRDN4NElfUXFLUmNXZjExU1h2MlEiLCJwaG9uZUlkIjoiMGM0MDU4YWUtZWNjZS00YjZjLWEyNmQtMjU5NmE3YWUzY2QwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkvYVdYUU14SUFHQW9JWDlwVnlhVkNSMG9kbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIQ2JqNEZOSndKTXZIYjlUOEJPODFFQVB3cUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDMxTlJMTlgiLCJtZSI6eyJpZCI6IjkyMzA3ODQ4MDY2Mjo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCSgY3Nn82fzZ7NniAgwrvwk4apQcy9zZNyzL3Nk1PMvc2TbMy9zZNhzL3Nk07Mvc2T8JOGqvCdm57wnZ6W8J2el/CdnpzCu1xuICAgICDiiIbiiIbiiIZcbiAgICAgIOKIhuKIhlxuICAgICAgIOKIhlxuICAgICDwk4ap8J2ZlPCdmZbwnZmN8JOGqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUhmKytrRkVKYnV5Yk1HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSFZ0Wit3WFZIcUhxWDRyclhSS2d1NlY3ZlUxNFhmS0hrTVZyNVFDZmpIUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSXpheU9hMkpQWDJlU0JwSk5CMmVINTloVXBhRFMzclFEWExUaTFkQ08za1FJN2RsQ0M1V1ovR3JrNEdLbWN2WURaZ3N2a2dhSUxYQlZRQkl3Nmw0Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjhoS1ZMN3BrL0RFTFlpOGFQOWdFY0d6NVVzOGx5TzNYRkVXRXdTUkdaZWhNckNTY2dRUXBHUzVQL2xIdmlBQndRdGVLM2VpeW5BMUVnWnpyckhuTUN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDc4NDgwNjYyOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUjFiV2ZzRjFSNmg2bCtLNjEwU29MdWxlMzFOZUYzeWg1REZhK1VBbjR4MCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxODc3NzYzNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHc2wifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
