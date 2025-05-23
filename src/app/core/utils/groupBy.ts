export const groupBy = (arr: any, keyGetter: any) => {
    const map = new Map();
    arr.forEach((el: any) => {
      const key = keyGetter(el);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [el]);
      } else {
        collection.push(el);
      }
    });
    let res = [{}, {}, {}];
    Array.from(map, ([name, products]) => ({ name, products })).forEach(
      (arr: any) => {
        if (arr.name == 'Produse afumate') {
          res[0] = arr;
        } else if (arr.name == 'Produse proaspete') {
          res[1] = arr;
        } else if (arr.name == 'Platouri') {
          res[2] = arr;
        }
      }
    );
    return res;
  }