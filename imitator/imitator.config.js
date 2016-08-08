module.exports = function(imitator) {
    // 返回一个json
    imitator('/json', {name: 'hello world'});
}