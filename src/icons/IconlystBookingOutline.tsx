import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookingOutline = ({
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
      d="M7.5 3.75A3.75 3.75 0 0 0 3.75 7.5V19c0 .69.56 1.25 1.25 1.25h11.504a3.746 3.746 0 0 0 3.746-3.746V7.496a3.746 3.746 0 0 0-3.746-3.746zM2.25 7.5c0-2.9 2.35-5.25 5.25-5.25h9.004a5.246 5.246 0 0 1 5.246 5.246v9.008a5.246 5.246 0 0 1-5.246 5.246H5A2.75 2.75 0 0 1 2.25 19z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.637 8.75a.25.25 0 0 0-.25.25v2.25h2.25a1.25 1.25 0 1 0 0-2.5zm4.266 2.808a2.75 2.75 0 0 0-2.267-4.308h-2A1.75 1.75 0 0 0 6.887 9v7c0 .414.337.75.75.75h4a2.75 2.75 0 0 0 1.267-5.192M8.387 12.75v2.5h3.25a1.25 1.25 0 1 0 0-2.5zM15.31 15.501a.97.97 0 1 1 1.94 0 .97.97 0 0 1-1.94 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookingOutline;
