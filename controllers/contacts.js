const listContacts = (req, res) => {
  res.send("List contacts...");
};

const getOneContact = (req, res) => {
  res.send(`Contact: ${_id}`);
};

module.exports = {
  listContacts,
};
