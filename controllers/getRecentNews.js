import { createResponse } from "./createResponse.js";

export function getRecentNews(recentNews) {
    let recentNewsForSent = [];
    
    if (!recentNews.hasRecentNews) {
        return { success: false };
    }
    // получаем новые новости и сразу же меняем статус, что они прочитаны
    recentNews.data.forEach(news => {
        if (!news.isSent) {
            recentNewsForSent.push(news);
            recentNews.isSent = true;
        }
    })

    const recentNewsResponse = createResponse(recentNewsForSent); // создаем объект, который вернем на клиент
    // !recentNews.hasRecentNews = false; // устанавливаем флаг, что теперь нет новых новостей

    return { success: true, recentNews: recentNewsResponse }; // отвечаем на клиент
}