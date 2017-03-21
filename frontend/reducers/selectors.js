import { values } from 'lodash';

export const arrayOfCategories = ({categories}) => values(categories);

export const arrayOfHuddles = ({group}) => values(group.huddles);

export const allEvents = (events) => {
  let arr = [ ];
  events.forEach(key => {
    if (typeof key != 'undefined') {
      arr.push(key);
    }
  });
  return arr;
};

export const allGroups = (groups) => {
  let arr = [ ];
  let keys = Object.keys(groups);
  keys.forEach( (key) => arr.push(groups[key]))
  return arr;
};

export const allImages = images => {
  let arr = [ ];
  let keys = Object.keys(images);
  keys.forEach(key => arr.push(images[key]));
  return arr;
}

export const arrayOfMembers = ({huddle}) => values(huddle.members);

export const getCategoriesNames = ({categories}) => {
  const categoriesArray = values(categories);
  const categoriesNames = categoriesArray.map(category => category.name);
  return categoriesNames;
}
