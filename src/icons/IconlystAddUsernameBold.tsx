import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUsernameBold = ({
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
      d="M12 2C6.486 2 2 6.487 2 12a1 1 0 1 0 2 0c0-4.411 3.589-8 8-8 4.486 0 8 3.514 8 8 0 .782-.166 2.6-1.7 2.6-.953 0-1.7-.746-1.7-1.699V8.6a1 1 0 0 0-1-1 .99.99 0 0 0-.933.667A4.56 4.56 0 0 0 12 7.401 4.604 4.604 0 0 0 7.4 12c0 2.537 2.063 4.6 4.6 4.6a4.57 4.57 0 0 0 3.359-1.479A3.68 3.68 0 0 0 18.3 16.6c2.247 0 3.7-1.806 3.7-4.6 0-5.607-4.393-10-10-10m0 12.6A2.57 2.57 0 0 1 9.4 12 2.57 2.57 0 0 1 12 9.401c1.458 0 2.6 1.141 2.6 2.599s-1.142 2.6-2.6 2.6"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.545 18.569C15.16 19.492 13.546 20 12 20c-.642 0-1.325-.095-1.784-.248a1 1 0 1 0-.633 1.896c.67.224 1.55.352 2.417.352 1.937 0 3.944-.628 5.654-1.768a1 1 0 1 0-1.109-1.664M4.5 20.1a1 1 0 1 0 2 0v-1.5H8a1 1 0 1 0 0-2H6.5v-1.5a1 1 0 1 0-2 0v1.5H3a1 1 0 1 0 0 2h1.5z"
    />
  </Svg>
);
export default IconlystAddUsernameBold;
