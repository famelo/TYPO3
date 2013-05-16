plugin.tx_fed {
	fce.main {
		templateRootPath = {$config.template_path}/Resources/Private/Elements/
		partialRootPath = {$config.template_path}/Resources/Private/Partials/
		layoutRootPath = {$config.template_path}/Resources/Private/Layouts/
	}
}

plugin.tx_fluidpages {
	collections.template {
		templateRootPath = {$config.template_path}/Resources/Private/
		partialRootPath = {$config.template_path}/Resources/Private/Partials/
		layoutRootPath = {$config.template_path}/Resources/Private/Layouts/
	}
}