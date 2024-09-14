import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSquare2Bulk = ({
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
      d="M16.217 2.5H7.782C4.622 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.579 16.222a.75.75 0 0 0 .75-.75v-3.4a5.33 5.33 0 0 0-.971-3.07.75.75 0 0 0-1.228.861c.457.652.699 1.416.699 2.21v3.4c0 .413.336.75.75.75M13.473 8.542a.746.746 0 0 0 .983-.398.75.75 0 0 0-.4-.983 5.3 5.3 0 0 0-2.055-.419A5.35 5.35 0 0 0 7.367 9.44a.75.75 0 1 0 1.302.744c.935-1.639 3.045-2.382 4.804-1.642M13.764 17.262a.75.75 0 0 0 .75-.75v-4.27a2.56 2.56 0 0 0-2.554-2.56 2.56 2.56 0 0 0-2.552 2.56v.48a.75.75 0 0 0 1.5 0v-.48c0-.584.472-1.06 1.052-1.06s1.054.476 1.054 1.06v4.27c0 .414.336.75.75.75"
    />
    <Path
      fill={props.color}
      d="M10.158 17.262a.75.75 0 0 0 .75-.75v-1.62a.75.75 0 0 0-1.5 0v1.62c0 .414.336.75.75.75M7.422 16.222a.75.75 0 0 0 .75-.75v-2.84a.75.75 0 0 0-1.5 0v2.84c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystTouchIdSquare2Bulk;
