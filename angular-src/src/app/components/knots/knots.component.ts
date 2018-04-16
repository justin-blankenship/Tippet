import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
	selector: 'app-knots',
	templateUrl: './knots.component.html',
	styleUrls: ['./knots.component.css']
})
export class KnotsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		var urlParams = [];
		window.location.search.replace("?", "").split("&").forEach(function (e, i) {
			var p = e.split("=");
			urlParams[p[0]] = p[1];
		});
		if(urlParams["loaded"]) {}else{

			let win = (window as any);
			win.location.search = '?loaded=1';
		}
	}

}

$(function() {
	$(".video").click(function () {
		var theModal = $(this).data("target"),
		videoSRC = $(this).attr("data-video"),
		videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1";
		$(theModal + ' iframe').attr('src', videoSRCauto);
		$(theModal + ' button.close').click(function () {
			$(theModal + ' iframe').attr('src', videoSRC);
		});
	});
});
