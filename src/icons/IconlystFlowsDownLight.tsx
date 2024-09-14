import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowsDownLight = ({
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
      d="M7.764 9.353v7.412m0 0 3.177-3.177m-3.177 3.177-3.176-3.177M7.764 3v.01m0 3.166v.011M16.236 10.412V21m0 0 3.176-3.176M16.236 21l-3.176-3.176m3.176-13.765v.01m0 3.166v.01"
    />
  </Svg>
);
export default IconlystFlowsDownLight;
