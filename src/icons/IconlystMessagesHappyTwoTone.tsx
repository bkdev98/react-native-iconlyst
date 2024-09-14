import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesHappyTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.708 20.805a8.985 8.985 0 0 0 10.156-1.81c3.511-3.523 3.518-9.241 0-12.77a8.985 8.985 0 0 0-12.728 0c-2.749 2.759-3.344 6.847-1.802 10.19.197.494.35.892.35 1.278 0 1.078-1.035 2.412-.345 3.105.691.693 2.022-.346 3.09-.352.383 0 .786.16 1.279.359"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.943 14.147a3.645 3.645 0 0 0 6.675 0"
    />
  </Svg>
);
export default IconlystMessagesHappyTwoTone;
