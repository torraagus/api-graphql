function createOptObj(order, skip, limit) {
  if (!order && !skip && !limit) return {};
  const opt = {};
  if (skip) opt["skip"] = skip;
  if (limit) opt["limit"] = limit;
  if (order) {
    const sort = {};
    sort[order.sortBy] = order.order;
    opt["sort"] = sort;
  }
  return opt;
}

module.exports = { createOptObj };
