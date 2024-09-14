import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceRocketTwoTone = ({
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
      d="M13.546 8.426a1.615 1.615 0 1 1 2.282 2.285 1.615 1.615 0 0 1-2.282-2.285"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.981 3.868C14.523 3.497 7.788 8.535 7.063 14.205c-.016.495.164.963.503 1.302l1.367 1.367c.338.338.807.52 1.302.502 5.67-.725 10.708-7.46 10.337-12.918a.627.627 0 0 0-.59-.59"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.532 14.176-.314 4.43c0 .385-.218.736-.562.909l-2.453 1.226a1.015 1.015 0 0 1-1.418-.587l-1.147-2.804M10.33 7.977l-4.433.284a1.02 1.02 0 0 0-.912.555l-1.244 2.445a1.016 1.016 0 0 0 .578 1.422l2.796 1.166M7.475 18.858c-.27 1.8-2.377 1.464-3.75 1.67.206-1.374-.118-3.469 1.681-3.739"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSpaceRocketTwoTone;
