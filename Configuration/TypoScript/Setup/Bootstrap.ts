page = PAGE
page {
	headerData {
		10 = HTML
		10.value (
			<link rel="shortcut icon" href="{$config.template_path}/Resources/Public/img/favicon.ico" />
			<link rel="apple-touch-icon" href="{$config.template_path}/Resources/Public/img/apple-touch-icon.png">
			<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    		<!--[if lt IE 9]>
    		  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    		<![endif]-->
		)
	}

	includeCSS {
		bootstrap = {$config.template_path}/Resources/Public/Styles/Main.less
		bootstrap.outputdir = {$config.template_path}/Resources/Public/Styles/
	}

	includeJS{
		jquery = {$config.template_path}/Resources/Public/Components/jquery/jquery.js
		main = {$config.template_path}/Resources/Public/Scripts/Main.min.js
	}
}

# General site config
config {
	# Development
	## Disable Cache
	config.no_cache = 1

	# html5? Yes, please!
	doctype = html5

	# XML? No, thank you!
	xmlprologue = none

	# Taking out the trash, aka. cleaning up the code

	# Tries to clean up the output. Tries...
	# xhtml_cleaning = all

	# If set, the stdWrap property “prefixComment” will be disabled, thus preventing any revealing and space-consuming comments in the HTML source code.
	disablePrefixComment = 1

	# If set, the inline styles TYPO3 controls in the core are written to a file
	inlineStyle2TempFile = 1

	# All javascript (includes and inline) will be moved to the bottom of the html document
	moveJsFromHeaderToFooter = 1

	# If set, the default JavaScript in the header will be removed (blurLink function and browser detection variables)
	removeDefaultJS = 1

	# If set inline or externalized (see removeDefaultJS above) JavaScript will be minified.
	# Minification will remove all excess space and cause faster page loading.
	minifyJS = 1

	# Add L and print values to all links in TYPO3.
	linkVars = L, print

	# Charset, should always be utf-8
	renderCharset = utf-8

	# Search. This should be disabled if you are not using Indexed search!

	# For pages
	index_enable = {$config.index_enable}

	# For documents
	index_externals = {$config.index_externals}

	# Multidomain setup

	# If set, then every “typolink” is checked whether it's linking to a page within the current rootline of the site.
	typolinkCheckRootline = 1

	# This option enables to create links across domains using current domain's linking scheme.
	typolinkEnableLinksAcrossDomains = 1

	# Spam protection
	spamProtectEmailAddresses = ascii

	# Enable RealURL
	tx_realurl_enable = 1

	# The <base> tag in the header of the document which is used by RealURL
	baseURL = {$config.baseURL}
}

# Customize the Page title
config.noPageTitle = 1
page = PAGE
page {
	headerData {
		11 = TEXT
		11 {
			field = title
			noTrimWrap = |<title> | - {$config.title}</title>|
	  	}
	}
}



// Add an id with the page-uid to the body tag
page.bodyTag >
page.bodyTagCObject = TEXT
page.bodyTagCObject.field = uid
page.bodyTagCObject.wrap = <body id="page-|">



// Set some useful classes on the html tag to identify crappy ie versions
config.htmlTag_setParams = class="no-js"
[browser = < msie7]
config.htmlTag_setParams = class="no-js ie6 oldie"
[global]
[browser = msie7]
config.htmlTag_setParams = class="no-js ie7 oldie"
[global]
[browser = msie8]
config.htmlTag_setParams = class="no-js ie8 oldie"
[global]
[browser = msie9]
config.htmlTag_setParams = class="no-js ie9 oldie"
[global]
[browser = msie10]
config.htmlTag_setParams = class="no-js ie10 oldie"
[global]