import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlateBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.99 9.156c.01.125.01.239.01.363 0 2.297-1.618 4.302-4.075 5.468.034.113.13.73.039.922-.125.238-.283 1.211-4.97 1.211M3.012 9.156C3 9.281 3 9.395 3 9.52c0 2.287 1.624 4.268 4.07 5.434-.035.124-.125.775-.035.956.093.178.205.767 2.21 1.053"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 11.008c-4.97 0-9-.923-9-2.06 0-1.139 4.03-2.061 9-2.061s9 .922 9 2.06c0 .825-2.118 1.537-5.177 1.866"
    />
  </Svg>
);
export default IconlystPlateBroken;
