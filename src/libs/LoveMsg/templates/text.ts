/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

 import dayjs, { weekToday } from '../../../utils/dayjs'

 export const textTemplate = (data: TextTemplateProps) => {
   const { caiHongpi, sayLove, songLyrics, oneMagazines, netEaseCloud, oneWord, dayEnglish } = data
 
   let n_date = new Date();
 let l_str: string[] = '2021/7/14'.split("/"); 　　　　　　　　　　//过去的时间
 let n_str: string[] = n_date.toLocaleDateString().split("/");　//当前的时间-- 格式：2020/12/31　　
 let oDate1 = new Date(((l_str[1] + '-' + l_str[2] + '-' + l_str[0]).replace(/-/g, "/")));
 let oDate2 = new Date(((n_str[1] + '-' + n_str[2] + '-' + n_str[0]).replace(/-/g, "/")));
 let iDays = Math.floor(Math.abs(oDate1.getTime() - oDate2.getTime()) / 1000 / 60 / 60 / 24);
 
 
   let text = `早安呀，我亲爱的臭傻狗~今天是我们相识相爱的${iDays}天\n`
 
   // 工作日/休息日，需要排除节假日
   const week = weekToday()
   if (!['星期六', '星期日'].includes(week)) {
     text += `
 如果我臭傻狗已经起床啦！爸爸向你说早安呦~，记得吃早饭呀😆\n
 嗯哼哼~今天可是${week}哦，上班别迟到了哦~`
   }
   else {
     text += `
 如果我臭傻狗还没起床呀！爸爸就等着傻狗起床给我说早安呦🤣
 嗯哼~，既然今天是${week}，就让你再睡会懒觉~下次可不能啦~😝\n`
   }
 
   // 添加笑话
   if (caiHongpi) {
     //     text += `
     // 彩虹屁：
     text += `
 ${caiHongpi.content}\n`
   }
 
   if (sayLove) {
     text += `
 ${sayLove.content}\n`
   }
 
   // 诗句
   if (songLyrics) {
     text += `
 『${songLyrics.source}』${songLyrics.content}\n`
   }
 
   if (oneMagazines) {
     text += `
 『ONE杂志』${oneMagazines.word}\n`
   }
 
   if (netEaseCloud) {
     text += `
 『网易云音乐热评』${netEaseCloud.content}——${netEaseCloud.source}\n`
   }
 
   // 添加一句一言
   if (oneWord) {
     text += `
 『一言』${oneWord.hitokoto}\n`
   }
 
   // 每日英语
   if (dayEnglish) {
     text += `
 『每日英语（${dayjs(dayEnglish.date).format('ll')}』${dayEnglish.content}`
   }
 
   return {
     msgtype: 'text',
     text: {
       content: text,
     },
   }
 }
 