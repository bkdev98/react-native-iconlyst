import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWinkingOutline = ({
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
      d="M10.241 9.27h-1.58a.75.75 0 0 1 0-1.5h1.58a.75.75 0 1 1 0 1.5M15.276 9.5a.976.976 0 0 1-.001-1.95.975.975 0 1 1 0 1.95M12.25 16.77a3.735 3.735 0 0 1-3.618-3.832.75.75 0 0 1 .75-.75h5.736a.75.75 0 0 1 .75.75 3.735 3.735 0 0 1-3.618 3.832m-2.006-3.082a2.063 2.063 0 0 0 4.012 0z"
    />
  </Svg>
);
export default IconlystWinkingOutline;
