import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshTriangle2Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.522 17.234-1.467 1.475 1.467 1.46M8.398 11.864l-.527-2.012-2.002.523M15.123 10.914l2.007.553.549-1.994M17.13 11.461l-2.215-3.899M9.555 6.837l.978-1.647c.688-1.164 2.385-1.145 3.053.032M7.867 9.855l-2.264 3.87M7.662 18.726l-1.915-.021c-1.353-.013-2.186-1.49-1.503-2.658M11.06 18.714l4.485-.01M18.81 14.39l.953 1.662c.675 1.171-.175 2.64-1.528 2.643"
    />
  </Svg>
);
export default IconlystRefreshTriangle2Broken;
