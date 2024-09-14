import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorCircleOutline = ({
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
      fillRule="evenodd"
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12c0 5.384-4.365 9.75-9.75 9.75S2.5 17.384 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.246 7.557a.75.75 0 0 1 .75.75v4.3a.75.75 0 0 1-1.5 0v-4.3a.75.75 0 0 1 .75-.75m.004 7.387a.75.75 0 0 1 .75.75v.048a.75.75 0 0 1-1.5 0v-.048a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystErrorCircleOutline;