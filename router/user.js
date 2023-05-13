const router = require("./index");

router.get("/", (req, res) => {
	res.send({
		status: 200,
		data: [
			{
				id: 1,
				name: "zzb"
			}
		]
	});
});

router.post("/create", (req, res) => {
	res.send({
		status: 200,
		data: 1
	});
});

module.exports = router;