;
(function(factory) {
		factory(window, document, window.jQuery);
	}(function(win, doc, $) {
			var minRating = function(container, title = "服务态度", number = 5) {
				var selected = 0;
				var boo = true;
				var ratingUse = function(index, points, clickColor) {
					$(container + ">span:gt(" + index + ")").css({
						"color": "#000"
					}).html("&#xe806;");
					$(container + ">span:lt(" + (points + 1) + ")").css({
						"color": clickColor
					}).html("&#xe807;");
					return $(container + " label:last-child").text((points + 1) + "分");
				}
				$("<label/>").text(title).css({
					"margin-right": "10px",
					"color": "#666"
				}).appendTo($(container));
				for(var i = 0; i < number; i++) {
					$("<span/>").addClass("demo-icon").data("number", i).html("&#xe806;")
						.click(function() {
							selected = $(this).data("number");
							boo = false;
							ratingUse(selected, selected, "red").css("color", "red");
						}).mouseenter(function() {
							var temporary = $(this).data("number");
							ratingUse(selected, temporary, "#e48080");
						}).mouseleave(
							function() {
								//考虑
								ratingUse(selected, selected, "red");
								if(boo) {
									$(container + ">span:lt(1)").css({
										"color": "#000"
									}).html("&#xe806;");
									$(container + " label:last-child").text("0分");
								}
							}
						).css({
							"border-left": "2px solid transparent",
							"border-right": "2px solid transparent",
							"cursor": "pointer"
						})
						.appendTo($(container));
				}
				$("<label/>").text("0分").css({
					"margin-left": "10px",
					"color": "#666"
				}).appendTo($(container));
				return $(container);
			};

			$.extend({
				minRating: minRating
			});