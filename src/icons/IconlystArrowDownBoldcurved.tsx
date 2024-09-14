import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownBoldcurved = ({
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
      d="M18.75 12.57a1 1 0 0 0-1.354.405c-.961 1.782-2.727 4.242-4.151 5.158V4.5a1 1 0 1 0-2 0v13.628c-1.42-.91-3.153-3.326-4.14-5.153a1 1 0 0 0-1.76.949c.59 1.096 3.69 6.548 6.889 6.573q.006.002.01.003l.005-.001.007.001c3.195 0 6.308-5.478 6.899-6.576a1 1 0 0 0-.405-1.354"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownBoldcurved;
