const Screenshot = require("url-to-screenshot");
export default function ss(req, res) {
  new Screenshot("http://ghub.io/")
    .width(800)
    .height(600)
    .capture()
    .then(img => console.log(img));
    res.json({meow: "meow"})
}
