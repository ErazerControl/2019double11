toast("检测是否开启无障碍模式")
auto.waitFor()
launch("com.taobao.taobao");
sleep(3000);
//1.点击领喵币按钮，进入任务列表
var lmbBtn = className("Button").text("赚喵币").findOnce();
lmbBtn.click();
sleep(1500);
//2.页面存在“去浏览”按钮，则点击按钮完成任务
let viewBtn;
while (viewBtn = text("去浏览").findOnce()||text("去搜索").findOnce()) {
  viewBtn.click();
  sleep(5000);
  doTask();
  sleep(3000);
}

function doTask() {
  //会出现["任务完成","全部完成啦"]
  let waiting = 20;
  while (waiting--) {
    sleep(1000);
    if (textContains("完成").exists() || descContains("完成").exists()) {
      break;
    }
  }
  back();
}
toast("脚本结束")