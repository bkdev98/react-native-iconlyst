import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongPlusAddOutline = ({
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
      fill={props.color}
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a.75.75 0 1 1-1.5 0 8.25 8.25 0 1 0-8.25 8.25.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M10.984 16.81a2.853 2.853 0 1 1 2.831-2.513 2.857 2.857 0 0 1-2.83 2.512m0-4.206a1.355 1.355 0 1 0 .163.01 1 1 0 0 0-.165-.01z"
    />
    <Path
      fill={props.color}
      d="M13.07 14.958q-.045.001-.09-.005a.75.75 0 0 1-.654-.835l.756-6.266a.75.75 0 0 1 1.472-.093 2.17 2.17 0 0 0 1.3 1.42.75.75 0 1 1-.472 1.423 3.3 3.3 0 0 1-1.054-.58l-.517 4.276a.75.75 0 0 1-.74.66M18.458 21.218a.75.75 0 0 1-.75-.75V18.85H16.09a.75.75 0 0 1 0-1.5h1.618v-1.617a.75.75 0 1 1 1.5 0v1.617h1.618a.75.75 0 1 1 0 1.5h-1.618v1.62a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystSongPlusAddOutline;
