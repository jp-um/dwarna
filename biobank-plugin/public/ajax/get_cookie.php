<?php

require_once("/var/www/html/wordpress/wp-load.php");
include(plugin_dir_path(__FILE__) . "../../includes/globals.php");

if (isset($_GET["redirect"])) {
	$redirect = $_GET["redirect"];
	$cookie = $_COOKIE[$blockchain_access_token];
	header("Location: $redirect?$blockchain_access_token=$cookie");
}

?>