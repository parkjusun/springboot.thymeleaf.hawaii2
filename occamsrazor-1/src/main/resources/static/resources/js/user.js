"use strict"
var user = user || {}
user = (()=>{
	let init = () => {
		alert('1')
		onCreate()
	}
	let onCreate = () =>{
		setContentView()
		$('#register_a').click(e=>{
	     	$('#content').empty()
	     	$('#content').html(
	     	`<table id="kcdc">
                <tr>
            <td id="content" colspan="4">
                <table id="admin" style="width: 80%; height:80%; margin: 0 auto">
			    <tr style="width: 80%;height: 50px;">
			      <td rowspan="4">
			        <img src="https://u5b8t9w6.stackpathcdn.com/wp-content/uploads/2014/12/profile-default-300x242.jpg">
			      </td>
			      <td style="height: 20%">
			        <label>이름</label>
			      </td>
			      <td>
			        <input id="name" type="text" />
			      </td>
			    </tr>  
			    <tr style="height: 20%">
			      <td >
			        <label>직급</label>
			      </td>
			      <td>
			        <input id="position" type="text" />
			      </td>
			    </tr>
			    <tr style="height: 20%">
			      <td>
			        <label>이메일</label>
			      </td>
			      <td>
			        <input id="email" type="text" />
			      </td>
			    </tr>
			    <tr style="height: 20%">
			      <td>
			        <label>전화번호</label>
			      </td>
			      <td>
			        <input id="phoneNumber" type="text" />
			      </td>
			    </tr>
			    <tr style="height: 20%">
			      <td colspan="3" id="button_box">
			        
			        
			      </td>
			    </tr>
			  </table>
            </td>
        </tr>
    </table>
	     	`)
	     	
	     	$(`<input type="button" value="등록하기 2" style="width: 200px; height: 100px;font-size: 30px;"/>`)
	     	
	     	.appendTo('#button_box')
	     	.click(e => {
	     		alert('등록버튼 클릭')
	     	})
	     	$(`<input id="admin_cancel" type="button" value="취소하기" style="width: 200px; height: 100px;margin-left: 50px;font-size: 30px;"/>`)
	     	.appendTo('#button_box')
	     	.click( e=>{
	     		alert('취소버튼 클릭')
	     	})
	     	
	     })
	     $('#access_a').click(e=>{
	    	 e.preventDefault()
		     location.href = "/admin"
	     })
		
	}
	let setContentView = () =>{
		$('#kcdc').css({ width: '80%', height: '900px' }).addClass('border_black center')
	     $('#tr_1').css({ width: '80%', height: '50px' }).addClass('border_black center')
	     $('#menu').css({ width: '80%', height: '50px' }).addClass('border_black center')
	     $('#kcdc td').addClass('border_black', 'width_full')
	}
	return {init}
	
})()
