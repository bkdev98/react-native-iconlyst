import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebcamCameraBroken = ({
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
      d="M19.302 9.802a6.802 6.802 0 1 0-.617 2.835"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.85 15.707 1.986 3.479A1.217 1.217 0 0 1 16.776 21H13.91M9.161 15.715l-1.994 3.46A1.216 1.216 0 0 0 8.227 21h2.818M10.305 9.802a2.198 2.198 0 1 0 2.197-2.197"
    />
  </Svg>
);
export default IconlystWebcamCameraBroken;
