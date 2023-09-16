import user from "../../assets/user.webp";
import QuantityInput from "../Common/QuantityInput";
import Table from "../Common/Table";
import remove from "../../assets/remove.png";
const CartPage = () => {
  return (
    <section className="flex items-center flex-col justify-center w-3/5 my-0 mx-auto py-8 px-12">
      <div className="flex items-center gap-4 mb-8">
        <img
          src={user}
          alt="user profile"
          className="w-20 h-20 object-cover rounded-full"
        />
        <div>
          <p className="text-xl font-semibold">Daniel</p>
          <p className="">daniel@gmail.com</p>
        </div>
      </div>
      <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
        <tbody className="table_body">
          <tr className="table_tr">
            <td>Iphone 15</td>
            <td>$999</td>
            <td className="flex items-center justify-center h-12">
              <QuantityInput />
            </td>
            <td>$999</td>
            <td>
              <img
                src={remove}
                alt="remove image"
                className="w-10 h-10 cursor-pointer"
              />
            </td>
          </tr>
          <tr className="table_tr">
            <td>Iphone 15</td>
            <td>$999</td>
            <td className="flex items-center justify-center h-12">
              <QuantityInput />
            </td>
            <td>$999</td>
            <td>
              <img
                src={remove}
                alt="remove image"
                className="w-10 h-10 cursor-pointer"
              />
            </td>
          </tr>
          <tr className="table_tr">
            <td>Iphone 15</td>
            <td>$999</td>
            <td className="flex items-center justify-center h-12">
              <QuantityInput />
            </td>
            <td>$999</td>
            <td>
              <img
                src={remove}
                alt="remove image"
                className="w-10 h-10 cursor-pointer text-center"
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <table className="self-end w-96 mt-4 bg-white">
        <tbody>
          <tr>
            <td className="py-3 px-5 border-[3px] border-solid border-[#e5e5e5]">
              Subtotal
            </td>
            <td className="py-3 px-5 border-[3px] border-solid border-[#e5e5e5]">
              $999
            </td>
          </tr>
          <tr>
            <td className="py-3 px-5 border-[3px] border-solid border-[#e5e5e5]">
              Shipping carges
            </td>
            <td className="py-3 px-5 border-[3px] border-solid border-[#e5e5e5]">
              $5
            </td>
          </tr>
          <tr className="text-xl font-bold">
            <td className="py-3 px-5 border-[3px] border-solid border-[#e5e5e5]">
              Total
            </td>
            <td className="py-3 px-5 border-[3px] border-solid border-[#e5e5e5]">
              $1004
            </td>
          </tr>
        </tbody>
      </table>
      <button className="search_button self-end h-9 my-4 px-4">Checkout</button>
    </section>
  );
};

export default CartPage;
