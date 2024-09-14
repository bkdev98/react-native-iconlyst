import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLedgerOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.25 3.75A2.25 2.25 0 0 0 4 6v12a2.25 2.25 0 0 0 2.25 2.25h12A2.25 2.25 0 0 0 20.5 18V6a2.25 2.25 0 0 0-2.25-2.25zM2.5 6a3.75 3.75 0 0 1 3.75-3.75h12A3.75 3.75 0 0 1 22 6v12a3.75 3.75 0 0 1-3.75 3.75h-12A3.75 3.75 0 0 1 2.5 18z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 2.5 9M15.25 14.25A.75.75 0 0 1 16 15v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 15a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2.5 15"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.25 2.25A.75.75 0 0 1 10 3v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLedgerOutline;
