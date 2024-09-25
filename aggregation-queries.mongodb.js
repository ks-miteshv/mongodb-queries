// Select the database to use.
use("tranning");

// find all categoies and its total companies.
db.companies.aggregate([
  {
    $group: {
      _id: "$category_code",
      total: { $sum: 1 }, // Step 2: Count the number of documents in this group
    },
  },
]);
