<?php

/**
 * The file that handles email form submissions.
 * The functions in this class are used to help process consent form submissions.
 * They also handle data retrieval.
 *
 * @link       https://github.com/nmamo
 * @since      1.0.0
 *
 * @package    Biobank
 * @subpackage Biobank/client/forms
 */

namespace client\form;

require_once(plugin_dir_path(__FILE__) . "form_handler.php");

/**
 * The form handler class used to manage study inputs from forms.
 *
 * This class validates and sanitizes inputs from various forms.
 *
 * @since      1.0.0
 * @package    Biobank
 * @subpackage Biobank/client
 * @author     Nicholas Mamo <nicholas.mamo@um.edu.mt>
 */
class EmailFormHandler extends FormHandler {

	/**
	 * Create a new email.
	 *
	 * @since	1.0.0
	 * @access	public
	 */
	public function create_email() {
		$error = "";
		$endpoint = "email"; // the REST API's endpoint

		if(isset($_POST["email_nonce"]) && wp_verify_nonce($_POST["email_nonce"], "email_form")) {
			/*
			 * For security purposes, ensure that the user can indeed send emails
			 */
			if (current_user_can("biobank_send_email") && isset($_POST["biobank"])) {
				$input = $_POST["biobank"];

				/*
				 * Perform validation
				 */
				$valid_subject = $this->validate_required_string($input["subject"], "The subject cannot be empty");
				$valid_body = $this->validate_required_string($input["body"], "The body cannot be empty");

				/*
				 * Ensure that everything checks out
				 */
				$validation_check = $this->validate(array(
					$valid_subject,
					$valid_body,
				));

				if (! $validation_check->is_successful()) {
					$error = (string) $validation_check;
				} else {
					/*
					 * Create a request and fetch the response
					 */
					$request = new \client\Request($this->scheme, $this->host, $this->port);
					$request->add_parameter("subject", $input["subject"]);
					$request->add_parameter("body", $input["body"]);
					$request->add_parameter("recipient_group", $input["recipient-group"]);
					$request->add_parameter("recipients", $input["recipient"]);
					$response = $request->send_post_request($endpoint);

					if (! is_wp_error($response)) {
						$body = json_decode($response["body"]);
						$error = isset($body->error) ? $body->error : "";
					} else {
						/*
						 * If no response is received, then a connection with the backend could not be established
						 */
						$error = "WordPress could not reach the backend";
					}
				}
			}
		}
		$error = urlencode($error);
		wp_redirect(admin_url("admin.php") . "?page=biobank_emails&error=$error&redirect=create");
		exit;
	}

	/**
	 * Search for emails.
	 *
	 * Look for emails in the backend.
	 * Any errors are also stored in the returned array.
	 *
	 * @since	1.0.0
	 * @access	public
	 * @param	int		$number The number of search results to fetch.
	 * @param	int		$page The page number from where to resume the search.
	 * @param	string	$search The search string to use.
	 * @return	array 	The array containing the parsed response.
	 */
	public function search_emails($number, $page, $search) {
		$endpoint = "email";

		$request = new \client\Request($this->scheme, $this->host, $this->port);
		$request->add_parameter("number", $number);
		$request->add_parameter("page", $page);
		$request->add_parameter("search", $search);

		$response = $request->send_get_request($endpoint);
		if (! is_wp_error($response)) {
			$body = json_decode($response["body"]);
			$body->error = isset($body->error) ? $body->error : "";
			return $body;
		} else {
			$body = new \stdClass();
			$body->data = array();
			$body->error = "WordPress could not reach the backend";
			return $body;
		}
	}

}
