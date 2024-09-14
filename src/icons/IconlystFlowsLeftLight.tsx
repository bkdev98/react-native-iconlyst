import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowsLeftLight = ({
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
      d="M14.647 7.765H7.235m0 0 3.177 3.176M7.235 7.765l3.177-3.177M21 7.765h-.01m-3.166 0h-.011M13.589 16.235H3m0 0 3.177 3.177M3 16.235l3.177-3.176m13.765 3.176h-.01m-3.167 0h-.01"
    />
  </Svg>
);
export default IconlystFlowsLeftLight;
