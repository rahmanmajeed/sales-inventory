import i18n from "i18next";

export default function SwitchLang() {
  return (
    <>
      <button onClick={() => i18n.changeLanguage("en")}> En</button>
      <button onClick={() => i18n.changeLanguage("bn")}> Bn</button>
      <button onClick={() => i18n.changeLanguage("ms")}> Ms</button>
    </>
  );
}
