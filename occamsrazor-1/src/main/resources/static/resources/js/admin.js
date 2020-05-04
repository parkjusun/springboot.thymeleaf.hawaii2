"use strict"

var admin = admin || {}

admin = (() => {
	let init = () => {
		onCreate()
	}
	let onCreate = () => {
		setContentView()
		$.getJSON('/users', d => {
			$.each(d, (i, j) => {
				$(`<tr>
                        	<td>
                                <span>1</span>
                            </td>
                            <td>
                                <span>1</span>
                            </td>
                             <td>
                                <span>1</span>
                            </td>
                           <td>
                                <span>1</span>
                            </td>
                            <td>
                                <span>1</span>
                            </td>
                            <td>
                                <span>1</span>
                            </td>
                            <td>
                                <span>1</span>
                            </td>
                        </tr>`).appendTo('#userData')
			})
		})
	}
	let setContentView = () => {
		$('#userData tr').first().css({'background-color':'yellow'})
	}
	return {init}
	
})()