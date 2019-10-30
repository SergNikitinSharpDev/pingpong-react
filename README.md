# pingpong-react
.net core + React/Redux app example leveraging DB access and unit tests

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