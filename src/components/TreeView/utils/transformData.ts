export const transformData = (originalData) => {
  return originalData.map((node) => {
    const { children, ...rest } = node;
    return {
      ...rest,
      childrenNodes: children ? transformData(children) : undefined,
    };
  });
};
