"auto"
var appName = "手机淘宝";
launchApp(appName);
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

function checkTask() {
    for (i = 0; i < 3; ++i) {
        var target =  text("去进店").findOnce() || text("去浏览").findOnce();
        if(target != null){
            return target;
        }
        toast("下滑查找任务");
        scrollDown(0);
        sleep(2500);
    }
}

function execTask() {
    while(true) {
        var target =  checkTask();
        if (target == null) {
            toast("任务完成");
            break;
        }
        target.click();
        sleep(3000);
        //浏览网页20s
        viewWeb(20);
        back();
        sleep(1000);
    }
}
function viewWeb(time) {
    gesture(1000, [300, 600], [300, 300]);
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
