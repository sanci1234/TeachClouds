import React from "react";
export const Column = ({ title }) => {
  return <th scope="col">{title}</th>;
};
export const Row = ({ children }) => {
  return <tr className="">{children}</tr>;
};
export const Cell = ({ children }) => {
  return <td>{children}</td>;
};
export const NoRecordFound = ({ colLength }) => {
  return (
    <tr>
      <td colSpan={colLength}>No records found</td>
    </tr>
  );
};
const DataTable = ({ title, dataSource, dataKey, children }) => {
  // children korumali bir prop oldugu icin uzerinde degisiklik yapmaya izin vermez
  // degisiklik yapabilmek icin kopyasini olusturduk
  if (!dataSource) throw new Error("dataSource attribute is required");
  if (!Array.isArray(dataSource))
    throw new Error("dataSource value must be an array");
  if (!dataKey) throw new Error("dataKey attribute is required");
  const columns = [...children];
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <table className="table table-striped ">
          <thead>
            <tr>
              {columns.map((item) => (
                <Column key={item.props.title} {...item.props} />
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.length <= 0 ? (
              <NoRecordFound colLength={columns.length} />
            ) : null}
            {dataSource.map((row, indexRow) => {
              console.log(row);
              return (
                <Row key={`row-${row[dataKey]}`}>
                  {columns.map((column) => {
                    const { field, index } = column.props;
                    let cellData = "";
                    if (index) {
                      cellData = indexRow + 1;
                    } else if (field) {
                      cellData = row[field];
                    }
                    return <Cell >{cellData}</Cell>;
                  })}
                </Row>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DataTable;
