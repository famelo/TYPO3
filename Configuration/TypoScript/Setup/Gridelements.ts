tt_content.gridelements_pi1.20.10.setup {
	// 2-Columns
	1 < tt_content.gridelements_pi1.20.10.setup.default
	1 {
        wrap = <div class="row-fluid">|</div>
        columns {
			1 < .default
			1.wrap = <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">|</div>
			2 < .default
			2.wrap = <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">|</div>
		}
    }

	// 3-Columns
	2 < tt_content.gridelements_pi1.20.10.setup.default
	2 {
        wrap = <div class="row-fluid">|</div>
        columns {
			1 < .default
			1.wrap = <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">|</div>
			2 < .default
			2.wrap = <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">|</div>
			3 < .default
			3.wrap = <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">|</div>
		}
    }
}