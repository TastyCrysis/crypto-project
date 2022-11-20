import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as klaro from "klaro";

const config = {
  elementID: "cookie-consent",
  storageMethod: "cookie",
  cookieName: "cookie-consent",
  cookieExpiresAfterDays: 365,
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  privacyPolicy: {
    default: "/privacy",
  },
  lang: "de",
  translations: {
    de: {
      purposes: {
        session: "Sitzungszuordnung",
      },
      consentModal: {
        title: "Informationen die wir sammeln",
        description:
          "Hier kannst du einsehen und anpassen, welche Informationen wir über Deinen Besuch auf unserer Website sammeln. Um mehr zu erfahren, lesen Sie bitte unsere\n",
        privacyPolicy: {
          text: "Bitte lesen Sie unsere {privacyPolicy} um weitere Details zu erfahren.\n",
          name: "Datenschutzerklärung",
        },
      },
      consentNotice: {
        changeDescription:
          "Es gab Änderungen seit Ihrem letzten Besuch, bitte aktualisieren Sie Ihre Auswahl.",
        description:
          "Wir speichern und verarbeiten Ihre personenbezogenen Informationen für diverse Zwecke.\n",
        learnMore: "Mehr erfahren",
      },
      ok: "Alle Akzeptieren",
      acceptSelected: "Auswahl speichern",
      save: "Speichern",
      decline: "Nur technisch notwendige erlauben",
      close: "Schließen",
      app: {
        disableAll: {
          title: "Alle Anwendungen aktivieren/deaktivieren",
          description: "",
        },
        optOut: {
          title: "(Opt-Out)",
          description:
            "Diese Anwendung wird standardmäßig gelanden (aber Sie können sie deaktivieren)",
        },
        required: {
          title: "(immer notwendig)",
          description: "Diese Anwendung wird immer benötigt",
        },
        purposes: "Zwecke",
        purpose: "Zweck",
      },
      poweredBy: "",
      session: {
        description:
          "Notwendige Cookies, damit unserer Webseite sicher und vorschriftsmäßig funktionieren kann.",
      },
    },
  },
  services: [
    {
      name: "session",
      purposes: ["session"],
      default: true,
      required: true,
      onlyOnce: true,
    },
  ],
};

// we assign the Klaro module to the window, so that we can access it in JS
window.klaro = klaro;
window.klaroConfig = config;
// we set up Klaro with the config
klaro.setup(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
