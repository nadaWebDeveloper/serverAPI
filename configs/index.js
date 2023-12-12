import 'dotenv/config'

export const dev = {
  app: {
    port: process.env.PORT || 2007,
  },
  db: {
    url: process.env.MONGODB_URL || 'mongodb+srv://nadaYahya:Almalki123@cluster0.tvnc3qb.mongodb.net/awsDB?retryWrites=true&w=majority',
  },
}