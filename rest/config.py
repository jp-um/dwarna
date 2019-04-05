from biobank.handlers.handler import PostgreSQLRouteHandler
from biobank.handlers.consent_handler import ConsentHandler
from biobank.handlers.biobanker_handler import BiobankerHandler
from biobank.handlers.participant_handler import ParticipantHandler
from biobank.handlers.researcher_handler import ResearcherHandler
from biobank.handlers.study_handler import StudyHandler
from biobank.handlers.blockchain.api.hyperledger import HyperledgerAPI

from connection.db_connection import PostgreSQLConnection

token_expiry = 120
"""
:var token_expiry: How long (in seconds) access tokens should live before being retired.
:vartype token_expiry: int
"""

database = "biobank"
"""
:var database: The database used by default.
:vartype database: str
"""

oauth_database = "biobank_oauth"
"""
:var database: The OAuth database used by default.
:vartype database: str
"""

generic_handler_class = PostgreSQLRouteHandler
"""
:var generic_handler_class: The handler that receives route parameters and services generic requests.
:vartype generic_handler_class: :class:`biobank.handler.RouteHandler`
"""

biobanker_handler_class = BiobankerHandler
"""
:var biobanker_handler_class: The handler that receives route parameters and services biobanker-related requests.
:vartype biobanker_handler_class: :class:`biobank.handler.RouteHandler`
"""

participant_handler_class = ParticipantHandler
"""
:var participant_handler_class: The handler that receives route parameters and services participant-related requests.
:vartype participant_handler_class: :class:`biobank.handler.RouteHandler`
"""

researcher_handler_class = ResearcherHandler
"""
:var researcher_handler_class: The handler that receives route parameters and services researcher-related requests.
:vartype researcher_handler_class: :class:`biobank.handler.RouteHandler`
"""

study_handler_class = StudyHandler
"""
:var study_handler_class: The handler that receives route parameters and services study-related requests.
:vartype study_handler_class: :class:`biobank.handler.RouteHandler`
"""

consent_handler_class = ConsentHandler
"""
:var consent_handler_class: The handler that receives route parameters and services dynamic consent-related requests.
:vartype consent_handler_class: :class:`biobank.handler.RouteHandler`
"""

blockchain_handler_class = HyperledgerAPI
"""
:var blockchain_handler_class: The handler that receives route parameters and services requests related to blockchain-specific functions.
:vartype blockchain_handler_class: :class:`biobank.blockchain.api.BlockchainAPI`
"""

handler_connector = PostgreSQLConnection
"""
:var handler_connector: The connector used by the handler to connect to the data storage solution.
:vartype handler_connector: :class:`connection.connection.Connection`
"""

handler_classes = [ generic_handler_class,
	biobanker_handler_class, participant_handler_class, researcher_handler_class,
	study_handler_class, consent_handler_class ]
"""
:var handler_classes: The list of handler classes that are in use.
:vartype handler_classes: list
"""

"""
Basic routes.
"""
routes = {
	"/ping": {
		"handler": generic_handler_class,
		"function": generic_handler_class.ping,
		"scopes": [],
		"parameters": [],
		"method": ["GET", "POST"]
	},
}
"""
:var routes: A list of routes that are accepted by the REST API.
	Associated with each one is the handler function, a list of scopes and the required parameters.
	Scopes need not be unique. For example, different ways of removing participants may share the same scope.
:vartype routes: dict
"""

"""
Routes related to biobanker management.
"""
routes.update({
	"/create_biobanker": {
		"handler": biobanker_handler_class,
		"function": biobanker_handler_class.create_biobanker,
		"scopes": ["create_biobanker"],
		"parameters": ["username"],
		"method": ["POST"]
	},
	"/get_biobankers": {
		"handler": biobanker_handler_class,
		"function": biobanker_handler_class.get_biobankers,
		"scopes": ["view_biobanker"],
		"parameters": [],
		"method": ["GET"]
	},
	"/remove_biobanker_by_username": {
		"handler": biobanker_handler_class,
		"function": biobanker_handler_class.remove_biobanker_by_username,
		"scopes": ["remove_biobanker"],
		"parameters": ["username"],
		"method": ["POST"]
	},
})

"""
Routes related to participant management.
"""
routes.update({
	"/create_participant": {
		"handler": participant_handler_class,
		"function": participant_handler_class.create_participant,
		"scopes": ["create_participant"],
		"parameters": ["username"],
		"method": ["POST"]
	},
	"/remove_participant_by_username": {
		"handler": participant_handler_class,
		"function": participant_handler_class.remove_participant_by_username,
		"scopes": ["remove_participant"],
		"parameters": ["username"],
		"method": ["POST"]
	},
	"/get_participants": {
		"handler": participant_handler_class,
		"function": participant_handler_class.get_participants,
		"scopes": ["view_participant"],
		"parameters": [],
		"method": ["GET"]
	},
})

"""
Routes related to researcher management.
"""
routes.update({
	"/create_researcher": {
		"handler": researcher_handler_class,
		"function": researcher_handler_class.create_researcher,
		"scopes": ["create_researcher"],
		"parameters": ["username"],
		"method": ["POST"]
	},
	"/get_researchers": {
		"handler": researcher_handler_class,
		"function": researcher_handler_class.get_researchers,
		"scopes": ["view_researcher"],
		"parameters": [],
		"method": ["GET"]
	},
	"/remove_researcher_by_username": {
		"handler": researcher_handler_class,
		"function": researcher_handler_class.remove_researcher_by_username,
		"scopes": ["remove_researcher"],
		"parameters": ["username"],
		"method": ["POST"]
	},
})

