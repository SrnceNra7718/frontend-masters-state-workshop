import { useEffect, useState } from "react";

type Order = {
  type: "cappuccino" | "espresso" | "latte" | "mocha";
  price: number;
  quantity: number;
};

/**
 * Displays a list of orders and their total cost
 * @returns {JSX.Element} A JSX element containing the list of orders and their total cost
 * Deriving states using useState and useEffect, where useEffect is calculating new states instead of computing values directly in render
 * It causes an unnecessary render when orders change and introduces complexity where state can be directly computed during render
 * Calculate states directly in render using the source of truth, which in this example would be directly computing the total from the orders
 * First, try calculating states directly in render without using useMemo, which is simpler and often more performant
 */
function App() {
  const [orders, setOrders] = useState<Order[]>([]);

  const total = orders.reduce(
    (acc, order) => acc + order.price * order.quantity,
    0,
  );

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.type}>{order.type}</li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}
