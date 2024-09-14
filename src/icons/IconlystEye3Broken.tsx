import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEye3Broken = ({
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
      d="M11.103 7.621c3.558-.464 7.355 1.244 9.147 5.126M4.25 12.746c.921-1.997 2.373-3.419 4.05-4.266M12.253 16.478a2.315 2.315 0 0 1-2.312-2.313 2.316 2.316 0 0 1 2.312-2.313 2.316 2.316 0 0 1 2.033 3.416"
    />
  </Svg>
);
export default IconlystEye3Broken;
