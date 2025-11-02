const kathleenRoute = (req, res) => {
  res.send('Kathleen Mclellan, ');
};

const angelaRoute = (req, res) => {
  res.send(
    'Name: Angela Crisp',
    'Email: acrisp@gmail.com',
    'Favourite Colour: Lilac',
    'Birthdate: 20th November 1936'); 
};

const nephiRoute = (req, res) => {
  res.send('Nephi Wannenburgh');
};

module.exports = {
  kathleenRoute,
  angelaRoute,
  nephiRoute,
};
