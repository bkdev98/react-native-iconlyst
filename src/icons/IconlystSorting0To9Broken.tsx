import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSorting0To9Broken = ({
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
      d="m5.584 14.666 2.667 2.667m0 0 2.666-2.667m-2.666 2.667V6.666M17.14 17.333a1.778 1.778 0 1 1 1.777-1.778v2.667c0 .981-.795 1.778-1.777 1.778h-1.262M18.917 8.444a1.778 1.778 0 0 1-3.555 0V5.778a1.778 1.778 0 0 1 3.555 0"
    />
  </Svg>
);
export default IconlystSorting0To9Broken;
