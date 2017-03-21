export const createMembership = (membership) => {
  return $.ajax({
    method: 'POST',
    url: 'api/memberships',
    data: {membership}
  });
};

export const deleteMembership = (membership) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/memberships/${membership.id}`,
    data: membership
  });
};
