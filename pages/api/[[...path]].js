export default (req, res) => {
    res.statusCode = 200;
    const response = {
        cookies: req.cookies,
        method: req.method,
        query: req.query,
        body: req.body,
        headers: req.headers,
        httpVersion: req.httpVersion,
        url: req.url,
        globalAgent: req.globalAgent,
    };
    res.json(response);
};
