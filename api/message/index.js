module.exports = async function (context, req) {
    await sleep(20000);
    context.res.json({
        text: "Hello from the Amazing API!!!!"
    });
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
