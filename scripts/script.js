/*
 
 (c) VNexsus 2021-2022

 Licensed under the GNU GPL v2
 Terms of license: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
 
 */
(function(window, undefined){

	

	window.Asc.plugin.init = function(text)
	{
		
	};

	window.Asc.plugin.button = function(id)
	{
  		if(id==0){
			var image = window.minder.exportData('png');
		}
		else
			this.executeCommand("close", "");
	};

	window.Asc.plugin.onExternalMouseUp = function()
    {
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("mouseup", true, true, window, 1, 0, 0, 0, 0,
            false, false, false, false, 0, null);

        document.dispatchEvent(evt);
    };

})(window, undefined);
