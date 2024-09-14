import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard5Outline = ({
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
      d="M12.98 2.25a.75.75 0 0 1 .75.75v2.474a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m0 15.75a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75M3.23 12a.75.75 0 0 1 .75-.75h2.476a.75.75 0 0 1 0 1.5H3.98a.75.75 0 0 1-.75-.75m15.75 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75M12.506 8.675a.75.75 0 0 1 .95 0c.546.447 1.057 1.043 1.456 1.639.393.586.722 1.236.849 1.803.139.62.046 1.465-.362 2.172-.436.754-1.234 1.348-2.418 1.348s-1.982-.594-2.418-1.348c-.408-.707-.5-1.551-.362-2.172.127-.567.455-1.217.849-1.803.4-.596.91-1.192 1.456-1.639m-.21 2.474c-.343.512-.561.984-.631 1.296-.058.258-.02.716.197 1.093.19.33.515.6 1.119.6s.928-.27 1.119-.6c.218-.377.255-.835.197-1.093-.07-.312-.288-.784-.63-1.296a7 7 0 0 0-.686-.865 7 7 0 0 0-.685.865"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard5Outline;
