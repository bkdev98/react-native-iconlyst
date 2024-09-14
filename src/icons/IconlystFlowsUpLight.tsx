import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowsUpLight = ({
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
      d="M16.236 14.647V7.235m0 0-3.177 3.177m3.177-3.177 3.176 3.177M16.236 21v-.01m0-3.166v-.011M7.764 13.588V3m0 0L4.588 6.176M7.764 3l3.177 3.176M7.764 19.941v-.01m0-3.166v-.01"
    />
  </Svg>
);
export default IconlystFlowsUpLight;
