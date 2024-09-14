import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCutTrimOutline = ({
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
      d="M5.033 5.042C4.4 5.632 4 6.505 4 7.652v8.694c0 1.141.4 2.014 1.034 2.606.64.597 1.58.963 2.751.963h1.18a.75.75 0 0 1 0 1.5h-1.18c-1.483 0-2.81-.467-3.774-1.366-.97-.904-1.511-2.19-1.511-3.703V7.65c0-1.517.54-2.803 1.511-3.707.964-.898 2.292-1.362 3.774-1.362h1.18a.75.75 0 1 1 0 1.5h-1.18c-1.172 0-2.112.364-2.752.96M14.79 3.332a.75.75 0 0 1 .75-.75h1.169c1.486 0 2.814.464 3.778 1.363.97.904 1.508 2.19 1.508 3.707v8.694c0 1.516-.538 2.803-1.508 3.707-.964.898-2.292 1.362-3.778 1.362h-1.17a.75.75 0 1 1 0-1.5h1.17c1.177 0 2.117-.364 2.755-.96.633-.589 1.03-1.461 1.03-2.61V7.653c0-1.148-.398-2.02-1.03-2.61-.638-.596-1.578-.96-2.755-.96h-1.17a.75.75 0 0 1-.75-.75M12.25 2.64a.75.75 0 0 1 .75.75v1.914a.75.75 0 0 1-1.5 0V3.39a.75.75 0 0 1 .75-.75m0 5.131a.75.75 0 0 1 .75.75v1.913a.75.75 0 0 1-1.5 0V8.521a.75.75 0 0 1 .75-.75m0 5.39a.75.75 0 0 1 .75.75v1.914a.75.75 0 0 1-1.5 0v-1.913a.75.75 0 0 1 .75-.75m0 4.783a.75.75 0 0 1 .75.75v1.913a.75.75 0 0 1-1.5 0v-1.913a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.9 2.7a.75.75 0 0 1 .75.75v17.104a.75.75 0 0 1-1.5 0V3.448a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.525 7.691a.75.75 0 0 1 .75-.75h3.621a.75.75 0 1 1 0 1.5H3.275a.75.75 0 0 1-.75-.75m-.004 4.29a.75.75 0 0 1 .75-.75H6.9a.75.75 0 0 1 0 1.5H3.27a.75.75 0 0 1-.75-.75m.004 4.284a.75.75 0 0 1 .75-.75h3.621a.75.75 0 0 1 0 1.5H3.275a.75.75 0 0 1-.75-.75M17.598 2.7a.75.75 0 0 1 .75.75v17.104a.75.75 0 0 1-1.5 0V3.448a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.85 7.695a.75.75 0 0 1 .75-.75h3.646a.75.75 0 0 1 0 1.5h-3.645a.75.75 0 0 1-.75-.75m-.004 4.29a.75.75 0 0 1 .75-.75h3.653a.75.75 0 0 1 0 1.5h-3.653a.75.75 0 0 1-.75-.75m.005 4.284a.75.75 0 0 1 .75-.75h3.645a.75.75 0 0 1 0 1.5h-3.645a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoCutTrimOutline;
