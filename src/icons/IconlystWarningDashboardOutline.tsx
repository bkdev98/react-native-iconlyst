import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWarningDashboardOutline = ({
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
      d="M15.29 16.807H9.2c-.97 0-1.88-.52-2.38-1.36-.49-.84-.5-1.89-.02-2.74l3.05-5.42c.49-.86 1.41-1.4 2.4-1.4s1.91.54 2.4 1.4l3.05 5.42c.48.85.47 1.9-.02 2.74s-1.4 1.36-2.38 1.36zm-3.05-9.42c-.45 0-.87.24-1.09.64l-3.05 5.42c-.22.39-.21.86 0 1.25.22.38.64.62 1.08.62h6.09c.44 0 .86-.24 1.08-.62s.23-.86.01-1.25l-3.05-5.42c-.22-.39-.64-.64-1.09-.64z"
    />
    <Path
      fill={props.color}
      d="M12.25 21.746c-5.38 0-9.75-4.38-9.75-9.75s4.38-9.75 9.75-9.75S22 6.626 22 11.996s-4.38 9.75-9.75 9.75m0-18.01c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M12.25 12.215c-.41 0-.75-.34-.75-.75v-2.02c0-.41.34-.75.75-.75s.75.34.75.75v2.02c0 .41-.34.75-.75.75M12.25 14.346c-.41 0-.75-.33-.75-.75s.34-.76.75-.76.75.34.75.75-.34.75-.75.75z"
    />
  </Svg>
);
export default IconlystWarningDashboardOutline;
