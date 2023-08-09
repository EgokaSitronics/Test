import "./styles.css";
import * as JSZipUtils from "jszip-utils";
import wordFile from "./demo.docx";
import mammoth from "mammoth";
import { parse } from "himalaya";

var loadFile = function (url, callback) {
  JSZipUtils.getBinaryContent(url, callback);
};
loadFile(wordFile, async function (err, content) {
  if (err) {
    throw err;
  }
  const html = await mammoth.convertToHtml({ arrayBuffer: content });
  const json = await parse(html.value);

  document.getElementById("output").innerHTML = JSON.stringify(json, null, 2);

  console.log(html, json);
});
