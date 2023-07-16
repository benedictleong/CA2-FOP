const data = 'name, email, twitter';

const blob = new Blob ([data], { type: "octet-stream" });

const href = URL.createObjectURL(blob);

const a = Object.assign(document.createElement("a"), {
    href,
    style: "display: none",
    download: "myData.csv",
});
document.body.appendChild(a)

a.click();

URL.revokeObjectURL(href);
a.remove();