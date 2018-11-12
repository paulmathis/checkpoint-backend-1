// Converts a csv string into json
// Only works on a csv with one row of keys and values
function csvToJson(csv) {
  const json = {};

  // Splits string at new lines
  const rows = csv.split(/\s+/);

  // Splits indiviual values at commas
  const splitRows = rows.map(row => {
    return row.split(",");
  });

  // Assign keys and vllues of each row to the json object
  splitRows[0].forEach((key, index) => {
    json[key] = splitRows[1][index];
  });

  return json;
}

module.exports = { csvToJson };
