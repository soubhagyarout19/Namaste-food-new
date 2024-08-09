export function filterData(searchText, allResturants) {
    let x = allResturants.filter((element) => {
      return element.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(x);
    return x;
  }