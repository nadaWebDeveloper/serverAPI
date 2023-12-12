import 'dotenv/config'

export const dev = {
  app: {
    port: process.env.PORT ,
  },
  db: {
    url: process.env.MONGODB_URL || 'mongodb+srv://nadaYahya:Almalki123@cluster0.tvnc3qb.mongodb.net/awsDB',
  },
}