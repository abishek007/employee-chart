import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { updateEmpList } from "./Helpers/helpers";
import { EMPLOYEE_LIST, API_ROTES } from "./constants";

import { createServer } from "miragejs";

createServer({
  routes() {
    this.data = EMPLOYEE_LIST;
    this.get(API_ROTES.GET_EMPLOYEE, () => this.data);
    this.post(API_ROTES.POST_EMPLOYEE, (schema, request) => {
      let parsedData = JSON.parse(request.requestBody);
      updateEmpList(parsedData);
      this.data = parsedData;
    });
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
