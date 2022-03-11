/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

 import dayjs, { weekToday } from '../../../utils/dayjs'

 export const textTemplate = (data: TextTemplateProps) => {
   const { caiHongpi, sayLove, songLyrics, oneMagazines, netEaseCloud, oneWord, dayEnglish } = data
 
//    let n_date = new Date();
//  let l_str: string[] = '2021/7/14'.split("/"); 　　　　　　　　　　//过去的时间
//  let n_str: string[] = n_date.toLocaleDateString().split("/");　//当前的时间-- 格式：2020/12/31　　
//  let oDate1 = new Date(((l_str[1] + '-' + l_str[2] + '-' + l_str[0]).replace(/-/g, "/")));
//  let oDate2 = new Date(((n_str[1] + '-' + n_str[2] + '-' + n_str[0]).replace(/-/g, "/")));
//  let iDays = Math.floor(Math.abs(oDate1.getTime() - oDate2.getTime()) / 1000 / 60 / 60 / 24);
 
 
   let text = `早安呀，亲爱的傻狗ლ(°◕‵ƹ′◕ლ)~\n`
 
   // 工作日/休息日，需要排除节假日
   const week = weekToday()
     text += `
     今天${week}哦~，我的小懒猪是不是还没起床呀，欠我的早安别忘咯~，起来之后记得喝水吃早饭哦😆\n记得带生姜出门哦！！！`
 
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
 