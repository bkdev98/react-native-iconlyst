import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileRightLight = ({
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
      d="M15.64 20.987c3.357 0 5.334-1.978 5.334-5.332L21 10.999c0-3.423-1.242-5.135-4.605-5.135h-2.653a2.15 2.15 0 0 1-1.712-.856l-.856-1.138a2.14 2.14 0 0 0-1.711-.856H7.588C4.232 3.014 3 4.99 3 8.342v7.313c0 3.354 1.981 5.332 5.345 5.332zM15.082 13.291l-2.209-2.2m2.209 2.2-2.209 2.199m2.209-2.199H8.918"
    />
  </Svg>
);
export default IconlystFolderFileRightLight;
