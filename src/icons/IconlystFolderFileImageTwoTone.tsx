import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileImageTwoTone = ({
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
      d="M16.14 20.987c3.357 0 5.334-1.978 5.334-5.332l.026-4.656c0-3.423-1.242-5.135-4.605-5.135h-2.653a2.15 2.15 0 0 1-1.712-.856l-.856-1.138a2.14 2.14 0 0 0-1.711-.856H8.088C4.732 3.014 3.5 4.99 3.5 8.342v7.313c0 3.354 1.981 5.332 5.345 5.332z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.836 15.68 1.361-1.436a.595.595 0 0 1 .874.012l1.126 1.254a.594.594 0 0 0 .895-.012l2.331-2.753a.594.594 0 0 1 .881-.028l1.86 1.929M9.127 10.625v.046m.187-.036a.188.188 0 1 1-.376 0 .188.188 0 0 1 .376 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFolderFileImageTwoTone;
