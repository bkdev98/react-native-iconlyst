import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHboOutline = ({
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
      d="M10.277 9.457v1.793h1.838a.897.897 0 1 0 0-1.793zm3.782 2.3a2.397 2.397 0 0 0-1.944-3.8H9.893c-.616 0-1.116.5-1.116 1.116v5.855c0 .616.5 1.116 1.116 1.116h2.692a2.397 2.397 0 0 0 1.473-4.288m-3.782.993v1.794h2.308a.897.897 0 1 0 0-1.794zM2 7.957a.75.75 0 0 1 .75.75v2.543h3.205V8.707a.75.75 0 0 1 1.5 0v6.587a.75.75 0 0 1-1.5 0V12.75H2.75v2.544a.75.75 0 0 1-1.5 0V8.707a.75.75 0 0 1 .75-.75M19.23 9.457c-.998 0-2.02 1.012-2.02 2.543s1.021 2.543 2.02 2.543 2.02-1.011 2.02-2.543c0-1.531-1.02-2.543-2.02-2.543M15.71 12c0-2.106 1.46-4.043 3.52-4.043S22.75 9.894 22.75 12s-1.46 4.043-3.52 4.043-3.52-1.937-3.52-4.043"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHboOutline;
