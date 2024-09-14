import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardLockOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M10.157 19.673H7.215A4.562 4.562 0 0 1 2.5 14.755V8.163a4.61 4.61 0 0 1 4.715-4.916h10.07A4.562 4.562 0 0 1 22 8.163v3.3a.75.75 0 1 1-1.5 0v-3.3a3.08 3.08 0 0 0-3.215-3.416H7.215A3.11 3.11 0 0 0 4 8.163v6.587a3.08 3.08 0 0 0 3.215 3.418h2.942a.75.75 0 1 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M19.21 21.323h-3.193a2.337 2.337 0 0 1-2.335-2.335v-1.792a2.34 2.34 0 0 1 2.335-2.335h3.193a2.34 2.34 0 0 1 2.335 2.335v1.792a2.337 2.337 0 0 1-2.335 2.335m-3.193-4.962a.836.836 0 0 0-.835.835v1.792a.837.837 0 0 0 .835.835h3.193a.836.836 0 0 0 .835-.835v-1.792a.836.836 0 0 0-.835-.835z"
    />
    <Path
      fill={props.color}
      d="M19.519 16.391a.75.75 0 0 1-.75-.75v-1.179a1.14 1.14 0 0 0-.348-.8 1.22 1.22 0 0 0-.822-.328 1.15 1.15 0 0 0-1.142 1.137v1.175a.75.75 0 1 1-1.5 0v-1.188a2.647 2.647 0 0 1 2.623-2.624 2.7 2.7 0 0 1 1.888.755 2.63 2.63 0 0 1 .8 1.869v1.188a.75.75 0 0 1-.749.745M21.25 10.049h-18a.75.75 0 1 1 0-1.5h18a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystCardLockOutline;
