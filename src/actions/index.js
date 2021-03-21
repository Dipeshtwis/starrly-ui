export const INFOS = 'INFOS';

const getInfosAction = infos => ({
  type: INFOS,
  payload: infos,
});

export default getInfosAction;