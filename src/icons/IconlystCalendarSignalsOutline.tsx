import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarSignalsOutline = ({
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
      fillRule="evenodd"
      d="M5.04 5.072c.918-.874 2.197-1.281 3.654-1.281h7.62c1.46 0 2.74.407 3.658 1.282.923.88 1.383 2.14 1.378 3.648v6.002c0 .758-.292 1.486-.818 2.033l-4.042 4.212a2.94 2.94 0 0 1-2.119.902H8.694c-1.461 0-2.742-.418-3.66-1.308-.922-.894-1.384-2.171-1.384-3.697V8.72c0-1.508.464-2.768 1.39-3.648M6.072 6.16c-.562.534-.923 1.363-.923 2.56v8.146c0 1.222.364 2.073.928 2.62.568.55 1.434.886 2.616.886h5.677c.391 0 .765-.16 1.037-.443l4.042-4.21c.257-.268.4-.624.4-.995V8.718c.004-1.198-.354-2.027-.913-2.56-.564-.538-1.431-.867-2.623-.867h-7.62c-1.186 0-2.054.33-2.621.868"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.608 14.49h2.9219999999999997a.75.75 0 1 1 0 1.5h-2.919a1.98 1.98 0 0 0-1.974 1.98v3.086a.75.75 0 0 1-1.5 0v-3.084a3.48 3.48 0 0 1 3.471-3.482M8.87 2.37a.75.75 0 0 1 .75.75v2.96a.75.75 0 0 1-1.5 0V3.12a.75.75 0 0 1 .75-.75m7.27 0a.75.75 0 0 1 .75.75v2.96a.75.75 0 0 1-1.5 0V3.12a.75.75 0 0 1 .75-.75M10.573 13.533a.75.75 0 0 1 .75.75v2.86a.75.75 0 1 1-1.5 0v-2.86a.75.75 0 0 1 .75-.75M13.188 15.62a.75.75 0 0 1 .75.75v.773a.75.75 0 1 1-1.5 0v-.773a.75.75 0 0 1 .75-.75M7.883 15.62a.75.75 0 0 1 .75.75v.773a.75.75 0 1 1-1.5 0v-.773a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.65 8.797a.75.75 0 0 1 .04 1.06l-2.699 2.906a.75.75 0 0 1-.96.117l-2.616-1.712-2.328 2.522a.75.75 0 1 1-1.102-1.017l2.758-2.99a.75.75 0 0 1 .962-.118l2.618 1.713 2.268-2.442a.75.75 0 0 1 1.06-.039"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarSignalsOutline;
