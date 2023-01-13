const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'959852fd-99cf-45c0-9809-9c4950ecf882'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
