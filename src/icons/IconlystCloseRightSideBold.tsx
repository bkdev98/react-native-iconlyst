import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseRightSideBold = ({
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
      d="M16.998 13.342a.75.75 0 1 1-1.061 1.061l-1.342-1.342-1.342 1.342a.749.749 0 1 1-1.06-1.061L13.535 12l-1.343-1.343a.749.749 0 1 1 1.061-1.06l1.342 1.342 1.343-1.342a.749.749 0 1 1 1.06 1.06L15.656 12zM16.216 2.5H9.592a.3.3 0 0 0-.3.3v18.4a.3.3 0 0 0 .3.3h6.625c3.16 0 5.283-2.221 5.283-5.526V8.026c0-3.305-2.124-5.526-5.284-5.526M7.782 2.8a.29.29 0 0 0-.3-.293C4.49 2.643 2.5 4.827 2.5 8.026v7.948c0 2.993 1.995 5.37 4.992 5.519.165.008.3-.127.3-.293z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloseRightSideBold;
