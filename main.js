toast("检测是否开启无障碍模式")
auto.waitFor()

var appName = "手机淘宝";
launchApp(appName);
toast("打开淘宝")
sleep(3000);
//寻找领喵币按钮，存在则执行任务，否则退出脚本
var lingmiaobi = indexInParent(5).depth(18).text("").findOnce();
if (lingmiaobi) {
    lingmiaobi.click();
    sleep(1000);
    execTask();
}
else {
    toast("未检查到领喵币按钮")
}
appName = "手机天猫";
launchApp(appName);
toast("打开天猫")
sleep(3000);
//寻找合伙人按钮，存在则执行任务，否则退出脚本
var d11hhr = indexInParent(5).depth(19).text("").findOnce();
if (d11hhr) {
    d11hhr.click();
    sleep(1000);
    execTask();
}
else {
    toast("未检查到合伙人按钮")
}
function execTask() {
    while(true) {
        var target =  text("去进店").findOnce() || text("去浏览").findOnce();
        if (target == null) {
            toast("任务完成");
            break;
        }
        target.click();
        sleep(3000);
        //浏览网页30s
        viewWeb(30);
        back();
        sleep(1000);
    }
}
function viewWeb(time) {
    gesture(500, [300, 1800], [300, 300]);
    sleep(2000)
    gesture(500, [300, 1800], [300, 300]);
    var cnt = 1;
    while(true) {
        var finish = desc("任务完成").exists() || textStartsWith("已获得").exists();
        if (finish || cnt > time) {
            break;
        }
        sleep(1000);
        cnt += 1;
    }
}

