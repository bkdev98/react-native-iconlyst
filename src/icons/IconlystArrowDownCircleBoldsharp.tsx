import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownCircleBoldsharp = ({
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
      d="m12.25 15.106-4.53-4.551 1.063-1.058 3.467 3.483 3.467-3.483 1.063 1.058zm0-12.856C6.874 2.25 2.5 6.624 2.5 12s4.374 9.75 9.75 9.75S22 17.376 22 12s-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownCircleBoldsharp;
