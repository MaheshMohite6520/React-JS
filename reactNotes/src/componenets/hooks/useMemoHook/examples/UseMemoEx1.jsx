import React, { useMemo, useState } from "react";

const UseMemoEx1 = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  let checkCount1 = () => {
    let i = 0;
    while (i < 100000000) {
      i++;
    }

    return count1 % 2 == 0 ? " Even" : " Odd";
  };

  let memoizedVal = useMemo(checkCount1, [count1]);
  console.log(memoizedVal);

  let checkCount2 = () => {
    return count2 % 2 == 0 ? " Even" : " Odd";
  };

  return (
    <div className="flex justify-center gap-4 m-5">
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
        className="bg-orange-500 text-white px-3 rounded-md"
      >
        {/* No Performance issue : When checkCount1 is not called directly & used with useMemo() hook. */}
        Count1 : {count1} {memoizedVal}
        {/* Performance issue : When checkCount1 is called directly. */}
        {/* Count1 : {count1} {checkCount1()} */}
      </button>

      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
        className="bg-orange-500 text-white px-3 rounded-md"
      >
        Count2 : {count2} {checkCount2()}
      </button>
    </div>
  );
};

export default UseMemoEx1;
