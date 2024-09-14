import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinSqaureBold = ({
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
      d="M16.2 11.27c0 2.85-3.29 5.66-4.2 5.66-.92 0-4.21-2.81-4.21-5.66 0-2.32 1.89-4.2 4.21-4.2a4.2 4.2 0 0 1 4.2 4.2m.02-8.77H7.78C4.62 2.5 2.5 4.72 2.5 8.03v7.94c0 3.31 2.12 5.53 5.28 5.53h8.44c3.16 0 5.28-2.22 5.28-5.53V8.03c0-3.31-2.12-5.53-5.28-5.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.81 11.27c0 .65.53 1.19 1.19 1.19s1.19-.54 1.19-1.19c0-.66-.53-1.19-1.19-1.19s-1.19.53-1.19 1.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinSqaureBold;
