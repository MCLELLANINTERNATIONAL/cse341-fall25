const kathleenRoute = (req, res) => {
  res.send('Kathleen Mclellan, ');
};

const angelaRoute = (req, res) => {
  res.send(
    'Name: Angela Crisp' <br>
    'Email: acrisp@gmail.com' <br>
    'Favourite Colour: Lilac'<br>
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
