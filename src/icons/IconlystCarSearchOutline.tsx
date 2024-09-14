import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarSearchOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.677 15.82a2.176 2.176 0 1 0 0 4.351 2.176 2.176 0 0 0 0-4.351m2.6-.424a3.677 3.677 0 1 0-5.2 5.2 3.677 3.677 0 0 0 5.2-5.2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.237 19.556a.75.75 0 0 1 1.06 0l1.487 1.486a.75.75 0 0 1-1.06 1.06l-1.487-1.486a.75.75 0 0 1 0-1.06M14.295 12.066a.75.75 0 0 1 .75-.75h1.66a.75.75 0 1 1 0 1.5h-1.66a.75.75 0 0 1-.75-.75M6.09 12.066a.75.75 0 0 1 .75-.75H8.5a.75.75 0 1 1 0 1.5H6.84a.75.75 0 0 1-.75-.75M2.723 8.093a.75.75 0 0 1 .848-.638 58.4 58.4 0 0 0 16.395 0 .75.75 0 0 1 .21 1.485c-5.577.791-11.238.791-16.815 0a.75.75 0 0 1-.638-.847"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.89 3.12a25 25 0 0 1 7.783 0l.002.001a2.82 2.82 0 0 1 2.185 1.827l.968 2.689a1 1 0 0 0 .11.21l1.074 1.442c.536.732.826 1.617.827 2.525a.75.75 0 1 1-1.5.001c0-.589-.188-1.162-.536-1.637l-1.075-1.443-.01-.015a2.4 2.4 0 0 1-.3-.573v-.001l-.972-2.699a1.32 1.32 0 0 0-1.009-.845 23.5 23.5 0 0 0-7.31 0 1.32 1.32 0 0 0-1 .845l-.003.006-.973 2.704a2.3 2.3 0 0 1-.304.556l-1.092 1.504a2.74 2.74 0 0 0-.522 1.614v.003l-.015 4.81c0 .096.078.174.174.174h1.83a.174.174 0 0 0 .175-.174v-.378c0-.925.749-1.674 1.674-1.674h4.548a.75.75 0 0 1 0 1.5H8.071a.174.174 0 0 0-.174.174v.378c0 .925-.75 1.674-1.674 1.674h-1.83a1.674 1.674 0 0 1-1.675-1.679l.015-4.805v-.002a4.24 4.24 0 0 1 .807-2.496l1.101-1.515a.8.8 0 0 0 .105-.19l.966-2.683a2.82 2.82 0 0 1 2.172-1.826z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarSearchOutline;
