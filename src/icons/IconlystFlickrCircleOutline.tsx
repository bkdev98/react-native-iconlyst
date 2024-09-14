import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlickrCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.835 11.047h.002a.953.953 0 1 1-.952.955V12a.95.95 0 0 1 .95-.954m0-1.5H8.83a2.45 2.45 0 0 0-2.445 2.457l.75-.002-.75.001A2.452 2.452 0 0 0 11.29 12a2.453 2.453 0 0 0-2.453-2.453zm6.324 1.5h.003a.953.953 0 1 1-.953.955V12a.95.95 0 0 1 .95-.954m0-1.5h.003a2.453 2.453 0 1 1-2.453 2.457m2.45-2.457h-.004a2.45 2.45 0 0 0-2.446 2.457"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlickrCircleOutline;
