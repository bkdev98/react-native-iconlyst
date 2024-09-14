import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUltravioletSunTwoTone = ({
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
      d="M12.121 3.011v.032M5.777 5.65l.02.02m12.65 0 .045-.046m-6.37 15.366v-.032M5.776 18.35l.02-.02m-2.633-6.325h-.05m18 0h-.042m-2.626 6.325.046.046"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.522 9.495v3.36a1.65 1.65 0 0 1-3.3 0v-3.36M13.099 9.495l1.953 5.01 1.954-5.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUltravioletSunTwoTone;
