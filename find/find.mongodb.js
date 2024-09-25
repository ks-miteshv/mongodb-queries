// Select the database to use.
use("sample_training");

// get all company names
db.companies.find(
  {
    name: { $regex: "book", $options: "i" },
  },
  { name: 1, _id: 0 }
);

/**
  {
    name: { $regex: "book", $options: "i" },
  }

  explanation we are going to find book name companies
  * name is document field.
  * $regex means like
  * $options: "i" is incase sensitive.
 */
