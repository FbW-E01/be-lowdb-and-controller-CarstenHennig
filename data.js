import { Low, JSONFile } from "lowdb";

const adapter = new JSONFile("./db.json");
const db = new Low(adapter);

console.log("Reading in old data from database");
await db.read();

db.data = db.data || { posts: [] };

export function writeData(data) {
  db.data = data;
  db.write();
}

export function getData() {
  return db.data;
}

export function updatePost(id, newData) {
  newData.id = id;

  const data = getData();
  data.posts = data.posts.map((p) => {
    if (p.id === id) {
      p = newData;
    }
    return p;
  });
  writeData(data);
}
