(function(){
	"use strict";
	'use strict';
	
	addReportProblemLinks("Report a Problem", "https://su-support-cloud.atlassian.net/servicedesk/customer/portal/5/group/14/create/47");
	
	function addReportProblemLinks(linkText, url){
		app.controller('FullViewServiceContainerAfterController', [function ($) {
			this.permalink = url;
		}]);
		
		app.component('prmFullViewServiceContainerAfter', {
			bindings: { parentCtrl: '<' },
			controller: 'FullViewServiceContainerAfterController',
			template: '<a class="layout-align-left-left layout-column su-report-a-problem-link" href="{{ $ctrl.permalink }}" target="_blank">' + linkText + '</a>'
		});
	}
	
})();