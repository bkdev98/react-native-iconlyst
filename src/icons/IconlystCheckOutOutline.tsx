import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckOutOutline = ({
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
      d="M13.882 10.374a.75.75 0 0 1 .75.75v1.752a.75.75 0 0 1-1.5 0v-1.752a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.878 3.541a1.916 1.916 0 0 0-2.306 1.875v13.168a1.916 1.916 0 0 0 2.306 1.875l5.223-1.084a1.915 1.915 0 0 0 1.527-1.875v-11c0-.907-.637-1.69-1.527-1.875zm-3.806 1.875a3.416 3.416 0 0 1 4.111-3.344l5.223 1.084A3.415 3.415 0 0 1 22.128 6.5v11a3.415 3.415 0 0 1-2.722 3.344l-5.223 1.084a3.416 3.416 0 0 1-4.111-3.344z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.378 15.923a.75.75 0 0 1 .75.75c0 .94.762 1.702 1.703 1.702h2.852a.75.75 0 0 1 0 1.5H7.831a3.2 3.2 0 0 1-3.203-3.202.75.75 0 0 1 .75-.75M5.162 9.47a.75.75 0 0 0-1.06-.002l-2.009 2a.75.75 0 0 0 0 1.063l2.009 2A.75.75 0 0 0 5.16 13.47l-.722-.72h4.053a.75.75 0 0 0 0-1.5H4.439l.721-.718a.75.75 0 0 0 .002-1.06M4.628 7.327A3.2 3.2 0 0 1 7.83 4.125h2.852a.75.75 0 0 1 0 1.5H7.831c-.941 0-1.703.763-1.703 1.702a.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCheckOutOutline;
