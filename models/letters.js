module.exports = function (sequelize, DataTypes) {
  var Letter = sequelize.define("Letter", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1, 500]
    }
  });

  Letter.associate = function (models) {
    // every Letter belongs to an Author
    // Foreign key means a Letter can't be created without an Author
    models.Letter.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Letter;
};
