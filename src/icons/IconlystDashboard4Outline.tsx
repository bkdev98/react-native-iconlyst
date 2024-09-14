import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard4Outline = ({
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
      d="M12.98 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M3.23 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22.73 12a9.7 9.7 0 0 1-2.164 6.125.8.8 0 0 1-.128.156 9.73 9.73 0 0 1-7.457 3.469 9.73 9.73 0 0 1-7.46-3.472.8.8 0 0 1-.123-.149A9.7 9.7 0 0 1 3.23 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.98 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M19.875 5.106a.75.75 0 0 1 0 1.061l-1.59 1.59a.75.75 0 1 1-1.061-1.06l1.59-1.59a.75.75 0 0 1 1.061 0M6.087 5.106a.75.75 0 0 1 1.06 0l1.591 1.591a.75.75 0 0 1-1.06 1.06l-1.591-1.59a.75.75 0 0 1 0-1.06M3.23 12a.75.75 0 0 1 .75-.75h2.476a.75.75 0 0 1 0 1.5H3.98a.75.75 0 0 1-.75-.75M18.98 12a.75.75 0 0 1 .75-.75h2.251a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75M5.457 17.242a9.769 9.769 0 0 1 15.049 0 .75.75 0 1 1-1.153.96 8.27 8.27 0 0 0-6.372-2.997 8.27 8.27 0 0 0-6.372 2.997.75.75 0 1 1-1.152-.96"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.98 9.064a.75.75 0 0 1 .75.75v4.64a.75.75 0 0 1-1.5 0v-4.64a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard4Outline;
