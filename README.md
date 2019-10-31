# pingpong-react
.net core + React/Redux app example leveraging DB access and unit tests


# Running the app
Run both client and server via visual studio or

1. Go to pingpong-react\PingPongTest\ClientApp and perform 
	npm install svgo@1.3.0 -E
	npm install
	
2. Publish app via dotnet publish command from the root directory "pingpong-react\"
	dotnet publish -c Release -r win-x64 --output ./PingPongPublish PingPongTest.sln
	
3. Copy pingpong.db
	from "pingpong-react\PingPongTest\pingpong.db" to "pingpong-react\PingPongPublish\pingpong.db"
	
3. Go to "pingpong-react\PingPongPublish" run server with 
	dotnet PingPongTest.dll
	
4. In browser run
	https://localhost:5001/

Tests are in "PingPongTest\ClientApp" in "\components\Games\__tests__" and "\components\Players\__tests__"
To run tests go to "PingPongTest\ClientApp" and run
	nmp test
	
# Publishing the app	
To publish app on Azure via Visual studio follow this steps:
https://docs.microsoft.com/en-Us/aspnet/core/tutorials/publish-to-azure-webapp-using-vs?view=aspnetcore-3.0#deploy-the-app-to-azure

1. Right-click on the project in Solution Explorer and select Publish....
2. In the Publish dialog:
	Select Microsoft Azure App Service.
	Select the gear icon and then select Create Profile.
	Select Create Profile.
3. Create Azure resources
 The Create App Service dialog appears:
	Enter your subscription.
 The App Name, Resource Group, and App Service Plan entry fields are populated. You can keep these names or change them.
4. Select the Services tab to create a new database.
5. Select the green + icon to create a new SQL Database
6. Select New... on the Configure SQL Database dialog to create a new database.
7. The Configure SQL Server dialog appears.
 Enter an administrator user name and password, and then select OK. You can keep the default Server Name.
	Select OK.
8. Visual Studio returns to the Create App Service dialog.
	Select Create on the Create App Service dialog.
9. Visual Studio creates the Web app and SQL Server on Azure. This step can take a few minutes. For information on the resources created, see Additional resources.
10. When deployment completes, select Settings:
 On the Settings page of the Publish dialog:
	Expand Databases and check Use this connection string at runtime.
	Expand Entity Framework Migrations and check Apply this migration on publish.
	Select Save. Visual Studio returns to the Publish dialog.
11. Click Publish. Visual Studio publishes your app to Azure. When the deployment completes, the app is opened in a browser.

To publish on linux server see #Running the app section to prepare deployment package. 
Then follow the steps in this manual:
https://docs.microsoft.com/en-Us/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-3.0