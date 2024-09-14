import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPerviousCircleBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.201 13.931c-.087.669-.424 1.197-.952 1.5-.29.166-.616.249-.954.249a2.2 2.2 0 0 1-.864-.181 9.9 9.9 0 0 1-2.951-1.873c-.485-.443-.755-1.018-.758-1.616-.002-.6.267-1.182.757-1.637l.004-.004a10 10 0 0 1 2.958-1.874c.658-.262 1.31-.232 1.838.081.512.303.84.832.921 1.487.138 1.349.138 2.645.001 3.868M9.195 14.99a.75.75 0 0 1-1.5 0V9.01a.75.75 0 0 1 1.5 0zM12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.515 9.867c-.119-.07-.306-.063-.514.02a8.5 8.5 0 0 0-2.503 1.588c-.127.118-.276.305-.275.53 0 .223.147.404.271.518a8.4 8.4 0 0 0 2.517 1.594c.19.08.368.084.493.013.142-.082.191-.251.209-.38a16.6 16.6 0 0 0-.003-3.518c-.012-.091-.055-.282-.196-.365"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPerviousCircleBold;
