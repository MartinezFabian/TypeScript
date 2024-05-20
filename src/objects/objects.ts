let myUser: { username: string; fullName: string; isValid: boolean; skilss?: string[] } = {
  username: 'fabian',
  fullName: 'Fabian Martinez',
  isValid: true,
  skilss: ['JavaScript', 'React', 'Node'],
};

myUser = {
  username: 'fabian',
  fullName: 'Fabian Martinez',
  isValid: false,
  // la propiedad skilss es opcional
};
