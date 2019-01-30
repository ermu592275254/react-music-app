var observer = (function() {
    let list = [],$on,$emit;
    $on = function(key, fn) {
        if (!list[key]) list[key] = [];
        list[key].push(fn);
    };
    $emit = function() {
        let key = Array.prototype.shift.call(arguments);
        if (!list[key] || list[key].length === 0)return false;
        for (let i in list[key]) {
            list[key][i].apply(this,arguments);
        }
    };
    return {
        list,
        $on,
        $emit
    }
})();


export default observer;