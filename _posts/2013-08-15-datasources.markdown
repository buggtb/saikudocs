---
layout: saiku
title:  "Data Sources"
date:   2013-08-15 12:02:09
categories: saiku documentation
---

Adding A New Data Source
========================

Whilst we haven't yet had the time or resource to create a lovely graphical admin console for you system administrators we have tried to make it simple for you to add data sources to the Saiku platform.

The Saiku server is shipped with Foodmart by default. So I shall show you how to import the steel-wheels schema and configure it to use a MySQL database connection.

Firstly navigate to saiku-server/tomcat/webapps/saiku/WEB-INF/classes/saiku-datasources/ and copy the file named foodmart and rename it steelwheels. Next edit this new steelwheels file and configure it in a similar way to the following:

    type=OLAP
    name=steelwheels
    driver=mondrian.olap4j.MondrianOlap4jDriver
    location=jdbc:mondrian:Jdbc=jdbc:mysql://localhost/sampledata;Catalog=res:foodmart/Foodmart.xml;JdbcDrivers=com.mysql.jdbc.Driver;
    username=dbuser
    password=password
	

So what we have done here is told Saiku the new name of the connection is steelwheels. We then told Saiku the location of the database and mondrian schema, for which I have created a steelwheels folder under the webapp/ directory. We finally set the database username and password. Once you have installed your schema definition, restart your server. It doesn't get much simpler than that.

Adding a new JDBC Driver
========================

Obviously not everyone uses Hypersonic or MySQL to connect to their data warehouses. To use your specific database, please add the JDBC connector jar file to saiku-server/tomcat/webapps/saiku/WEB-INF/lib/ and then make the appropriate changes to the jdbc portion of the location string in the connection file.

Sample Data Sources
===================

Mondrian on MySQL
-----------------

    type=OLAP
    name=steelwheels
    driver=mondrian.olap4j.MondrianOlap4jDriver
    location=jdbc:mondrian:Jdbc=jdbc:mysql://localhost/sampledata;Catalog=res:foodmart/Foodmart.xml;JdbcDrivers=com.mysql.jdbc.Driver;
    username=dbuser
    password=password

XML/A (Pentaho BI Server)
-------------------------

    type=OLAP
    name=xmla
    driver=org.olap4j.driver.xmla.XmlaOlap4jDriver
    location=jdbc:xmla:Server=http://localhost:8080/pentaho/Xmla?userid=joe&password=password;
    username=joe
    password=password

XML/A (PALO)
------------

    type=OLAP
    name=xmla
    driver=org.olap4j.driver.xmla.XmlaOlap4jDriver
    location=jdbc:xmla:Server=http://localhost:4242/
    username=joe
    password=password

Mondrian on PostgreSQL
----------------------

    type=OLAP
    name=db_name
    driver=mondrian.olap4j.MondrianOlap4jDriver
    location=jdbc:mondrian:Jdbc=jdbc:postgresql://database_host:port/db_name;Catalog=res:data_directory/schema_file.mondrian.xml;JdbcDrivers=org.postgresql.Driver;
    username=db_user_name
    password=db_password

XML/A (Microsoft SSAS)
----------------------

Note
you need to install the [mdmdpump.dll](http://technet.microsoft.com/en-us/library/cc917711.aspx)

    type=OLAP
    name=xmla
    driver=org.olap4j.driver.xmla.XmlaOlap4jDriver
    location=jdbc:xmla:Server=http://192.168.0.1/olap/msmdpump.dll
    username=joe
    password=password

DB2
---

Note
With DB2, schema files must define tables, views and columns in UPPER CASE. DB2 is case sensitive. If you specify a table or column name without double-quotes, it is converted to upper case. This happens in both a CREATE TABLE statement and in SELECT statements. The solution is either to use double-quotes when creating your schema (so your table will be called czas) or to specify the table and column names in upper-case in your mondrian schema file.

    type=OLAP
    name=datasource_name
    driver=mondrian.olap4j.MondrianOlap4jDriver
    location=jdbc:mondrian:Jdbc=jdbc:db2://servername:port/SAMPLE;Catalog=res:foodmart/Foodmart.xml;JdbcDrivers=com.ibm.db2.jcc.DB2Driver;
    username=username
    password=password



  
