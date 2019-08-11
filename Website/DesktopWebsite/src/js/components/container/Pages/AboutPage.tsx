import * as React from "react";
import { IPageProps } from "../../../interfaces/ICommon";
export interface IAboutPageProps extends IPageProps {}

export const AboutPage : React.FC<IAboutPageProps> = (props: IAboutPageProps) =>  (<h1>{props.title} PAGE</h1>);