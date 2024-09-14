import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileImageBroken = ({
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
      d="m7.836 15.68 1.361-1.436a.595.595 0 0 1 .874.012l1.126 1.254a.594.594 0 0 0 .895-.012l2.331-2.753a.594.594 0 0 1 .881-.028l1.86 1.929M9.127 10.625v.046m.187-.036a.188.188 0 1 1-.376 0 .188.188 0 0 1 .376 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.22 20.987H8.844c-3.364 0-5.345-1.979-5.345-5.333V8.34c0-3.351 1.232-5.328 4.588-5.328h1.875a2.14 2.14 0 0 1 1.71.856l.857 1.138a2.15 2.15 0 0 0 1.712.856h2.653c3.363 0 4.605 1.712 4.605 5.135l-.026 4.656c0 3.354-1.977 5.333-5.333 5.333h-.607"
    />
  </Svg>
);
export default IconlystFolderFileImageBroken;
