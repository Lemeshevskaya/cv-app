import { createServer, Model, Response } from "miragejs";

export default function makeServer() {
  createServer({
    models: {
      skills: Model,
    },

    routes() {
      this.namespace = "api";

      this.get(
        "/educations",
        () => {
          return {
            educations: [
              {
                date: 2001,
                title: "Title 0",
                text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
              },
              {
                date: 2000,
                title: "Title 1",
                text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n",
              },
              {
                date: 2012,
                title: "Title 2",
                text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n",
              },
            ],
          };
        },
        { timing: 3000 }
      );

      this.get("/skills", (schema, request) => {
        return schema.db.skills;
      });

      this.post("/skills", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let skills = schema.db.skills;

        if (attrs.name && attrs.range) {
          return skills.insert(attrs);
        } else {
          return new Response(400, { some: "Header" }, { errors: ["empty"] });
        }
      });
    },
  });
}