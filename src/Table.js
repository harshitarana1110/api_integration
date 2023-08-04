import React from "react";

const Table = ({ data, query }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((item) => {
            return query.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(query) ||
                  item.username.toLowerCase().includes(query) ||
                  item.email.toLowerCase().includes(query);
          })

          .map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
