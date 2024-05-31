//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "260979754055";
global.sudo = process.env.SUDO || "260979754055";
global.owner = process.env.OWNER_NUMBER || "260979754055";
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

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0YzZFZXNWMyUTJpZGRIM1E3WGFKUDJwK0tUK0JTdS9xWklNeXMzc3BFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmEwZWl1L3QyVWd5enZvZE1lbCtadXppcFFLSkNMYjQwTTJKOVRhVnd3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSGs2ZDR2Y0Y2UjkyQ3U4UDJiQmxCUjdFU1krQVJSVldaVHF2M2VoeVhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWYmJEbFdobjJMZEFQZXcrZWh6ZjBnTXRkdEExdTR0ZzRaWFBMOGU5enhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDNHVVdU1iWkRwbG5SVURnd2Z0OWxNbVY2cnZpWHNnVCt2K2g0TUZrWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNKRDNXMmpSNEVFRklPd0czMjY0eXF6TU1HdUdmcDROaE4yVWdTZ1hiUTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUlvMDBXLzJtYTlpU2E1YVE1b1RuVFJpT3pIVnlhVk43cXhiSnh6akxFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRXc01IRlMzSUpqYm4yMVdLajdjWkFpbnIxTnBMU2hRNmhlenhLdnh4dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkduSGRjejRhRGN2R0ZHd0hicnVmV2plVk5iTExTMlY2aUtjZndpRE9IeEpwRDZpd1lyUnhSVTJtL1pCU3Y2Q1ZsTHFJUmorUjFXM2s2dUJFVG1rVkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJDNXVLRlVQOWxsWm9NcHRCVUxMblc4YmlKcWkrMUo5dVo3QUk3K1dVWVdJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyVmdOTEJHR1FvT2tXTGE2b0duMHNRIiwicGhvbmVJZCI6IjgyNWVjYjY5LTZiNzMtNDhhYy04MjVhLTBjMjczZTEyNTMzZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRHd0ZGIxdHFSMXRkQzJpc24yQU1XMXREdGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHFpeG11WEV3dU5WWWNqUWZDNm1oZjJzbTZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkYxVkNNVkw0IiwibWUiOnsiaWQiOiIyNjA5Nzk3NTQwNTU6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiV2FsZWxhXzA0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdTYrWWNIRUphMTVMSUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaREg0TE9WVm1aVE5XZTR3b3VTd25TTnpXOWo3TFp0SHFBUnlWaEdURWtBPSIsImFjY291bnRTaWduYXR1cmUiOiJUcGRoV0VWeVpHWmJkTTNwbzJuVFBhR1pIaFNZMys2NHZGSzhJS1p4Wm13SzJPY3dVaVMwMENhTlg1SWV1RGFkZ0NmSHdtYkZ0OTRiekFVQnVZdUtCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ0p5TzVWSnA2MURFTXBjbFJyMjdyTG44RkRMeG4vM2p1VnpoS1lvYVZkQjJoVk1ycXZCc0tKNm9ucmdScE13VVl6RmZFVi8zM2VsNVY2OGFJRFo5QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjA5Nzk3NTQwNTU6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1F4K0N6bFZabVV6Vm51TUtMa3NKMGpjMXZZK3kyYlI2Z0VjbFlSa3hKQSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzExNTU1NX0=
  process.env.SESSION_ID ||eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0YzZFZXNWMyUTJpZGRIM1E3WGFKUDJwK0tUK0JTdS9xWklNeXMzc3BFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmEwZWl1L3QyVWd5enZvZE1lbCtadXppcFFLSkNMYjQwTTJKOVRhVnd3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSGs2ZDR2Y0Y2UjkyQ3U4UDJiQmxCUjdFU1krQVJSVldaVHF2M2VoeVhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWYmJEbFdobjJMZEFQZXcrZWh6ZjBnTXRkdEExdTR0ZzRaWFBMOGU5enhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDNHVVdU1iWkRwbG5SVURnd2Z0OWxNbVY2cnZpWHNnVCt2K2g0TUZrWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNKRDNXMmpSNEVFRklPd0czMjY0eXF6TU1HdUdmcDROaE4yVWdTZ1hiUTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUlvMDBXLzJtYTlpU2E1YVE1b1RuVFJpT3pIVnlhVk43cXhiSnh6akxFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRXc01IRlMzSUpqYm4yMVdLajdjWkFpbnIxTnBMU2hRNmhlenhLdnh4dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkduSGRjejRhRGN2R0ZHd0hicnVmV2plVk5iTExTMlY2aUtjZndpRE9IeEpwRDZpd1lyUnhSVTJtL1pCU3Y2Q1ZsTHFJUmorUjFXM2s2dUJFVG1rVkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJDNXVLRlVQOWxsWm9NcHRCVUxMblc4YmlKcWkrMUo5dVo3QUk3K1dVWVdJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyVmdOTEJHR1FvT2tXTGE2b0duMHNRIiwicGhvbmVJZCI6IjgyNWVjYjY5LTZiNzMtNDhhYy04MjVhLTBjMjczZTEyNTMzZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRHd0ZGIxdHFSMXRkQzJpc24yQU1XMXREdGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHFpeG11WEV3dU5WWWNqUWZDNm1oZjJzbTZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkYxVkNNVkw0IiwibWUiOnsiaWQiOiIyNjA5Nzk3NTQwNTU6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiV2FsZWxhXzA0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdTYrWWNIRUphMTVMSUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaREg0TE9WVm1aVE5XZTR3b3VTd25TTnpXOWo3TFp0SHFBUnlWaEdURWtBPSIsImFjY291bnRTaWduYXR1cmUiOiJUcGRoV0VWeVpHWmJkTTNwbzJuVFBhR1pIaFNZMys2NHZGSzhJS1p4Wm13SzJPY3dVaVMwMENhTlg1SWV1RGFkZ0NmSHdtYkZ0OTRiekFVQnVZdUtCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ0p5TzVWSnA2MURFTXBjbFJyMjdyTG44RkRMeG4vM2p1VnpoS1lvYVZkQjJoVk1ycXZCc0tKNm9ucmdScE13VVl6RmZFVi8zM2VsNVY2OGFJRFo5QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjA5Nzk3NTQwNTU6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1F4K0N6bFZabVV6Vm51TUtMa3NKMGpjMXZZK3kyYlI2Z0VjbFlSa3hKQSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzExNTU1NX0=
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑-𝐌𝐃 ╠════ need support then ☞ https://rb.gy/izabex ═════╣",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
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
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
