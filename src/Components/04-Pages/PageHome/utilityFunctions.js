/*===========================================
===============GENERATE PAYLOAD==============
=============================================*/

export const generatePayload = (categoryId = "", sortValue = "DESC") => {
  let payload = `?`;

  if (categoryId === 0) {
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

// /*===========================================
// ===============GENERATE FILTERED RESULTS==============
// (if searchInput is not blank)
// =============================================*/
// export const generateFilteredResults = (
//   unfilteredResults = [],
//   searchOption = "title",
//   searchInput = ""
// ) => {
//   let filteredResults = [];
//   let regex = new RegExp(`${searchInput}`, "i");

//   if (searchOption == "title") {
//     filteredResults = unfilteredResults.filter((article) =>
//       regex.test(article.title)
//     );
//   } else {
//     filteredResults = unfilteredResults.filter((article) =>
//       article.Blog_Keywords.filter((keywordObj) =>
//         regex.test(keywordObj.Keyword.name)
//       )
//     );
//   }
//   console.log(`filtered result (searched): ${filteredResults}`);
//   return filteredResults;
// };
