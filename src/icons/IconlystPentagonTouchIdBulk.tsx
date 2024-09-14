import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPentagonTouchIdBulk = ({
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
      d="m20.694 7.257-3.955-3.952a2.78 2.78 0 0 0-1.947-.805H9.21c-.724 0-1.434.293-1.951.806L3.306 7.26A2.77 2.77 0 0 0 2.5 9.21v5.58c0 .73.286 1.422.809 1.953l3.952 3.953c.516.51 1.226.804 1.949.804h5.582c.722 0 1.432-.294 1.949-.806l3.955-3.953a2.77 2.77 0 0 0 .804-1.951V9.21c0-.731-.285-1.424-.806-1.953"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.527 16.18a.75.75 0 0 0 .75-.75v-3.36a5.26 5.26 0 0 0-.962-3.04.749.749 0 1 0-1.227.861c.451.643.69 1.395.69 2.18v3.36c0 .413.335.75.75.75M13.461 8.584a.75.75 0 1 0 .568-1.388c-2.466-1.007-5.342.02-6.617 2.264a.75.75 0 0 0 1.304.741c.914-1.606 2.96-2.348 4.745-1.617M13.745 17.21a.75.75 0 0 0 .75-.75v-4.23a2.533 2.533 0 0 0-5.065 0v.48a.75.75 0 0 0 1.5 0v-.48a1.032 1.032 0 0 1 2.065 0v4.23c0 .414.336.75.75.75"
    />
    <Path
      fill={props.color}
      d="M10.18 17.21a.75.75 0 0 0 .75-.75v-1.61a.75.75 0 0 0-1.5 0v1.61c0 .414.336.75.75.75M7.477 16.18a.75.75 0 0 0 .75-.75v-2.8a.75.75 0 0 0-1.5 0v2.8c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystPentagonTouchIdBulk;
