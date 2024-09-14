import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowSwitchHorizontalLight = ({
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
      d="M9.882 7.765h10.589m0 0-3.177-3.177m3.177 3.177-3.177 3.176M3.53 7.765h.01m3.167 0h.01M14.118 16.235H3.529m0 0 3.177-3.176m-3.177 3.176 3.177 3.177m13.765-3.177h-.011m-3.166 0h-.01"
    />
  </Svg>
);
export default IconlystFlowSwitchHorizontalLight;
