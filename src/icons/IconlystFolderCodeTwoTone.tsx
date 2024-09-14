import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderCodeTwoTone = ({
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
      d="M16.14 20.986c3.357 0 5.334-1.979 5.334-5.333l.026-4.656c0-3.423-1.242-5.135-4.605-5.135h-2.653a2.15 2.15 0 0 1-1.712-.857l-.856-1.137a2.14 2.14 0 0 0-1.711-.856H8.088C4.732 3.012 3.5 4.989 3.5 8.339v7.314c0 3.354 1.981 5.332 5.345 5.332z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.584 10.992 8.44 13.135l2.177 2.177M14.418 10.992l2.143 2.143-2.176 2.177"
    />
  </Svg>
);
export default IconlystFolderCodeTwoTone;
