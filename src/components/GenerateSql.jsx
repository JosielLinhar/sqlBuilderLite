export function GenerateSql(queryType, fields, table, condition, setFormatedSql) {
  if (queryType === "update") {
    setFormatedSql(
      `${queryType} ${table}\nset ${fields.split("\n")}\nwhere ${condition}`
    );
    return;
  } else if (queryType === "insert") {
    setFormatedSql(
      `${queryType} into ${table} (${fields.split("\n")})\nvalues (${condition})`
    );
    return;
  } else if (queryType === "delete") {
    setFormatedSql(`${queryType} from ${table}\nwhere ${condition}`);
    return;
  }
  setFormatedSql(`${queryType} ${fields.split("\n")}\nfrom ${table}\nwhere ${condition}`);
}