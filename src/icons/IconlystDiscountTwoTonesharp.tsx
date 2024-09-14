import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountTwoTonesharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m9.908 14.669 4.475-4.475M14.316 14.606h.008M9.965 10.254h.007"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M12.25 3.285a7.01 7.01 0 0 0 6.54 2.709 7.01 7.01 0 0 0 2.71 6.54 7.01 7.01 0 0 0-2.71 6.541 7.01 7.01 0 0 0-6.54 2.71 7.01 7.01 0 0 0-6.54-2.71A7.01 7.01 0 0 0 3 12.535a7.01 7.01 0 0 0 2.71-6.541 7.01 7.01 0 0 0 6.54-2.71Z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDiscountTwoTonesharp;
