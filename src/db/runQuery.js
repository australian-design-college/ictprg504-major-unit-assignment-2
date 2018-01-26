import getConnection from "db/connection";

export default async (...args) => {
  const connection = getConnection();

  return (await connection.execute(...args))[0];
};
