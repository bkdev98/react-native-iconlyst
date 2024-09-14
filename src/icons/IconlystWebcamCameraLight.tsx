import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebcamCameraLight = ({
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
      d="M12 16.604A6.802 6.802 0 1 0 12 3a6.802 6.802 0 0 0 0 13.604"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.35 15.707 1.987 3.479A1.217 1.217 0 0 1 16.276 21H7.727a1.216 1.216 0 0 1-1.06-1.824l1.994-3.461"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.2 9.802a2.198 2.198 0 1 1-4.397 0 2.198 2.198 0 0 1 4.397 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebcamCameraLight;
