const fs = require('fs/promises')
const grpc = require('@grpc/grpc-js')
const path = require('path')
const protoLoader = require('@grpc/proto-loader')
const { Upload, Download, Transform, ListFiles } = require('./handlers')
const protoPath = path.resolve(__dirname, '../proto')

async function main () {
  await fs.mkdir(path.resolve(__dirname, './uploads'), { recursive: true })
}

main()
  .then(console.log)
  .catch(console.error)
