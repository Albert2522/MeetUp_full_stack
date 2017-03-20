export const createImage = (image) => {
  return $.ajax({
    method: 'POST',
    url: 'api/images',
    data: {image}
  });
};

export const deleteImage = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/images/${id}`,
  });
};

export const createRelationship = (img_rel) => {
  return $.ajax({
    method: 'POST',
    url: `/api/img_rel`,
    data: img_rel
  });
};

export const deleteRelationship = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/img_rel/${id}`,
  });
};

export const updateRelationship = (img_rel) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/img_rel/${img_rel.id}`,
    data: img_rel
  });
};
