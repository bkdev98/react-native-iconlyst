import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordBoldcurved = ({
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
      d="M18.01 13.852a.75.75 0 0 1-1.5 0V12.75h-1.328v1.102a.75.75 0 0 1-1.5 0V12.75h-2.116a2.6 2.6 0 0 1-2.479 1.852A2.604 2.604 0 0 1 6.486 12a2.604 2.604 0 0 1 2.601-2.601 2.6 2.6 0 0 1 2.479 1.851h5.694a.75.75 0 0 1 .75.75zM12.25 2.25C5.052 2.25 2.5 4.802 2.5 12s2.552 9.75 9.75 9.75S22 19.199 22 12s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.09 10.899c-.61 0-1.105.494-1.105 1.102a1.103 1.103 0 0 0 2.205 0c0-.607-.494-1.101-1.1-1.102"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordBoldcurved;
