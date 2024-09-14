import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarMenuTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.694 4.422h7.62c2.652 0 4.294 1.472 4.286 4.179v8.213C20.6 19.52 18.958 21 16.307 21H8.694c-2.643 0-4.294-1.507-4.294-4.255V8.6c0-2.707 1.65-4.18 4.294-4.18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.14 3v2.576M8.87 3v2.576M12.153 15.766h3.987m-7.28 0h.28M12.153 10.945h3.987m-7.28 0h.28"
    />
  </Svg>
);
export default IconlystCalendarMenuTwoTone;
