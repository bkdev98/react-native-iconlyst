import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordBulkcurved = ({
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
      d="M12.25 2.25C5.052 2.25 2.5 4.802 2.5 12s2.552 9.75 9.75 9.75S22 19.199 22 12s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.01 13.852a.75.75 0 0 1-1.5 0V12.75h-1.328v1.102a.75.75 0 0 1-1.5 0V12.75h-2.116a2.6 2.6 0 0 1-2.479 1.852A2.604 2.604 0 0 1 6.487 12a2.604 2.604 0 0 1 2.6-2.601 2.6 2.6 0 0 1 2.48 1.85h5.693a.75.75 0 0 1 .75.75zM7.985 12c0-.608.495-1.102 1.104-1.102A1.104 1.104 0 0 1 10.19 12a1.103 1.103 0 0 1-2.205 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordBulkcurved;
