			
			
			
			//添加
			function setcookie(key,value,days){
			var date = new Date();
			date.setDate(date.getDate()+days);
			document.cookie = key+"="+value+"; expires="+date;
			}
			//查询
			function getcookie(key){
				var cookies = document.cookie.split("; ");
				for(var i=0; i<cookies.length; i++){
					var cook = cookies[i].split("=");
					if(cook[0]==key){
						return cook[1];
					}
				}
				return null;
			}
			
			//删除
			function removecookie(key){
				setcookie(key,"",-1);
			}
			
			
			//清空
			function clearcookie(){
				var cookies = document.cookie.split("; ");
				for(var i=0; i<cookies.length; i++){
					var cook = cookies[i].split("=");
					removecookie(cook[0]);
				}
			}
			
			
