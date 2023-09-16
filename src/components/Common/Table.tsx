import { TableHeadingProps } from "../../types";

const Table = ({ headings, children }: TableHeadingProps) => {
  return (
    <table className="w-full mb-4 border-collapse bg-white shadow-md">
      <thead className="h-12 bg-[#36304a] text-white uppercase">
        {headings.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </thead>
      {children}
    </table>
  );
};

export default Table;
