import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMenu2Broken = ({
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
      d="M13.656 4.612a5.642 5.642 0 1 1 0 11.285 5.642 5.642 0 0 1-3.484-10.082M17.496 14.389l3.505 3.5M3 9.213h1.59M3 14.25h2.598M3 19.388h2.021M8.314 19.388h3.332"
    />
  </Svg>
);
export default IconlystSearchMenu2Broken;