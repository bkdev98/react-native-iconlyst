import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchSpeedBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m16.15 10.741-2.94 2.94c-.14.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.94-2.94c.3-.29.77-.29 1.06 0 .3.29.3.77 0 1.06m-3.46-5.72c-4.5 0-8.16 3.66-8.16 8.16q0 .154.006.306c.006.16.138.284.298.284h3.355a1.993 1.993 0 0 1 1.994 2.147c-.016.2.127.393.327.393h.17a2 2 0 0 1 1.937 2.492c-.045.172.075.358.252.358.933 0 1.72.643 1.935 1.513.046.186.23.32.41.26 3.268-1.063 5.635-4.133 5.635-7.753 0-4.5-3.66-8.16-8.16-8.16M10.592 3.59H14.8a.75.75 0 0 0 0-1.5h-4.208a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.425 18.31a.75.75 0 0 0-.75-.75H6.384a.75.75 0 0 0 0 1.5h4.29a.75.75 0 0 0 .75-.75M12.864 20.41h-4.29a.75.75 0 0 0 0 1.5h4.29a.75.75 0 0 0 0-1.5M8.943 15.77a.75.75 0 0 0-.75-.75H3.9a.75.75 0 0 0 0 1.5h4.292a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchSpeedBold;
