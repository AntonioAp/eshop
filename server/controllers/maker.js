const MakersCtrl = {};

const Maker = require("./maker");

MakerCtrl.getMaker = async (req, res) => {
  const supplier = await Maker.findById(req.params.id);
  res.send(maker);
};
MakerCtrl.getMakers = async (req, res) => {
  const suppliers = await Maker.find();
  res.json(makers);
};

module.exports = MakersCtrl;