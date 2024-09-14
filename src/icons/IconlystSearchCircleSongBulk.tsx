import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCircleSongBulk = ({
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
      d="M18.631 13.181c.99 0 1.899.315 2.657.837.182.124.44.04.486-.175a9.3 9.3 0 0 0 .207-1.926c0-5.238-4.262-9.5-9.5-9.5s-9.5 4.262-9.5 9.5 4.262 9.5 9.5 9.5c.73 0 1.438-.088 2.12-.246.213-.05.292-.31.164-.489a4.7 4.7 0 0 1-.894-2.741 4.766 4.766 0 0 1 4.76-4.76"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.632 19.451a1.511 1.511 0 1 1 1.51-1.51c0 .832-.677 1.51-1.51 1.51m3.307.851-.76-.758a3 3 0 0 0 .463-1.603c0-1.66-1.35-3.01-3.01-3.01s-3.01 1.35-3.01 3.01a3.014 3.014 0 0 0 4.467 2.634l.79.79a.747.747 0 0 0 1.062-.002.75.75 0 0 0-.002-1.06M14.8 10a3.3 3.3 0 0 1-1.055-.58l-.514 4.275c0 .004-.004.007-.004.011a2.857 2.857 0 0 1-3.17 2.481 2.83 2.83 0 0 1-1.903-1.071 2.84 2.84 0 0 1-.588-2.103 2.86 2.86 0 0 1 3.173-2.491c.488.059.925.249 1.3.517l.457-3.789a.75.75 0 0 1 1.471-.094c.013.045.308 1.09 1.306 1.42A.75.75 0 0 1 14.8 10m-4.403 2.002q.081 0 .162.01a1.353 1.353 0 1 1-.162-.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchCircleSongBulk;
