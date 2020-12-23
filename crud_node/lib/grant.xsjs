var connection = $.hdb.getConnection();
// var user = connection.executeQuery('SELECT CURRENT_USER "current user" FROM DUMMY');
// console.log(user);
// var result = connection.executeQuery('GRANT "access_test" to JEFF');
// console.log(result);

// var schema = connection.executeQuery('GRANT "access_test" TO JEFF');
// connection.executeQuery('GRANT "CRUD_DB_1"."access_test" TO JEFF');

var result = connection.executeUpdate('GRANT "CRUD_DB_1"."access_test" TO JEFF');
var result = connection.executeUpdate('GRANT "CROSS_CONTAINER_1ST_DB"."access" TO JEFF');

// var result = connection.executeUpdate('REVOKE "CRUD_DB_1"."access_test" FROM JEFF');

// var result = pstmt.executeQuery();

// var result = connection.executeQuery(`REVOKE "CRUD_DB_1"."access_test" FROM JEFF`);

// var row1 = result[0];
// for (var row in result){
// 	console.log(result[row]);
// }
// $.response.setBody(JSON.stringify(result));


// var setdb = connection.executeQuery('SET SCHEMA "CRUD_DB_1#DI"');
// var setdb = connection.executeUpdate('SET SCHEMA CRUD_DB_1#DI');


// var setdb = connection.executeUpdate('SET SCHEMA CRUD_DB_1');
// var schema = connection.executeQuery('SELECT CURRENT_SCHEMA FROM DUMMY');
// console.log(schema);
// var createtbl = connection.executeQuery('CREATE LOCAL TEMPORARY COLUMN TABLE #ROLES LIKE _SYS_DI.TT_SCHEMA_ROLES');

// console.log(setdb);
// var createtbl = connection.executeQuery('CREATE LOCAL TEMPORARY COLUMN TABLE #ROLES LIKE _SYS_DI.TT_SCHEMA_ROLES');
// console.log(createtbl);
// var inserttbl = connection.executeQuery(`INSERT INTO #ROLES (ROLE_NAME, PRINCIPAL_SCHEMA_NAME, PRINCIPAL_NAME) VALUES ('access_test', '','JEFF'`);
// console.log(inserttbl);
// var droptbl = connection.executeQuery(`DROP TABLE #ROLES`);
// console.log("DONE");
// connection.executeQuery('CALL CRUD_DB_1#DI.GRANT_CONTAINER_SCHEMA_ROLES(.#ROLES, _SYS_DI.T_NO_PARAMETERS,?,?,?)'); 

$.response.setBody("DONE " + result);
