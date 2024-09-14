import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileTwoTone = ({
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
      d="M3.068 13.71h17.737"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.137 13.69c-.373-.414-.878-.795-1.497-1.153l-4.571-2.639c-2.097-1.21-4.048-.686-5.262 1.416l-1.317 2.28"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.64 20.986c3.357 0 5.334-1.979 5.334-5.333L21 10.997c0-3.423-1.242-5.135-4.605-5.135h-2.653a2.15 2.15 0 0 1-1.712-.856l-.856-1.138a2.14 2.14 0 0 0-1.711-.856H7.588C4.232 3.012 3 4.989 3 8.34v7.313c0 3.354 1.981 5.332 5.345 5.332z"
    />
  </Svg>
);
export default IconlystFolderFileTwoTone;
