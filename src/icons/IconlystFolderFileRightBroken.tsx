import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileRightBroken = ({
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
      d="m13.373 11.092 2.209 2.2-2.209 2.198M15.582 13.291H9.418"
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
export default IconlystFolderFileRightBroken;
