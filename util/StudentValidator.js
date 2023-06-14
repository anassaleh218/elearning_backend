const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    fn: { type: "string" },
    ln: { type: "string" },
    dept: { type: "string", minLength: 2, maxLength: 2 }
  },
  required: ["fn", "ln", "dept"]
};

module.exports = ajv.compile(schema);
