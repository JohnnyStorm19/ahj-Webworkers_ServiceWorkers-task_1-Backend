import { Router } from 'express';
import recentNews from '../../db/news-db.js'
import { getRecentNews } from '../../controllers/getRecentNews.js';

const recentNewsRouter = new Router();

recentNewsRouter.get('/recent-news', async (req, res) => {
    const response = getRecentNews(recentNews);
    res.json(response);
    console.log(response);
})


export default recentNewsRouter;