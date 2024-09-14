import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRemoveBulk = ({
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
      d="M7.03 2.654h9.94c2.5 0 4.53 2.04 4.53 4.53v5.46c0 2.5-2.03 4.53-4.53 4.53H7.03c-2.5 0-4.53-2.03-4.53-4.53v-5.46c0-2.49 2.03-4.53 4.53-4.53"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.52 12.534c.29-.29.29-.77 0-1.06l-1.46-1.46 1.46-1.45c.29-.3.29-.77 0-1.06-.3-.3-.77-.3-1.06 0L12 8.954l-1.46-1.45c-.29-.3-.76-.3-1.06 0-.29.29-.29.76 0 1.06l1.46 1.45-1.46 1.46c-.29.29-.29.77 0 1.06.3.29.77.29 1.06 0l1.46-1.46 1.46 1.46c.14.15.33.22.53.22.19 0 .38-.07.53-.22M9.043 17.177l-.434 2.668H7.056a.75.75 0 0 0 0 1.5h9.888a.75.75 0 0 0 0-1.5h-1.552l-.435-2.668h-1.519l.434 2.668h-3.743l.433-2.668z"
    />
  </Svg>
);
export default IconlystMonitorDisplayRemoveBulk;
