export const add = (foodData) => {
  return {
    type: "add",
    payload: foodData,
  };
};
export const addPluse = (obj, allData) => {
  let copyEless;
  for (const ele of allData) {
    if (ele.foodName === obj.foodName) {
      copyEless = ele;
      copyEless.count = copyEless.count + 1;
      break;
    }
  }
  // console.log("copyEless", copyEless);

  let allDatas = allData.filter((eles) => {
    return copyEless.foodName !== eles.foodName;
  });

  return {
    type: "addPluse",
    payload: [...allDatas, copyEless],
  };
};

export const removeMines = (obj, allData, id) => {
  if (obj.totalCount === 1) {
    allData = allData.filter((ele) => {
      return ele.id !== id;
    });
    return {
      type: "remove",
      payload: allData,
    };
  }
  let copyEless;
  for (const ele of allData) {
    if (ele.foodName === obj.foodName) {
      copyEless = ele;
      copyEless.count = copyEless.count - 1;
      break;
    }
  }
  console.log("copyEless", copyEless);

  let allDatas = allData.filter((eles) => {
    return copyEless.foodName !== eles.foodName;
  });
  return {
    type: "removeMines",
    payload: [...allDatas, copyEless],
  };
};

export const remove = (arr, id) => {
  arr = arr.filter((ele) => {
    return ele.id !== id;
  });
  return {
    type: "remove",
    payload: arr,
  };
};

export const details = (details) => {
  return {
    type: "details",
    payload: details,
  };
};

export const removeAll = () => {
  return { type: "removeAll", payload: [] };
};

export const addToCart = (ele) => {
  return { type: "addToCart", payload: ele };
};
