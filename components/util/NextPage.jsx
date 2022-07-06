import { useState } from "react";

export default function NextPage(props) {
  const [isFirst, setFirst] = useState(true);
  const [isLast, setLast] = useState(false);
  return (
    <div className="flex space-x-3  items-center">
      {!isFirst && (
        <div>
          <a href="#">Previous page</a>
        </div>
      )}
      <div>
        <h1>1/12</h1>
      </div>
      {!isLast && (
        <div className="rounded-full py-2 px-6 border hover:border-gray-500 border-gray-200">
          <a href="#">Next page</a>
        </div>
      )}
    </div>
  );
}
