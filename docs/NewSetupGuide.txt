# MyShop-SPA
Step to follow for new Developement Environment : 
1. Install the following
	1. Nodejs
	2. Mongodb - intall using custom settings and change the path of installation directory
	3. VS-Code(Dev)
	4. Git for windows(Dev)
2. Set up a workspace folder.
3. Clone git repository : git clone https://github.com/skapp/MyShop-SPA.git
4. Check package.json and ctrl+` and run npm install 
5. Check bower.json and ctrl+` and run bower install
6. Setup the git path in settings.json
	{git.path:"<ur git.exe path>"}
7. Install following VS-Code extenstions
	1. Debugger for Chrome
	2. EsLint
	3. HTML Snippets
	4. Beautify
	5. vscode-icons
	6. javascript code snippets(es6)
	7. bootstrap 3 snippets
	8. Angular 1 snippets
	9. Documtent this
8. Configure Mongo:
	1. Goto Mongodb installed folder - to bin path and run CMD with Administrator
	2. Run Mongodb as windows service
		mongod --config "<config file path>" --install
9. Congifure git username and email id
	git config --global user.name <username>
	git config --global user.email <email_id>
