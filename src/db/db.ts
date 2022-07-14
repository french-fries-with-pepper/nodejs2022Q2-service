import User from 'src/types/User';

export default {
  users: [],
  albums: [],
  artists: [],
  tracks: [],
  favorites: [],

  getAllUsers(): User[] {
    return this.users;
  },
  getUserById(id: string): User {
    return this.users.find((u: User) => u.id === id);
  },
  addUser(user: User): void {
    this.users.push(user);
  },
  deleteUser(id: string): void {
    const idx = this.users.findIndex((u: User) => u.id === id);
    if (idx < 0) throw new Error('User not found');
    this.users.splice(idx, 1);
  },
};
