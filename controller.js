const core = {};

core.greetPing = (req, res) => res.json({
    status: 'OK',
    data: 'PONG'
});


// const timedoutFunction = 
const timer50ms = ms => new Promise(res => setTimeout(res, 50))


core.greetRiskEngine = async (req, res) => {
    await timer50ms()
        .then(() => Promise.all([timer50ms, timer50ms, timer50ms, timer50ms, timer50ms, timer50ms, timer50ms]))
        .then(timer50ms)
        .catch(console.log);

    return res.json({
        status: 'OK',
        data: 'DONE'
    });
};


module.exports = core;