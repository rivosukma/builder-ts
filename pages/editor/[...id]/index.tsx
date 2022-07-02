import { NextPage } from "next";
import { useEffect } from "react";
import grapesjs from "grapesjs";
import { grapeSettings } from "../../../lib/grape/index";

const Editor: NextPage = () => {
  useEffect(() => {
    grapesjs.init(grapeSettings);
  }, []);

  return <div id="gjs"></div>;
};
export default Editor;
