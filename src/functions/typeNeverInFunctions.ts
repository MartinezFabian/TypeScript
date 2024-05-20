function throwError(message: string): never {
  throw new Error(message);
}

try {
  throwError('Authentication Error: Invalid username or password');
} catch (error: any) {
  console.log(error.message);
}
