export default  function setTime(now,send) {
	var now = new Date(now)
	var year = now.getFullYear(); //取得4位数的年份
	var month = addzoer(now.getMonth() + 1); //取得日期中的月份，其中0表示1月，11表示12月
	var date = addzoer(now.getDate()); //返回日期月份中的天数（1到31）
	var hour = addzoer(now.getHours()); //返回日期中的小时数（0到23）
	var minute = addzoer(now.getMinutes()); //返回日期中的分钟数（0到59）
	var second = addzoer(now.getSeconds()); //返回日期中的秒数（0到59）
	// 传入send说明需要秒。可根据项目情况改变
	console.log(send,'semd')
	if(send){
		return year + "-" + month + "-" + date + " " + hour + ":" + minute+ ":" + second;
	}else{
		return year + "-" + month + "-" + date + " " + hour + ":" + minute
	}

	//定义函数判断时间小于十前面加0
	function addzoer(timE) {
		if (timE < 10) {
			return '0' + timE
		} else {
			return timE
		}
	}
}