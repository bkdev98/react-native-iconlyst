import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextDirectionRTLLight = ({
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
      d="M19.59 19.424H5.41m0 0 2.342 2.341m-2.341-2.341 2.341-2.342M16.458 3.766H9.672a3.654 3.654 0 0 0 0 7.307h.522M14.37 15.249V3.765M10.195 15.249V3.765"
    />
  </Svg>
);
export default IconlystTextDirectionRTLLight;
