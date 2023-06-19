/*===========================================
===============GENERATE PAYLOAD==============
=============================================*/

export const generatePayload = (categoryId = "", sortValue = "DESC") => {
  let payload = `?`;

  if (!categoryId) {
    payload = `${payload}sort=${sortValue}&page=1`;
  } else {
    payload = `${payload}id_cat=${categoryId}&sort=${sortValue}&page=1`;
  }

  return payload;
};

/*===========================================
===============GENERATE CURRENT QUERY==============
(for pagination)
=============================================*/
export const generateCurrentQuery = (categoryId = "", sortValue = "DESC") => {
  let query = `?`;

  if (!categoryId) {
    query = `${query}sort=${sortValue}`;
  } else {
    query = `${query}id_cat=${categoryId}&sort=${sortValue}`;
  }

  return query;
};

/*===========================================
===============GENERATE FILTERED RESULTS==============
(if searchInput is not blank)
=============================================*/
export const generateFilteredResults = (
  unfilteredResults = [],
  searchOption = "title",
  searchInput = ""
) => {
  let filteredResults = [];

  if (searchOption == "title") {
    filteredResults = unfilteredResults.filter((article) =>
      article.title.includes(searchInput)
    );
  } else {
    filteredResults = unfilteredResults.filter((article) =>
      article.CategoryId.includes(searchInput)
    );
  }

  return filteredResults;
};
