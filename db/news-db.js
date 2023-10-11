import { v4 } from 'uuid';

const recentNews = {
    data: [
        {
          img: "img",
          body: "News text" ,
          received: 1553108200,
          isSent: false,
        },
        {
          img: "img",
          body: "News text" ,
          received: 1753108200,
          isSent: false,
        },
    ],
    hasRecentNews: true,

    add(news) {
        this.recentNews = true;
        
        news.id = v4();
        news.isSent = false;
        this.data.push(news);
    }
}

export default recentNews;