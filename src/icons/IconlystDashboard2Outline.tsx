import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard2Outline = ({
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
      d="M12.98 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M3.23 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22.73 12c0 5.384-4.364 9.75-9.75 9.75-5.385 0-9.75-4.366-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.98 11.44a.56.56 0 1 0 0 1.12.56.56 0 0 0 0-1.12m-2.06.56a2.06 2.06 0 1 1 4.12 0 2.06 2.06 0 0 1-4.12 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.087 8.065a.75.75 0 0 1 0 1.061l-2.504 2.504a.75.75 0 0 1-1.06-1.061l2.503-2.504a.75.75 0 0 1 1.06 0M12.979 7.596A4.405 4.405 0 0 0 8.574 12a.75.75 0 0 1-1.5 0 5.905 5.905 0 0 1 5.905-5.905.75.75 0 0 1 0 1.5M18.135 11.25a.75.75 0 0 1 .75.75 5.905 5.905 0 0 1-5.905 5.905.75.75 0 0 1 0-1.5A4.405 4.405 0 0 0 17.386 12a.75.75 0 0 1 .75-.75M8.439 14.552a.75.75 0 0 1 1.052.137c.264.343.58.647.936.9a.75.75 0 0 1-.872 1.222 6 6 0 0 1-1.253-1.207.75.75 0 0 1 .137-1.052"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard2Outline;
