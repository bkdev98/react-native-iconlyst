import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinWifiBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.776 10.527a7.526 7.526 0 1 0-15.052 0C4.724 15.882 11.045 21 12.25 21c.914 0 4.773-2.946 6.582-6.707"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.512 11.438a2.7 2.7 0 0 1 3.482-.005M8.831 9.323a5.48 5.48 0 0 1 6.838 0M12.25 13.496v.041"
    />
  </Svg>
);
export default IconlystPinWifiBroken;
