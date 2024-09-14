import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownTwiceBold = ({
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
      d="M21.207 15.246a1 1 0 0 0-1.415 0l-2.254 2.255V4.082a1 1 0 1 0-2 0v13.423l-2.258-2.259a.999.999 0 1 0-1.414 1.414l3.963 3.964c.057.058.13.092.198.133.043.026.076.062.122.082q.183.076.386.078h.003c.047 0 .088-.021.134-.027.084-.012.17-.018.247-.05a1 1 0 0 0 .33-.223l3.957-3.957a1 1 0 0 0 0-1.414M12.376 8.009a1 1 0 0 0-1.415 0L9.084 9.886V4.082a1 1 0 1 0-2 0v5.804L5.207 8.009a.999.999 0 1 0-1.414 1.414l3.59 3.59.001.002.002.002c.004.001.001.002.003.002l.002.003h.001l.004.004.001.003h.001l.004.004.003.002.01.009.002.002.002.002.003.002.012.011q.123.105.268.165a1.01 1.01 0 0 0 .775-.005q.131-.056.248-.152l.004-.004.003-.002.01-.009.002-.002.002-.002.003-.002.002-.002c.005-.002.003-.002.003-.002l.01-.009c-.002-.003.002-.002.002-.002l.002-.002.002-.002.001-.002c.003-.002.001-.002.003-.002l.001-.001q.002 0 .002-.002l.002-.003q.002 0 .003-.002.003-.004.002-.002l.003-.003.002-.002.002-.002 3.585-3.585a1 1 0 0 0 0-1.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownTwiceBold;
