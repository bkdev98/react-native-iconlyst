import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolarisOutline = ({
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
      d="M7.826 16.831a.75.75 0 0 1 0 1.061l-.97.971a.75.75 0 0 1-1.061-1.06l.97-.972a.75.75 0 0 1 1.061 0M17.443 16.81a.75.75 0 0 1 1.06 0l.973.97a.75.75 0 0 1-1.06 1.062l-.973-.971a.75.75 0 0 1 0-1.061M5.771 5.181a.75.75 0 0 1 1.06 0l.972.97a.75.75 0 0 1-1.06 1.061l-.971-.97a.75.75 0 0 1 0-1.06M19.455 5.16a.75.75 0 0 1 0 1.06l-.973.971a.75.75 0 0 1-1.06-1.06l.972-.972a.75.75 0 0 1 1.06 0M12.614 19.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M12.614 2.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M2.864 12a.75.75 0 0 1 .75-.75H4.66a.75.75 0 0 1 0 1.5H3.614a.75.75 0 0 1-.75-.75M19.82 12a.75.75 0 0 1 .75-.75h1.044a.75.75 0 1 1 0 1.5H20.57a.75.75 0 0 1-.75-.75M12.615 7.132a.75.75 0 0 1 .717.532 5.44 5.44 0 0 0 3.619 3.619.75.75 0 0 1 0 1.435 5.44 5.44 0 0 0-3.619 3.618.75.75 0 0 1-1.435 0 5.44 5.44 0 0 0-3.618-3.618.75.75 0 0 1 0-1.435 5.44 5.44 0 0 0 3.618-3.619.75.75 0 0 1 .718-.532M10.313 12a6.94 6.94 0 0 1 2.302 2.301 6.94 6.94 0 0 1 2.3-2.3 6.94 6.94 0 0 1-2.3-2.302A6.94 6.94 0 0 1 10.313 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.864 12c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.864 12m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPolarisOutline;
