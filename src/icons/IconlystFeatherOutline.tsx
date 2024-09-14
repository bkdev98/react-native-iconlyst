import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFeatherOutline = ({
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
      d="M3.25 21.405h-.03a.75.75 0 0 1-.72-.781c.08-.984.251-1.959.512-2.911a.75.75 0 0 1 .093-.344 20.9 20.9 0 0 1 13.46-14.24c2.096-.561 4.519-1 5.256.4.618 1.177-.34 2.994-3.1 5.894a57 57 0 0 1-3.81 3.61.74.74 0 0 1-.413.177l-3.755.369 1.143.9a.748.748 0 0 1-.034 1.2 14.1 14.1 0 0 1-7.49 2.782q-.271 1.092-.357 2.216a.75.75 0 0 1-.754.728m16.5-17.312c-.926.04-1.844.197-2.731.466A19.34 19.34 0 0 0 4.786 16.937a12.4 12.4 0 0 0 5.354-1.917l-1.79-1.421a.75.75 0 0 1 .393-1.334l5.369-.527c4.04-3.482 6.7-6.821 6.38-7.514 0 .004-.141-.131-.741-.131M17.379 21.406h-6.41a.75.75 0 1 1 0-1.5h6.41a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystFeatherOutline;
