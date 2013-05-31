tt_content.mailform.20.layout {
	// Tweak Form to Bootstrap Layout

    elementWrap (
	    <div class="control-group">
	      <element />
	    </div>
    )
    form (
    	<form class="form-horizontal">
			<containerWrap />
		</form>
	)
    containerWrap (
		<div>
			<elements />
		</div>
    )
	label (
		<label class="control-label">
			<labelvalue />
			<mandatory />
			<error />
		</label>
	)

	textline (
		<label />
	    <div class="controls">
	    	<input />
	    </div>
	)
	password < .textline
	fileupload < .textline
	textarea (
		<label />
	    <div class="controls">
	     	<textarea />
	    </div>
	)
	select (
		<label />
	    <div class="controls">
	      	<select>
				<elements />
			</select>
	    </div>
	)
	radio (
		<label />
		<input />
	)
}