import abc from './date-format.js';
const dateHandle={
	months:['01','02','03','04','05','06','07','08','09','10','11','12'],
	forMatNum:function(num){
		return num<10?'0'+num:num+'';
	},
	initDays:function(year,month){
		let totalDays=new Date(year,month,0).getDate();
		let dates=[];
		for(let d=1;d<=totalDays;d++){
			dates.push(this.forMatNum(d));
		};
		return dates;
	},
	initPicker:function(start,end,mode="date",step) {
		let initstartDate=new Date(start);
		let endDate=new Date(end);
		let startYear=initstartDate.getFullYear();
		let startMonth=initstartDate.getMonth();
		let endYear=endDate.getFullYear();
		let years=[],months=[],days=[],hours=[],minutes=[],seconds=[];
		let totalDays=new Date(startYear,startMonth,0).getDate();
		for(let s=startYear;s<=endYear;s++){
			years.push(s+'');
		};
		for(let m=1;m<=12;m++){
			months.push(this.forMatNum(m));
		};
		for(let d=1;d<=totalDays;d++){
			days.push(this.forMatNum(d));
		}
		for(let h=0;h<24;h++){
			hours.push(this.forMatNum(h));
		}
		for(let m=0;m<60;m+=step*1){
			minutes.push(this.forMatNum(m));
		}
		for(let s=0;s<60;s++){
			seconds.push(this.forMatNum(s));
		}
		switch(mode){
			case "date":
				return {years,months,days}
				break;
			case "yearMonth":
				return {years,months}
				break;
			case "dateTime":
				return {years,months,days,hours,minutes,seconds}
				break;
			case "time":
				return {hours,minutes,seconds}
				break;			
		}
	},
	lunarMonths:function(year){
		var e,n,
		u={
			keys: [],
			values: []
		}
		for (e = -1 * abc.leapMonth(year), n = 1; 12 >= n; n++) u.keys.push(n),
		        u.values.push(abc.toChinaMonth(n)),
		    n == -1 * e && (u.keys.push(e), u.values.push("闰" + abc.toChinaMonth(n)));
			return u.values;
	},
	lunarDays:function(year,month){
		var e,o,r,
		c={
			keys: [],
			values: []
		}
		for (o = abc.monthDays(year, month), r = 1; o >= r; r++) c.keys.push(r),
		        c.values.push(abc.toChinaDay(r));
				return c.values;
	},
	month2num:function(str){
		let bool = true;
		for(let i=0;i<abc.nStr3.length;i++){
			if((str.length==3)&&(str.substring(1,2)==abc.nStr3[i])){
				bool=false;
				return this.forMatNum(i+1);
			}else if((str.length==2)&&(str.substring(0,1)==abc.nStr3[i])){
				bool=false;
				return this.forMatNum(i+1);
			}
		}
		if(bool){
			return str;
		}
	},
	day2num:function(str){
		let arr=this.lunarDays('1960','01');
		let bool = true;
		for(let i=0;i<arr.length;i++){
			if(str==arr[i]){
				bool=false
				return this.forMatNum(i+1);
			}
		}
		if(bool){
			return str
		}
	}
	
}



	
	
	
	
export default dateHandle;