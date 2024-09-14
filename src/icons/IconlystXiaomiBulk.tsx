import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXiaomiBulk = ({
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
      d="M21 2.5H3a.5.5 0 0 0-.5.5v18c0 .277.223.5.5.5h18a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.16 15.52a.75.75 0 0 0 .75-.75V9.23a.75.75 0 0 0-1.5 0v5.54c0 .415.336.75.75.75M13.388 15.52a.75.75 0 0 0 .75-.75v-3.688a2.603 2.603 0 0 0-2.599-2.602H7.842a.75.75 0 0 0-.75.75v5.54a.75.75 0 0 0 1.5 0V9.98h2.947c.605 0 1.099.495 1.099 1.101v3.69c0 .413.335.75.75.75"
    />
    <Path
      fill={props.color}
      d="M10.613 15.52a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-1.5 0v2.77c0 .415.336.75.75.75"
    />
  </Svg>
);
export default IconlystXiaomiBulk;
