export const routesList = {
  home: "/",
  detail: "/detail",
  detailId: "/detail/:id",
};

export const getTodoDetail = (id: number) => {
  return `${routesList.detail}/${id}`;
};
