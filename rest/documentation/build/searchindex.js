Search.setIndex({docnames:["biobank","coauth","connection","index","server"],envversion:53,filenames:["biobank.rst","coauth.rst","connection.rst","index.rst","server.rst"],objects:{"":{biobank:[0,0,0,"-"],coauth:[1,0,0,"-"],config:[4,0,0,"-"],connection:[2,0,0,"-"],main:[4,0,0,"-"],server:[4,0,0,"-"]},"biobank.handlers":{consent_handler:[0,0,0,"-"],exceptions:[0,0,0,"-"],handler:[0,0,0,"-"],participant_handler:[0,0,0,"-"],researcher_handler:[0,0,0,"-"],study_handler:[0,0,0,"-"]},"biobank.handlers.consent_handler":{ConsentHandler:[0,1,1,""]},"biobank.handlers.consent_handler.ConsentHandler":{_set_attribute_value:[0,2,1,""],_set_consent:[0,2,1,""],get_attributes:[0,2,1,""],get_consent_trail:[0,2,1,""],get_participants_by_study:[0,2,1,""],get_studies_by_participant:[0,2,1,""],give_consent:[0,2,1,""],has_consent:[0,2,1,""],withdraw_consent:[0,2,1,""]},"biobank.handlers.exceptions":{general_exceptions:[0,0,0,"-"],study_exceptions:[0,0,0,"-"],user_exceptions:[0,0,0,"-"]},"biobank.handlers.exceptions.general_exceptions":{InputException:[0,3,1,""]},"biobank.handlers.exceptions.study_exceptions":{AttributeDoesNotExistException:[0,3,1,""],AttributeExistsException:[0,3,1,""],AttributeNotLinkedException:[0,3,1,""],InvalidStudyDurationException:[0,3,1,""],MissingAttributesException:[0,3,1,""],StudyDoesNotExistException:[0,3,1,""],StudyExistsException:[0,3,1,""],StudyExpiredException:[0,3,1,""]},"biobank.handlers.exceptions.user_exceptions":{BiobankerDoesNotExistException:[0,3,1,""],BiobankerExistsException:[0,3,1,""],ParticipantDoesNotExistException:[0,3,1,""],ParticipantExistsException:[0,3,1,""],ResearcherDoesNotExistException:[0,3,1,""],ResearcherExistsException:[0,3,1,""],UserExistsException:[0,3,1,""]},"biobank.handlers.handler":{PostgreSQLRouteHandler:[0,1,1,""],RouteHandler:[0,1,1,""],UserHandler:[0,1,1,""]},"biobank.handlers.handler.PostgreSQLRouteHandler":{_attribute_exists:[0,2,1,""],_attribute_id_exists:[0,2,1,""],_biobanker_exists:[0,2,1,""],_create_attribute:[0,2,1,""],_get_attribute_id:[0,2,1,""],_get_study_attributes:[0,2,1,""],_get_study_researchers:[0,2,1,""],_is_study_active:[0,2,1,""],_participant_exists:[0,2,1,""],_researcher_exists:[0,2,1,""],_sanitize:[0,2,1,""],_sanitize_dict:[0,2,1,""],_sanitize_list:[0,2,1,""],_study_exists:[0,2,1,""],_user_exists:[0,2,1,""],escape_escaped:[0,2,1,""],ping:[0,2,1,""],to_binary:[0,2,1,""]},"biobank.handlers.handler.RouteHandler":{_404_page_not_found:[0,2,1,""],__init__:[0,2,1,""]},"biobank.handlers.participant_handler":{ParticipantHandler:[0,1,1,""]},"biobank.handlers.participant_handler.ParticipantHandler":{create_participant:[0,2,1,""],get_participants:[0,2,1,""],remove_participant_by_username:[0,2,1,""]},"biobank.handlers.researcher_handler":{ResearcherHandler:[0,1,1,""]},"biobank.handlers.researcher_handler.ResearcherHandler":{create_researcher:[0,2,1,""],get_researchers:[0,2,1,""],remove_researcher_by_username:[0,2,1,""]},"biobank.handlers.study_handler":{StudyHandler:[0,1,1,""]},"biobank.handlers.study_handler.StudyHandler":{_link_researchers:[0,2,1,""],_unlink_researchers:[0,2,1,""],create_study:[0,2,1,""],get_active_studies:[0,2,1,""],get_studies:[0,2,1,""],get_studies_by_researcher:[0,2,1,""],get_study_by_id:[0,2,1,""],remove_study:[0,2,1,""],update_study:[0,2,1,""]},"coauth.grants":{grants:[1,0,0,"-"]},"coauth.grants.grants":{CustomClientCredentialsGrant:[1,1,1,""],CustomClientCredentialsHandler:[1,1,1,""]},"coauth.grants.grants.CustomClientCredentialsGrant":{__call__:[1,2,1,""],__init__:[1,2,1,""]},"coauth.grants.grants.CustomClientCredentialsHandler":{__init__:[1,2,1,""],process:[1,2,1,""]},"coauth.oauth_request_handler":{OAuthRequestHandler:[1,1,1,""]},"coauth.oauth_request_handler.OAuthRequestHandler":{address_string:[1,2,1,""]},"coauth.token_store":{postgresql_token_store:[1,0,0,"-"]},"coauth.token_store.postgresql_token_store":{PostgresqlAccessTokenStore:[1,1,1,""],PostgresqlAuthCodeStore:[1,1,1,""],PostgresqlClientStore:[1,1,1,""]},"coauth.token_store.postgresql_token_store.PostgresqlAccessTokenStore":{__init__:[1,2,1,""],fetch_by_token:[1,2,1,""],save_token:[1,2,1,""]},"connection.connection":{Connection:[2,1,1,""]},"connection.db_connection":{PostgreSQLConnection:[2,1,1,""]},"connection.db_connection.PostgreSQLConnection":{__init__:[2,2,1,""],__weakref__:[2,4,1,""],close:[2,2,1,""],commit:[2,2,1,""],copy:[2,2,1,""],count:[2,2,1,""],cursor:[2,2,1,""],execute:[2,2,1,""],exists:[2,2,1,""],reconnect:[2,2,1,""],select:[2,2,1,""],select_one:[2,2,1,""]},"server.application":{OAuthApplication:[4,1,1,""]},"server.application.OAuthApplication":{__call__:[4,2,1,""],__init__:[4,2,1,""],authorization_server:[4,4,1,""]},"server.authorization_server":{AuthorizationServer:[4,1,1,""]},"server.exceptions":{request_exceptions:[4,0,0,"-"]},"server.exceptions.request_exceptions":{InsufficientScopeException:[4,3,1,""],InvalidTokenException:[4,3,1,""],MethodNotAllowedException:[4,3,1,""],MissingArgumentException:[4,3,1,""],UnauthorizedDataAccessException:[4,3,1,""]},"server.exceptions.request_exceptions.InsufficientScopeException":{__weakref__:[4,4,1,""]},"server.exceptions.request_exceptions.InvalidTokenException":{__weakref__:[4,4,1,""]},"server.exceptions.request_exceptions.MethodNotAllowedException":{__weakref__:[4,4,1,""]},"server.exceptions.request_exceptions.MissingArgumentException":{__weakref__:[4,4,1,""]},"server.exceptions.request_exceptions.UnauthorizedDataAccessException":{__weakref__:[4,4,1,""]},"server.resource_server":{ResourceServer:[4,1,1,""]},"server.resource_server.ResourceServer":{__init__:[4,2,1,""],_get_get_parameters:[4,2,1,""],_get_post_parameters:[4,2,1,""],_has_required_parameters:[4,2,1,""],_is_authorized:[4,2,1,""],_is_personal:[4,2,1,""],handle_request:[4,2,1,""]},coauth:{oauth_request_handler:[1,0,0,"-"]},config:{biobanker_handler_class:[4,4,1,""],blockchain_admin_base_url:[4,5,1,""],blockchain_handler_class:[4,4,1,""],blockchain_multiuser_base_url:[4,5,1,""],consent_handler_class:[4,4,1,""],database:[4,5,1,""],default_scope:[4,5,1,""],generic_handler_class:[4,4,1,""],handler_classes:[4,5,1,""],handler_connector:[4,4,1,""],oauth_database:[4,5,1,""],participant_handler_class:[4,4,1,""],researcher_handler_class:[4,4,1,""],routes:[4,5,1,""],scopes:[4,5,1,""],study_handler_class:[4,4,1,""],token_expiry:[4,5,1,""]},connection:{connection:[2,0,0,"-"],db_connection:[2,0,0,"-"]},main:{main:[4,6,1,""],start_auth_server:[4,6,1,""]},server:{application:[4,0,0,"-"],authorization_server:[4,0,0,"-"],resource_server:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","attribute","Python attribute"],"5":["py","data","Python data"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:attribute","5":"py:data","6":"py:function"},terms:{"0x7f0570fdca60":[],"0x7f0570fdcae8":[],"0x7f0570fdcb70":[],"0x7f0570fdcbf8":[],"0x7f0570fdcc80":[],"0x7f0570fdcd08":[],"0x7f0570fdcd90":[],"0x7f0570fdce18":[],"0x7f0570fdcea0":[],"0x7f16a30f7a60":[],"0x7f16a30f7ae8":[],"0x7f16a30f7b70":[],"0x7f16a30f7bf8":[],"0x7f16a30f7c80":[],"0x7f16a30f7d08":[],"0x7f16a30f7d90":[],"0x7f16a30f7e18":[],"0x7f16a30f7ea0":[],"0x7f19e769ba60":[],"0x7f19e769bae8":[],"0x7f19e769bb70":[],"0x7f19e769bbf8":[],"0x7f19e769bc80":[],"0x7f19e769bd08":[],"0x7f19e769bd90":[],"0x7f19e769be18":[],"0x7f19e769bea0":[],"0x7f2965d299d8":[],"0x7f2965d29a60":[],"0x7f2965d29ae8":[],"0x7f2965d29b70":[],"0x7f2965d29bf8":[],"0x7f2965d36d08":[],"0x7f2965dd10d0":[],"0x7f2965dd1158":[],"0x7f2965dd11e0":[],"0x7f2965dd1598":[],"0x7f2965dd1620":[],"0x7f2965dd16a8":[],"0x7f2965dd1d08":[],"0x7f2965dd1d90":[],"0x7f2965dd1e18":[],"0x7f2965dd1ea0":[],"0x7f2965dd1f28":[],"0x7f2965df8048":[],"0x7f327af32a60":[],"0x7f327af32ae8":[],"0x7f327af32b70":[],"0x7f327af32bf8":[],"0x7f327af32c80":[],"0x7f327af32d08":[],"0x7f327af32d90":[],"0x7f327af32e18":[],"0x7f327af32ea0":[],"0x7f4254518a60":[],"0x7f4254518ae8":[],"0x7f4254518b70":[],"0x7f4254518bf8":[],"0x7f4254518c80":[],"0x7f4254518d08":[],"0x7f4254518d90":[],"0x7f4254518e18":[],"0x7f4254518ea0":[],"0x7f529e3dfa60":[],"0x7f529e3dfae8":[],"0x7f529e3dfb70":[],"0x7f529e3dfbf8":[],"0x7f529e3dfc80":[],"0x7f529e3dfd08":[],"0x7f529e3dfd90":[],"0x7f529e3dfe18":[],"0x7f529e3dfea0":[],"0x7f5e40da8a60":[],"0x7f5e40da8ae8":[],"0x7f5e40da8b70":[],"0x7f5e40da8bf8":[],"0x7f5e40da8c80":[],"0x7f5e40da8d08":[],"0x7f5e40da8d90":[],"0x7f5e40da8e18":[],"0x7f5e40da8ea0":[],"0x7f68be893a60":[],"0x7f68be893ae8":[],"0x7f68be893b70":[],"0x7f68be893bf8":[],"0x7f68be893c80":[],"0x7f68be893d08":[],"0x7f68be893d90":[],"0x7f68be893e18":[],"0x7f68be893ea0":[],"0x7f691f4f8a60":[],"0x7f691f4f8ae8":[],"0x7f691f4f8b70":[],"0x7f691f4f8bf8":[],"0x7f691f4f8c80":[],"0x7f691f4f8d08":[],"0x7f691f4f8d90":[],"0x7f691f4f8e18":[],"0x7f691f4f8ea0":[],"0x7f69f4dd5a60":[],"0x7f69f4dd5ae8":[],"0x7f69f4dd5b70":[],"0x7f69f4dd5bf8":[],"0x7f69f4dd5c80":[],"0x7f69f4dd5d08":[],"0x7f69f4dd5d90":[],"0x7f69f4dd5e18":[],"0x7f69f4dd5ea0":[],"0x7f73a67c1a60":[],"0x7f73a67c1ae8":[],"0x7f73a67c1b70":[],"0x7f73a67c1bf8":[],"0x7f73a67c1c80":[],"0x7f73a67c1d08":[],"0x7f73a67c1d90":[],"0x7f73a67c1e18":[],"0x7f73a67c1ea0":[],"0x7f8358af62f0":[],"0x7f8358af6378":[],"0x7f8358af6400":[],"0x7f8358bb9400":[],"0x7f8358bb9488":[],"0x7f8358bb96a8":[],"0x7f8358bb9730":[],"0x7f8358bb97b8":[],"0x7f8358bb9840":[],"0x7f8358bb98c8":[],"0x7f83593749d8":[],"0x7f8359374a60":[],"0x7f8359374ae8":[],"0x7f8359487268":[],"0x7f835bfe8268":[],"0x7f835bfe82f0":[],"0x7f835bfe8400":[],"0x7f835c03b598":[],"0x7f835c04b048":[],"0x7f835c04b0d0":[],"0x7f835c07aea0":[],"0x7f835c07af28":[],"0x7f835c07d048":[],"0x7f835c07d0d0":[],"0x7f835c07d598":[],"0x7f835c07dea0":[],"0x7f835c087d08":[],"0x7f9943fc2a60":[],"0x7f9943fc2ae8":[],"0x7f9943fc2b70":[],"0x7f9943fc2bf8":[],"0x7f9943fc2c80":[],"0x7f9943fc2d08":[],"0x7f9943fc2d90":[],"0x7f9943fc2e18":[],"0x7f9943fc2ea0":[],"0x7fa2c729da60":[],"0x7fa2c729dae8":[],"0x7fa2c729db70":[],"0x7fa2c729dbf8":[],"0x7fa2c729dc80":[],"0x7fa2c729dd08":[],"0x7fa2c729dd90":[],"0x7fa2c729de18":[],"0x7fa2c729dea0":[],"0x7fb233a89a60":[],"0x7fb233a89ae8":[],"0x7fb233a89b70":[],"0x7fb233a89bf8":[],"0x7fb233a89c80":[],"0x7fb233a89d08":[],"0x7fb233a89d90":[],"0x7fb233a89e18":[],"0x7fb233a89ea0":[],"0x7fb7bac0da60":[],"0x7fb7bac0dae8":[],"0x7fb7bac0db70":[],"0x7fb7bac0dbf8":[],"0x7fb7bac0dc80":[],"0x7fb7bac0dd08":[],"0x7fb7bac0dd90":[],"0x7fb7bac0de18":[],"0x7fb7bac0dea0":[],"0x7fba06aa4d90":4,"0x7fba06e87048":4,"0x7fba06e870d0":4,"0x7fba06e87158":4,"0x7fba06e871e0":4,"0x7fba06e87b70":4,"0x7fba06e87bf8":4,"0x7fba06e87c80":4,"0x7fba0781c8c8":4,"0x7fba0781c950":4,"0x7fba0781cae8":4,"0x7fba0790dd08":4,"0x7fba0a482b70":4,"0x7fba0a482d08":4,"0x7fba0a4d5730":4,"0x7fba0a4d58c8":4,"0x7fba0a4d59d8":4,"0x7fba0a4e6378":4,"0x7fba0a4e6a60":4,"0x7fba0a4f5bf8":4,"0x7fba0a510ea0":4,"0x7fba0a510f28":4,"0x7fba0a5180d0":4,"0x7fba0a518f28":4,"0x7fba0a521840":4,"0x7fba0a521bf8":4,"0x7fba0a521d90":4,"0x7fca622eaa60":[],"0x7fca622eaae8":[],"0x7fca622eab70":[],"0x7fca622eabf8":[],"0x7fca622eac80":[],"0x7fca622ead08":[],"0x7fca622ead90":[],"0x7fca622eae18":[],"0x7fca622eaea0":[],"0x7fd11b5b0a60":[],"0x7fd11b5b0ae8":[],"0x7fd11b5b0b70":[],"0x7fd11b5b0bf8":[],"0x7fd11b5b0c80":[],"0x7fd11b5b0d08":[],"0x7fd11b5b0d90":[],"0x7fd11b5b0e18":[],"0x7fd11b5b0ea0":[],"0x7fd454312a60":[],"0x7fd454312ae8":[],"0x7fd454312b70":[],"0x7fd454312bf8":[],"0x7fd454312c80":[],"0x7fd454312d08":[],"0x7fd454312d90":[],"0x7fd454312e18":[],"0x7fd454312ea0":[],"0x7fe011aa9048":[],"0x7fe011aa90d0":[],"0x7fe011aa9158":[],"0x7fe011aa91e0":[],"0x7fe011aa9268":[],"0x7fe011aa9bf8":[],"0x7fe011aa9c80":[],"0x7fe011aa9d08":[],"0x7fe01212b620":[],"0x7fe01212b7b8":[],"0x7fe01212b840":[],"0x7fe012220bf8":[],"0x7fe014ddb268":[],"0x7fe014ddb7b8":[],"0x7fe014de7730":[],"0x7fe014e07c80":[],"0x7fe014e07d90":[],"0x7fe014e07e18":[],"0x7fe014e14ea0":[],"0x7fe014e14f28":[],"0x7fe014e2a048":[],"0x7fe014e2a0d0":[],"0x7fe014e2a158":[],"0x7fe014e2a488":[],"0x7fe014e2af28":[],"0x7fe014e33a60":[],"0x7fe014e33ea0":[],"0x7fe1852d2a60":[],"0x7fe1852d2ae8":[],"0x7fe1852d2b70":[],"0x7fe1852d2bf8":[],"0x7fe1852d2c80":[],"0x7fe1852d2d08":[],"0x7fe1852d2d90":[],"0x7fe1852d2e18":[],"0x7fe1852d2ea0":[],"0x7ffa7bf3da60":[],"0x7ffa7bf3dae8":[],"0x7ffa7bf3db70":[],"0x7ffa7bf3dbf8":[],"0x7ffa7bf3dc80":[],"0x7ffa7bf3dd08":[],"0x7ffa7bf3dd90":[],"0x7ffa7bf3de18":[],"0x7ffa7bf3dea0":[],"boolean":[0,2,4],"byte":0,"case":0,"class":[0,1,2,4],"default":[0,2,4],"function":[0,1,2,4],"import":4,"int":[0,1,2,4],"long":4,"new":[0,1,2,4],"return":[0,1,2,4],"short":0,"throw":2,"true":[0,1,4],"try":4,"var":[],For:[1,4],IDs:[0,1],Its:0,The:[0,1,2,4],Used:[],_404_page_not_found:0,__call__:[1,4],__init__:[0,1,2,4],__weakref__:[2,4],_attribute_exist:0,_attribute_id_exist:0,_biobanker_exist:0,_blockchain_connector:0,_connector:0,_create_attribut:0,_cursor_factori:2,_databas:2,_extract_paramet:[],_get_attribute_id:0,_get_get_paramet:4,_get_post_paramet:4,_get_study_attribut:0,_get_study_research:0,_has_required_paramet:4,_host:2,_is_author:4,_is_person:4,_is_study_act:0,_link_attribut:[],_link_research:0,_participant_exist:0,_password:2,_reconnect:[],_researcher_exist:0,_rout:4,_route_handl:4,_sanit:0,_sanitize_dict:0,_sanitize_list:0,_set_attribute_valu:0,_set_cons:0,_study_exist:0,_unlink_attribut:[],_unlink_research:0,_user_exist:0,_usernam:2,about:0,accept:[0,4],access:[0,1,4],access_token:[1,4],access_token_id:1,access_token_stor:[1,4],accesstoken:1,accesstokennotfound:1,accesstokenstor:[1,4],act:[0,2],activ:0,active_onli:0,add:[1,4],added:[0,1],addit:1,address_str:1,admin:4,after:0,against:4,aid:0,alia:4,all:[0,2,4],allow:[1,4],alongsid:1,alreadi:0,also:[2,4],alwai:0,ani:[0,2,4],anoth:[0,4],anyth:[0,2],api:[0,4],appli:0,applic:[1,2,3],arg:[0,1],argument:[0,4],aris:0,arrai:[0,2],ask:1,associ:[0,2,4],assum:[0,1],attempt:4,attribut:[0,1,4],attribute_id:0,attributedoesnotexistexcept:0,attributeexistsexcept:0,attributenotlinkedexcept:0,auth_code_stor:4,auth_token_stor:4,authent:[1,4],authoiz:4,author:1,authorization_serv:4,authorizationserv:4,authorize_uri:4,auto:1,awri:2,back:[1,2],backend:4,base:[0,1,2,4],basestr:[],batch:2,becaus:[0,1],becom:[],been:[0,4],befor:4,behalf:[1,2],behavior:1,being:[0,1,4],belong:[0,4],between:[0,1],binari:0,biobank:4,biobank_oauth:4,biobanker_handl:4,biobanker_handler_class:4,biobankerdoesnotexistexcept:0,biobankerexistsexcept:0,biobankerhandl:4,block:[],blockchain:[0,4],blockchain_admin_base_url:4,blockchain_admin_url:4,blockchain_connector:0,blockchain_handler_class:4,blockchain_multiuser_base_url:4,blockchainapi:0,bodi:[0,4],bool:[0,1,2,4],both:0,build:4,built:4,byte_str:0,call:[0,1,4],can:[0,2,4],cannot:[0,1],card:4,case_sensit:0,caught:2,caus:4,chang:[0,2],change_card:4,charact:0,check:[0,2,4],choic:[],classic:4,client:[1,4],client_address:1,client_authent:1,client_authentication_sourc:4,client_stor:4,clientauthent:1,clientstor:4,close:2,coauth:1,code:[0,1,4],com:4,command:2,commit:2,commun:0,compar:4,compon:4,compos:4,config:4,configur:3,connect:[0,1,3,4],connector:0,consent:[],consent_handl:[0,4],consent_handler_class:4,consenthandl:[0,4],consid:4,consol:1,constraint:0,construct:1,constructor:1,contain:[0,4],content:3,convert:0,copi:2,count:2,creat:[0,1,2,4],create_biobank:4,create_particip:[0,4],create_research:[0,4],create_studi:[0,4],credenti:[1,2],current:0,cursor:2,cursor_factori:2,custom:1,customclientcredentialsgr:1,customclientcredentialshandl:1,data:[0,1,3,4],databas:[0,1,4],datatyp:1,date:0,db_connect:[2,4],default_scop:4,defin:[2,4],deliv:4,descript:[0,4],detail:0,dict:[0,1,2,4],dictionari:[0,4],differ:[0,2,4],differenti:0,docstr:[],doe:[0,2],duplic:2,durat:0,dynam:[],each:[0,4],effect:0,element:0,empti:0,enabl:1,encapsul:0,encod:4,end:0,end_dat:[],endpoint:4,enough:4,ensur:[0,1],entri:1,env:4,env_var:4,environ:[0,1,4],erron:4,error:[0,1,4],escap:0,escape_escap:0,establish:[2,4],even:1,exampl:4,exce:[],except:[2,3],execut:[0,1,2],exist:[0,1,2],expect:4,expir:4,expires_in:1,expiri:[1,4],explicit:[],extra:2,extract:[0,4],factori:2,fail:[0,2],fals:0,fetch:[0,1,2],fetch_by_token:1,filter:0,finish:[],first:4,flag:[],flow:4,follow:0,form:[0,4],format:1,found:0,from:[0,1,2,4],frontend:1,full:4,furthermor:1,gener:[1,2,4],general_except:0,generic_handler_class:4,get:[0,2,4],get_active_studi:[0,4],get_attribut:[0,4],get_biobank:4,get_card:4,get_consent_trail:[0,4],get_particip:[0,4],get_participants_by_studi:[0,4],get_research:[0,4],get_studi:[0,4],get_studies_by_particip:[0,4],get_studies_by_research:[0,4],get_study_by_id:[0,4],give:[0,1,4],give_cons:[0,4],given:[0,1,2,4],got:4,grant:[3,4],handl:[0,1,4],handle_request:4,handler:[3,4],handler_class:4,handler_connector:4,happen:0,has:[0,2,4],has_card:4,has_cons:[0,4],have:0,header:4,his:0,homepag:[0,4],host:2,hostnam:2,how:[0,4],howev:0,http:4,hyperledg:4,hyperledgerapi:4,identifi:0,implement:[0,1],inact:0,includ:4,inclus:0,incom:4,incorpor:0,incorrect:4,increment:1,index:3,indic:[0,2,4],inform:[1,4],initi:1,input:0,inputexcept:0,insert:0,instal:1,instanc:[1,2],instead:[0,1],insuffici:4,insufficientscopeexcept:4,integ:[],interfac:2,invalid:[0,1,4],invalidstudydurationexcept:0,invalidtokenexcept:4,invok:4,involv:1,its:[0,1,4],itself:[1,2],job:0,just:2,kei:4,know:1,known:[0,4],kwarg:[0,1],languag:1,lastrowid:1,leg:4,lifespan:1,link:[0,4],list:[0,2,4],listen:4,listen_port:4,live:4,localhost:4,log:1,longer:0,look:0,made:[0,1],mai:[0,2,4],main:4,manag:3,match:0,member:[],memori:[0,4],messag:[0,1,4],message_bodi:[],method:4,methodnotallowedexcept:4,minim:[],mismatch:1,miss:4,missingargumentexcept:4,missingattributesexcept:0,mix:0,modifi:1,modul:3,more:[1,4],moreov:[1,4],mozilla:4,multi:4,must:[],mysql:1,name:[0,1,2,4],need:[0,4],neg:0,none:[0,1,4],notic:0,number:[0,1,2],oauth2:[0,1,4],oauth:[3,4],oauth_connect:4,oauth_databas:4,oauth_request_handl:1,oauthappl:4,oauthrequesthandl:1,object:[0,2,4],old:[],one:[1,2,4],ones:[0,1],onli:[0,1,2,4],oper:0,option:4,origin:[1,4],other:0,otherwis:4,out:1,output:0,over:0,overriden:1,own:4,owner:1,page:[0,3],pagin:0,param:[],paramet:[0,1,2,4],pars:4,particip:4,participant_handl:[0,4],participant_handler_class:4,participantdoesnotexistexcept:0,participantexistsexcept:0,participanthandl:[0,4],pass:4,password:[2,4],path:4,perform:0,permiss:4,permit:4,person:4,ping:[0,4],port:4,possibl:4,post:4,postgersql:0,postgr:[],postgresql:[0,1,2,4],postgresql_token_stor:1,postgresqlaccesstokenstor:1,postgresqlauthcodestor:1,postgresqlclientstor:1,postgresqlconnect:[2,4],postgresqlroutehandl:[0,4],practic:1,prioriti:[],privat:[],process:[1,4],protect:4,provid:[0,4],psycopg2:2,purpos:0,put:4,python:1,queri:[0,2,4],rais:[0,1,2,4],realdictcursor:2,reason:1,receiv:[0,1,4],recipi:[],reconnect:2,refer:[2,4],refresh_token_expiri:[],reject:1,relat:0,remain:1,remov:[0,4],remove_biobank:4,remove_biobanker_by_usernam:4,remove_particip:4,remove_participant_by_usernam:[0,4],remove_research:4,remove_researcher_by_usernam:[0,4],remove_studi:[0,4],repli:0,repres:0,represent:0,request:[0,1,4],request_bodi:4,request_class:4,request_except:4,requir:[0,4],required_paramet:4,research:4,researcher_handl:[0,4],researcher_handler_class:4,researcherdoesnotexistexcept:0,researcherexistsexcept:0,researcherhandl:[0,4],resid:2,resourc:1,resource_provid:4,resource_serv:4,resourceserv:4,respons:[0,1,4],response_class:4,rest:[0,4],restrict:4,rethrown:2,retir:[0,4],retriev:[0,1],revok:4,roll:2,rout:[0,4],route_handl:4,routehandl:0,row:[1,2],rtype:[],rubi:[],run:[],run_auth_serv:[],sai:[],same:4,sanit:0,sanitize_escap:0,save:2,save_cred_card:4,save_token:1,schema:1,scope:[1,4],scope_class:[],scope_handl:1,search:[0,3],second:[1,4],secur:1,select:2,select_on:2,self_onli:4,send:1,sender:[],sensit:0,separ:0,server:[0,1,3],servic:[0,4],session:2,set:[0,4],share:4,should:[0,2,4],show:0,similar:1,sinc:1,singl:[0,2],some:[0,1,4],someth:2,sought:0,sourc:[0,1,2,4],special:0,specif:0,specifi:[0,1],start:[0,1,4],start_auth_serv:4,start_dat:[],start_respons:4,statement:2,statu:[0,4],storag:4,store:[0,3,4],str:[0,1,2,4],string:[0,1,4],studi:[],study_except:0,study_handl:[0,4],study_handler_class:4,study_id:[0,4],studyattributedoesnotexistexcept:0,studydoesnotexistexcept:0,studyexistsexcept:0,studyexpiredexcept:0,studyhandl:[0,4],success:0,suppli:4,support:1,tabl:0,take:[0,1],taken:4,temp:4,test:4,theirs:4,them:[0,4],therefor:[0,1],thi:[0,1,2,4],those:0,though:1,three:4,time:[0,1,4],timelin:0,timestamp:0,to_binari:0,token:[3,4],token_expiri:4,token_gener:[1,4],token_stor:1,token_uri:4,tokengener:[1,4],tokenstor:[],trail:0,transact:2,two:[0,1],type:[0,1,2,4],typeerror:[],typic:0,unauthor:4,unauthorizeddataaccessexcept:4,unexpect:0,uniqu:[0,4],unlink:0,updat:[0,4],update_cons:4,update_studi:[0,4],url:4,use:[0,1,4],used:[0,1,2,4],useful:[],user:[1,4],user_except:0,user_id:1,userexistsexcept:0,userhandl:0,usernam:[0,2,4],uses:[0,1],using:[0,1,2,4],utf:4,uuid4:[],valid:[0,1,4],valu:[0,4],valueerror:[],variabl:[0,1,2,4],vartyp:[],view_biobank:4,view_cons:4,view_particip:4,view_research:4,view_studi:4,wai:[1,4],want:[],weak:[2,4],web:[0,1,4],well:4,were:[1,2],whatsoev:4,when:[2,4],where:[2,4],whether:[0,2,4],which:[0,1,2,4],whom:1,whose:0,withdraw:0,withdraw_cons:[0,4],workflow:0,would:1,wrapper:[0,2],write:0,wsgi:[1,4],www:4},titles:["Biobank Management","OAuth","Data Store Connections","Biobank Backend\u2019s Documentation","Server"],titleterms:{applic:4,author:4,backend:3,biobank:[0,3],code:[],configur:4,connect:2,consent:0,data:2,databas:2,document:3,dynam:0,except:[0,4],explicit:[],gener:0,grant:1,handler:[0,1],indic:3,manag:0,member:[],oauth:1,particip:0,research:0,resourc:4,server:4,store:[1,2],studi:0,tabl:3,token:1,useful:[],user:0,welcom:[]}})