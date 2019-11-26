<?php

require_once(plugin_dir_path(__FILE__) . "../ui/fields.php");

$error = isset($defaults->error) && ! empty($defaults->error) ? $defaults->error : $error;
$refresh = (isset($_GET["return"]) && $_GET["return"] == "update_consent");

?>
<div class='biobank-consent container'>

	<form id='study-form' method="post" name="consent_form"
		  action=<?php echo esc_url(admin_url("admin-post.php")); ?>>
		<input type="hidden" name="action" value="study_form">
		<?php wp_nonce_field("consent_form", "consent_nonce"); ?>
		<input id='<?= $this->plugin_name ?>-study'
			   name='<?= $this->plugin_name ?>[study][study_id]'
			   type='hidden' value=''>
	</form>

	<ul>
	<?php foreach ($active_studies->data as $study) {?>
		<li><a href='#' onclick='getCard(this, "<?= $study->study->study_id ?>"); return false;'><?= $study->study->name ?></a></li>
	<?php } ?>
	</ul>
</div>