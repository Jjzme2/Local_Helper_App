import fs from 'fs'

class FileUtilities {
  static async readFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  static async getFilesInDirectory(directoryPath) {
    return new Promise((resolve, reject) => {
      fs.readdir(directoryPath, (error, files) => {
        if (error) {
          reject(error)
        }
        resolve(files)
      })
    })
  }

  static async fileExists(filePath) {
    return new Promise((resolve) => {
      fs.access(filePath, fs.constants.F_OK, (error) => {
        if (error) {
          resolve(false)
        }
        resolve(true)
      })
    })
  }
}

export default FileUtilities
