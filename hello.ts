import { promises as fs } from "fs"
// promisfying Filereading "readFile" is available in "fs.promises.readFile"
// normal fs.readFile is not promising ( it wont return a promise )
// in the above import we have imported the fs.promises as fs

const readfile: (filepath: string) => Promise<string> = async (filepath) => {
    try {
        const data = await fs.readFile(filepath, "utf-8");
        return data;
    } catch (err) {
        console.log(err)
        return "there is some error in readind the intro file"
    }
}

export {
    readfile
}
