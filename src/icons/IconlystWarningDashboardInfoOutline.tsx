import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWarningDashboardInfoOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 7.4a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2m-6.6 5.1a6.6 6.6 0 1 1 13.2 0 6.6 6.6 0 0 1-13.2 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 11.975a.75.75 0 0 1 .75.75v2.025a.75.75 0 0 1-1.5 0v-2.025a.75.75 0 0 1 .75-.75M6.35 5.665c.295.29.3.764.01 1.06a8.246 8.246 0 0 0 0 11.55.75.75 0 1 1-1.071 1.05 9.746 9.746 0 0 1 0-13.65.75.75 0 0 1 1.06-.01M18.15 5.665a.75.75 0 0 1 1.061.01 9.746 9.746 0 0 1 0 13.65.75.75 0 1 1-1.07-1.05 8.246 8.246 0 0 0 0-11.55.75.75 0 0 1 .01-1.06M11.356 10.315a.898.898 0 1 1 1.796 0 .898.898 0 0 1-1.796 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWarningDashboardInfoOutline;