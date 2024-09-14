import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowsRightLight = ({
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
      d="M9.353 16.235h7.412m0 0-3.177-3.176m3.177 3.176-3.177 3.177M3 16.235h.01m3.166 0h.011M10.412 7.765H21m0 0-3.177-3.177M21 7.765l-3.177 3.176M4.06 7.765h.01m3.166 0h.01"
    />
  </Svg>
);
export default IconlystFlowsRightLight;
