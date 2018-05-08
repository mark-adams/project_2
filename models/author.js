module.exports = function (sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
  });

  Author.associate = function (models) {

    // Associating Author with Letter in letters.js
    models.Author.hasMany(models.Letter);
  };

  return Author;
};
