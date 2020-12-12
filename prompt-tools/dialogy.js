const dialogy = require("dialogy")

dialogy.alert({ message: "Hello World" })

const filePath = dialogy.openFile({
  filter: {
    patterns: ["*.txt"],
    description: "Text files"
  }
})
