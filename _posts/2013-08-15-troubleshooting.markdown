---
layout: saiku
title:  "Troubleshooting"
date:   2013-08-15 12:10:09
categories: saiku documentation configuration
---

Troubleshooting
================

General troubleshooting workflow
---------------------------------
This is a high-level workflow you can use when something seems to be broken:

###Level 1 - Clean & Restart 

  1. Stop Saiku server
  2. Delete cache from browser (and to be 100% sure, restart browser)
  3. Start Saiku server again

###Level 2 - Analyze Logs

  1. See what error messages are there in logs
  2. Fix errors if any (see list typical mistakes in configuration below) and go to level 1.
  3. If no errors are shown, try to enable additional logs.

###Level 2.5 Consider Upgrade/Downgrade

  1. If you are using older version than you should consider upgrade to latest stable version as many bugs are fixed and features added with every new version.
  2. If you are using development version than you should consider downgrading to latest stable version as development version was never intended to be production ready.

###Level 3 - Ask for Help
If you still can't make it work, you can always ask on Analytical Labs [forum](http://ask.analytical-labs.com/). You can also consider commercial [support](http://meteorite.bi/saiku/support).

###Level 4 - Fill-in a Bug or Feature Request
Maybe Saiku is not able to meet your requirements right now or you discovered a bug. In this case you can always open new ticket in [Github](https://github.com/osbi/saiku/issues?state=open). If you want to have your feature added quickly you can consider [sponsoring](http://meteorite.bi/saiku/sponsor) Saiku development.
  
Using Logs
----------
For standalone, self-contained installation, logs are by default stored in folder `saiku-server/tomcat/logs`. If there are any errors during Saiku server startup they will be reported in `catalina.out`

Enabling Additional Logs
------------------------

You can enable additional logs for Mondrian, MDX statements and generated SQL statements. Configuration is located here:

    saiku-server/tomcat/webapps/saiku/WEB-INF/classes/log4j.xml

To enable specific log, just un-comment specific section of file in your favourite text editor. Do not forget to restart Saiku server after saving changes.

Typical Mistakes
----------------
When something does not work it is often due to the basic mistakes in configuration.

###Missing JDBC Driver

Log content:

    mondrian.olap.MondrianException: Mondrian Error:Internal error: Error while creating SQL connection: Jdbc=jdbc:postgresql://localhost:5432/foodmart; JdbcUser=db_user; JdbcPassword=db_password
    ...
    Caused by: java.sql.SQLException: No suitable driver found for jdbc:postgresql://localhost:5432/foodmart

Possible solutions:

  - Check that correct driver (jar file) is available in folder `saiku-server/tomcat/webapps/saiku/WEB-INF/classes`
  - Check definition of your data source if `location` is specified correctly (see chapter [Data sources]({% post_url 2013-08-15-datasources %}) for details)
  
###Wrong Path to Schema Definition

Log content:

    mondrian.olap.MondrianException: Mondrian Error:Internal error: loading schema from url res:foodmart/FoodMart.xml
    ...
    Caused by: org.apache.commons.vfs.FileSystemException: Badly formed URI "res:foodmart/FoodMart.xml".    
    
Possible solutions:

  - Make sure that path and file name of schema matches exactly string used in `Catalog` attribute in schema definition
  - Try to use absolute path (e.g. `/home/user/saiku-server/tomcat/webapps/saiku/WEB-INF/classes/foodmart/foodmart.xml`)
  
