async function sample2() {
  const apiKey = "AIzaSyARMQR87p3EFawi4T5M6IfGS9O5hgCCD-c"; // Please set your API key.
  const fileId = "1l06UvaumINfdPzpjPQZuIZLx0RA_WjSB"; // File ID of PDF file of invoice file.

  // Parsing invoice of PDF file and retrieve values.
  const ip = new InvoiceApp({
    apiKey,
    blob: DriveApp.getFileById(fileId).getBlob(),
  });
  const res = await ip.run();
  if (typeof res == "object") {
    console.log("--- Valid values.");
    console.log(JSON.stringify(res));

    // do something.
  } else {
    console.log("--- Invalid values.");
    console.log(res);
  }
}

