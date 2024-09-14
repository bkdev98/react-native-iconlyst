import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePhotosCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 8.805a2.5 2.5 0 0 1 2.5 2.5V12H7v-.696a2.5 2.5 0 0 1 2.5-2.5M14.5 15.197a2.5 2.5 0 0 1-2.5-2.5V12h5v.697a2.5 2.5 0 0 1-2.5 2.5M8.802 14.5a2.5 2.5 0 0 1 2.5-2.5h.697v5h-.697a2.5 2.5 0 0 1-2.5-2.5M15.197 9.5a2.5 2.5 0 0 1-2.5 2.5H12V7h.697a2.5 2.5 0 0 1 2.5 2.5"
    />
  </Svg>
);
export default IconlystGooglePhotosCircleTwoTone;
