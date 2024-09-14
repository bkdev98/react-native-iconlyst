import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarStickder2LineOutline = ({
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
      d="M4.79 4.953c.918-.874 2.197-1.281 3.654-1.281h7.62c1.46 0 2.74.407 3.658 1.282.923.88 1.383 2.14 1.378 3.648v6.002c0 .758-.292 1.486-.818 2.033l-4.042 4.211a2.94 2.94 0 0 1-2.119.903H8.444c-1.461 0-2.742-.418-3.66-1.308-.922-.894-1.384-2.171-1.384-3.697V8.6c0-1.508.464-2.769 1.39-3.648M5.822 6.04C5.26 6.574 4.9 7.403 4.9 8.6v8.146c0 1.222.364 2.073.928 2.62.568.55 1.434.885 2.616.885h5.677c.391 0 .765-.16 1.037-.442L19.2 15.6c.257-.268.4-.624.4-.995V8.6c.004-1.199-.354-2.027-.913-2.56-.564-.538-1.431-.867-2.623-.867h-7.62c-1.186 0-2.054.329-2.621.868"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.358 14.371h2.9219999999999997a.75.75 0 1 1 0 1.5h-2.919a1.98 1.98 0 0 0-1.974 1.98v3.086a.75.75 0 0 1-1.5 0v-3.085a3.48 3.48 0 0 1 3.471-3.48M7.645 10.457a.75.75 0 0 1 .75-.75h6.636a.75.75 0 1 1 0 1.5H8.395a.75.75 0 0 1-.75-.75m0 4.076a.75.75 0 0 1 .75-.75h2.915a.75.75 0 1 1 0 1.5H8.395a.75.75 0 0 1-.75-.75M8.62 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m7.27 0a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarStickder2LineOutline;
