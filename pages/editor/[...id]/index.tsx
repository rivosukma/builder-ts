/* eslint-disable */
import { NextPage } from "next";
import { useEffect } from "react";
import grapesjs from "grapesjs";
import { grapeSettings } from "../../../lib/grape/index";

const Editor: NextPage = () => {
  useEffect((): any => {
    const settings: any = grapeSettings;
    return () => grapesjs.init(settings);
  }, []);

  return <div id="gjs"></div>;
};
export default Editor;
