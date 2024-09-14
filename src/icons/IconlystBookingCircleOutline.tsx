import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookingCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.568 8.75a.25.25 0 0 0-.25.25v2.25h2.25a1.25 1.25 0 1 0 0-2.5zm4.267 2.808a2.75 2.75 0 0 0-2.266-4.308h-2A1.75 1.75 0 0 0 6.818 9v7c0 .414.335.75.75.75h4a2.75 2.75 0 0 0 1.266-5.192M8.318 12.75v2.5h3.25a1.25 1.25 0 1 0 0-2.5zM15.241 15.501a.97.97 0 1 1 1.94 0 .97.97 0 0 1-1.94 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookingCircleOutline;
