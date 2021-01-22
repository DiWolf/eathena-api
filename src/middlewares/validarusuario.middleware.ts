import connector from "../common/mysql.persitence";

module.exports = async function (req: any, res: any, next: any) {
  const { account_id } = req.params;
  try {
    if (!account_id) {
      const error = new Error();
      error.message =
        "No se puede determinar la id de sesión por favor intenta nuevamente";
      error.status = 400;
      throw error;
    }
    const [
      row,
    ] = await connector.execute(
      "SELECT account_id,userid,level FROM login WHERE account_id = ? AND state = 0 LIMIT 1",
      [account_id]
    );

    if (row[0] === undefined) {
      throw "No se puede determinar el inicio de sesión";
    } else {
      req.profile = row[0];
      next();
    }
  } catch (error) {
    throw Error(error);
  }
};
