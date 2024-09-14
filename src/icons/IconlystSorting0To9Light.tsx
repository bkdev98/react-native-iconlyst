import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSorting0To9Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.834 15.434 8.501 18.1m0 0 2.666-2.666M8.501 18.1V7.434M19.167 18.099h-1.778a1.778 1.778 0 1 1 1.778-1.778v2.666c0 .982-.796 1.778-1.778 1.778h-1.261"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.39 10.988c.981 0 1.777-.797 1.777-1.778V6.543a1.777 1.777 0 1 0-3.556 0V9.21c0 .981.797 1.778 1.778 1.778"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSorting0To9Light;
