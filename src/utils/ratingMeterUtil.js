export const modifyRatingMetersList = (data) => {
  return data.map((obj) => {
    return [
      {
        label: obj.name,
        align: "center",
      },
      {
        label: obj.uid,
      },
      {
        label: obj.description,
      },
      {
        label: obj.status,
      },
    ];
  });
};
