import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrinningOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M8.975 10a.975.975 0 1 1 0-1.95.975.975 0 0 1 0 1.95M15.475 10a.975.975 0 1 1 0-1.949.975.975 0 0 1 0 1.95M12.251 17.824a4.414 4.414 0 0 1-4.27-4.535.75.75 0 0 1 .75-.75h7.04a.75.75 0 0 1 .75.75 4.413 4.413 0 0 1-4.27 4.535M9.566 14.04a2.719 2.719 0 0 0 5.368 0z"
    />
  </Svg>
);
export default IconlystGrinningOutline;