"""
Routes related to study management.
"""
routes.update({
	"/create_study": {
		"handler": study_handler_class,
		"function": study_handler_class.create_study,
		"scopes": ["create_study"],
		"parameters": ["study_id", "name", "description", "homepage"],
		"method": ["POST"]
	},
	"/update_study": {
		"handler": study_handler_class,
		"function": study_handler_class.update_study,
		"scopes": ["update_study"],
		"parameters": ["study_id", "name", "description", "homepage"],
		"method": ["POST"]
	},
	"/remove_study": {
		"handler": study_handler_class,
		"function": study_handler_class.remove_study,
		"scopes": ["remove_study"],
		"parameters": ["study_id"],
		"method": ["POST"]
	},
	"/get_studies": {
		"handler": study_handler_class,
		"function": study_handler_class.get_studies,
		"scopes": ["view_study"],
		"parameters": [],
		"method": ["GET"]
	},
	"/get_active_studies": {
		"handler": study_handler_class,
		"function": study_handler_class.get_active_studies,
		"scopes": ["view_study"],
		"parameters": [],
		"method": ["GET"]
	},
	"/get_studies_by_researcher": {
		"handler": study_handler_class,
		"function": study_handler_class.get_studies_by_researcher,
		"scopes": ["view_study"],
		"parameters": ["researcher"],
		"method": ["GET"]
	},
	"/get_study_by_id": {
		"handler": study_handler_class,
		"function": study_handler_class.get_study_by_id,
		"scopes": ["view_study"],
		"parameters": ["study_id"],
		"method": ["GET"]
	},
})

"""
Routes related to consent management.
"""
routes.update({
	"/get_participants_by_study": {
		"handler": consent_handler_class,
		"function": consent_handler_class.get_participants_by_study,
		"scopes": ["view_consent"],
		"parameters": ["study_id"],
		"method": ["GET"]
	},
	"/get_studies_by_participant": {
		"handler": consent_handler_class,
		"function": consent_handler_class.get_studies_by_participant,
		"scopes": ["view_consent"],
		"parameters": ["username"],
		"method": ["GET"]
	},
	"/give_consent": {
		"handler": consent_handler_class,
		"function": consent_handler_class.give_consent,
		"scopes": ["update_consent"],
		"parameters": ["study_id", "username"],
		"method": ["POST"],
		"self_only": True
	},
	"/withdraw_consent": {
		"handler": consent_handler_class,
		"function": consent_handler_class.withdraw_consent,
		"scopes": ["update_consent"],
		"parameters": ["study_id", "username"],
		"method": ["POST"],
		"self_only": True
	},
	"/has_consent": {
		"handler": consent_handler_class,
		"function": consent_handler_class.has_consent,
		"scopes": ["view_consent"],
		"parameters": ["study_id", "username"],
		"method": ["GET"],
		"self_only": True
	},
	"/get_consent_trail": {
		"handler": consent_handler_class,
		"function": consent_handler_class.get_consent_trail,
		"scopes": ["view_consent"],
		"parameters": ["username"],
		"method": ["GET"],
		"self_only": True
	},
	"/get_attributes": {
		"handler": consent_handler_class,
		"function": consent_handler_class.get_attributes,
		"scopes": ["view_consent"],
		"parameters": ["username", "attributes"],
		"method": ["POST"],
		"self_only": True
	},
})

"""
Routes related to the underlying blockchain implementation.
"""
routes.update({
	"/has_card": {
		"handler": blockchain_handler_class,
		"function": blockchain_handler_class.has_card,
		"scopes": ["change_card"],
		"parameters": ["username", "temp"],
		"method": ["GET"]
	},
	"/get_card": {
		"handler": blockchain_handler_class,
		"function": blockchain_handler_class.get_card,
		"scopes": ["change_card"],
		"parameters": ["username", "temp"],
		"method": ["GET"]
	},
	"/save_cred_card": {
		"handler": blockchain_handler_class,
		"function": blockchain_handler_class.save_cred_card,
		"scopes": ["change_card"],
		"parameters": ["username", "card"],
		"method": ["POST"]
	},
})

"""
Build the list of possible scopes from the routes.
"""

default_scope = "none"
"""
:var default_scope: The default scope of access tokens.
	It should permit no data access whatsoever, except to functions that require no scopes.
:vartype default_scope: str
"""

scopes = [ scope for route in routes.values() for scope in route["scopes"] ]
scopes.append(default_scope)
scopes = list(set(scopes))
"""
:var scopes: All the possible scopes given by the authoization server.
:vartype scopes: list
"""

blockchain_host = "http://localhost"
"""
:var blockchain_host: The URL where the Hyperledger Composer REST API is hosted.
:vartype blockchain_host: str
"""

blockchain_admin_port = 3001
"""
:var blockchain_admin_port: The port where the Hyperledger Composer REST API listens to admin requests.
:vartype blockchain_admin_port: int
"""

blockchain_multiuser_port = 3000
"""
:var blockchain_multiuser_port: The port where the Hyperledger Composer REST API listens to multi-user requests.
:vartype blockchain_multiuser_port: int
"""