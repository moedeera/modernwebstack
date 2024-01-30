// test GET ROUTE
// just returns a "Test API success" message
const testRoute = async (req, res) => {
  res.status(200).json({ message: "Test API success" });
};

module.exports = { testRoute };
