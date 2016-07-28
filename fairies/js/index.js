    $(function(){
		$('.btn-1-1').click(function(){
			$('.part-2').show();
			$('.pic-2-bg').show();
		});
		
		$('.shen >.btn-2').click(function(){
			$('.part-2').hide();
			$('.part-1').hide();
			$('.part-3').show();
		});

		$('.shen .btn-2-1').click(function(){
			$('.icar').hide();
			$('.icar-1').show();
		})
		
		$('.shen .btn-2-2').click(function(){
			$('.icar').hide();
			$('.icar-2').show();
		})
		$('.shen .btn-2-3').click(function(){
			$('.icar').hide();
			$('.icar-3').show();
		})

		$('.shen .btn-2-4').click(function(){
			$('.icar').hide();
			$('.icar-4').show();
		})

		$('.shen .btn-2-5').click(function(){
			$('.icar').hide();
			$('.icar-5').show();
		})

		$('.shen .btn-2-6').click(function(){
			$('.icar').hide();
			$('.icar-6').show();
		})

		$('.shen .btn-2-7').click(function(){
			$('.icar').hide();
			$('.icar-7').show();
		})

		$('.shen .btn-2-8').click(function(){
			$('.icar').hide();
			$('.icar-8').show();
		})
	
		$('.btn-3-0').click(function(){
			$('.part-2').show();
			$('.part-1').show();
			$('.part-3').hide();
		})
		
		$('.part-3 .btn-3.fr').click(function(){
			$('.part-3').hide();
			$('.part-4').show();
			$('.part-4 .icar').hide();
		})
		$('.part-3 .btn-3-1').click(function(){
			$('.part-4 .icar-1').show();
		})
		$('.part-3 .btn-3-2').click(function(){
			$('.part-4 .icar-2').show();
		})
		$('.part-3 .btn-3-3').click(function(){
			$('.part-4 .icar-3').show();
		})
		$('.part-3 .btn-3-4').click(function(){
			$('.part-4 .icar-4').show();
		})
		$('.part-3 .btn-3-5').click(function(){
			$('.part-4 .icar-5').show();
		})
		$('.part-3 .btn-3-6').click(function(){
			$('.part-4 .icar-6').show();
		})
		$('.part-3 .btn-3-7').click(function(){
			$('.part-4 .icar-7').show();
		})
		$('.part-3 .btn-3-8').click(function(){
			$('.part-4 .icar-8').show();
		})
		
		$('.btn-3-2').click(function(){
			$('.part-2').hide();
			$('.part-1').hide();
			$('.part-3').hide();
			$('.part-4').show();
		})
		
		
		
		//get 页面js

		$(".input .v_tel").focus(function(){
			var txt_value = $(this).val();
			if(txt_value == this.defaultValue){
				$(this).val("");
			}
		}).blur(function(){
			var txt_value = $(this).val();
			if(!txt_value){
				$(this).val(this.defaultValue);
			}
		}).keydown(function(){
			var txt_value = $(this).val();
		});
		
		$('.btn-go').click(function(){
			$('.mask').show();
			$('.alert-result').show();
		});
		$('.btn-share').click(function(){
			$('.mask').show();
			$('.alert-share').show();
		});

		$('.alert-share').click(function(){
			$('.mask').hide();
			$('.alert-share').hide();
		})
		$('.btn-close').click(function(){
			$('.mask').hide();
			$('.alert-result').hide();
		})
    })
    
    
    
    
    
    
    
    
    
