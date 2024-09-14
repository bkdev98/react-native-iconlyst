import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleDataStudioBroken = ({
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
      d="M15.26 3.479h-2.966a2.121 2.121 0 1 0 0 4.242h6.943M13.066 10.164H6.123a2.121 2.121 0 1 0 0 4.243H9.17M19.238 17.236h-6.943a2.121 2.121 0 1 0 0 4.243h2.908"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.237 21.48a2.121 2.121 0 1 0 0-4.244 2.121 2.121 0 0 0 0 4.243M13.067 14.407a2.121 2.121 0 1 0 0-4.243 2.121 2.121 0 0 0 0 4.243M19.237 7.721a2.121 2.121 0 1 0 0-4.242 2.121 2.121 0 0 0 0 4.242"
    />
  </Svg>
);
export default IconlystGoogleDataStudioBroken;
