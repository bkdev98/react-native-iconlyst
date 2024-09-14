import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaRefreshOutline = ({
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
      d="M18.62 4.075c.694-.693 1.88-.201 1.88.779v14.294a1.1 1.1 0 0 1-1.1 1.1H5.103c-.981 0-1.471-1.185-.778-1.878l1.465-1.465a.75.75 0 1 0-1.061-1.06L3.265 17.31c-1.639 1.638-.477 4.439 1.84 4.439h14.294a2.6 2.6 0 0 0 2.6-2.6V4.853c0-2.317-2.8-3.477-4.439-1.84L16.315 4.26a.75.75 0 1 0 1.06 1.06z"
    />
    <Path
      fill={props.color}
      d="M9.617 7.323a.75.75 0 1 0-1.5 0v1.953a.75.75 0 0 0 .798.765h1.93a.75.75 0 1 0 0-1.5h-.34a2.822 2.822 0 0 1 4.38 2.357 2.824 2.824 0 0 1-5.242 1.46.75.75 0 0 0-1.282.778q.104.171.222.33A4.324 4.324 0 1 0 9.617 7.33z"
    />
  </Svg>
);
export default IconlystAntenaRefreshOutline;
