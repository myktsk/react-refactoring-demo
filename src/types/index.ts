export type Member = {
  id: string,
  name: string,
  avatar?: string,
  email: string,
  role: 'admin' | 'member' | 'guest'
};

export type Invitation = {
  id: string,
  email: string
}