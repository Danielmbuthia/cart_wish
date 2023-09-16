import Table from "../Common/Table";

const MyOrderPage = () => {
  return (
    <section className="flex items-center justify-center md:w-3/4 mx-auto py-8 px-12 w-full">
      <Table headings={["Order No", "Products", "Total", "Status"]}>
        <tbody className="table_body">
          <tr className="table_tr">
            <td>1</td>
            <td>Iphone 14, bag</td>
            <td>$600</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default MyOrderPage;
