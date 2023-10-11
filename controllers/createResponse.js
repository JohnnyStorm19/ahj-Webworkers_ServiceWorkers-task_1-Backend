export function createResponse(recentNews) {
    return {
        status: "ok",
        timestamp: Date.now(),
        recentNews: recentNews,
    }
}
