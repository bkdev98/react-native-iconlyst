import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPointingRightTwoTone = ({
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
      d="M15.498 12.427c-.224 2.352-.103 5.757-2.67 6.708-2.583.957-6.001.015-7.678-1.662-2.14-2.14-2.303-8.12.132-10.077 1.545-1.242 3.42-2.208 5.1-2.817.9-.326 1.872.153 2.215 1.048.304.792.026 1.689-.672 2.17L10.18 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.5 12.42 4.347-.067a1.68 1.68 0 0 0-.026-3.36h-9.639"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPointingRightTwoTone;
