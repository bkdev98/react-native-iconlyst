import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarMenuLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.194 4.422h7.62c2.652 0 4.294 1.472 4.286 4.179v8.213C20.1 19.52 18.458 21 15.807 21H8.194c-2.643 0-4.294-1.507-4.294-4.255V8.6c0-2.707 1.65-4.18 4.294-4.18M15.64 3v2.576M8.37 3v2.576M11.653 15.766h3.987m-7.28 0h.28M11.653 10.945h3.987m-7.28 0h.28"
    />
  </Svg>
);
export default IconlystCalendarMenuLight;
