import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLedgerBulk = ({
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
      d="M22 6v12c0 1.93-1.57 3.5-3.5 3.5h-12C4.57 21.5 3 19.93 3 18V6c0-1.93 1.57-3.5 3.5-3.5h12C20.43 2.5 22 4.07 22 6"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22 14.45v1.5h-5.56v5.55h-1.5v-5.55h-4.88v5.55h-1.5v-5.55H3v-1.5h5.56V9.56H3v-1.5h5.56V2.5h1.5v11.95z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLedgerBulk;
