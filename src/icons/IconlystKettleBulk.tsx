import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettleBulk = ({
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
      d="M14.003 3.75A5.765 5.765 0 0 0 8.24 9.513c0 .968.237 1.872.652 2.681q.033.048.055.092v.002l.18.275a.75.75 0 1 1-1.259.817l-.23-.355-.034-.058a7.34 7.34 0 0 1-.864-3.454 7.265 7.265 0 0 1 7.263-7.263 7.265 7.265 0 0 1 7.263 7.263c0 1.408-.4 2.75-1.124 3.87l-.178.28a.75.75 0 1 1-1.266-.805l.183-.289c.565-.87.885-1.93.885-3.056a5.765 5.765 0 0 0-5.763-5.763m-5.757 8.877h.004z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.642 12.696a1 1 0 0 0-.067.122c-.789 1.21-1.25 2.643-1.248 4.114 0 .666.106 1.35.2 1.962q.046.297.083.568a2.35 2.35 0 0 0 2.342 2.037l9.722-.067c.685-.005 1.248-.274 1.652-.716.387-.424.594-.967.678-1.497.08-.491.147-1.004.185-1.526.12-1.65-.17-3.268-.94-4.653-.374-.674-.44-.768-.972-1.344a7.3 7.3 0 0 0-1.427-1.19 7.3 7.3 0 0 0-2.198-.946q.129-.332.13-.707a1.974 1.974 0 1 0-3.799.75 7.57 7.57 0 0 0-3.27 1.84c-.57.546-.655.639-1.07 1.253m10.181-.33a6 6 0 0 0-.782-.597c-2.271-1.453-5.161-1.132-7.116.597zm-4.014-3.987a.473.473 0 1 0 0 .947.473.473 0 0 0 0-.947"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M5.265 16.01a7.6 7.6 0 0 1 1.212-3.693l-1.257-1.02a.53.53 0 0 0-.605-.109l-1.307.56a.534.534 0 0 0-.225.77z"
    />
  </Svg>
);
export default IconlystKettleBulk;
