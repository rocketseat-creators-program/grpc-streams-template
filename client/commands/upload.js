const doUpload = (client, { fileName, filePath, fileSize }) => {
  console.log(`=== Iniciando o Upload do arquivo ${fileName} com ${fileSize} bytes ===`)
}

module.exports = (client, rawPath) => {
  if (fs.statSync(rawPath).isDirectory()) {
    const files = fs.readdirSync(rawPath)

    files.forEach(file => {
      const filePath = path.join(rawPath, file)
      const fileSize = fs.statSync(filePath).size
      console.log(filePath)
      doUpload(client, { fileName: file, filePath, fileSize })
    })
    return
  }

  doUpload(client, { fileName: rawPath.split(path.sep).pop(), filePath: rawPath, fileSize: fs.statSync(rawPath).size })
}
