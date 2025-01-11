const blockChain = (data, prev = { index: 0, hash: "0" }) => ({
    data: data,
    index: prev.index + 1,
    prev: prev,
    hash: hashCode(prev.index + 1 + prev.hash + JSON.stringify(data)),
    chain (newData)  {
      return blockChain(newData, this) 
    },
  });