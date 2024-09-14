import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordHideOutline = ({
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
      d="M3.947 4.741c.957-1.027 2.32-1.6 3.926-1.6h8.153c1.61 0 2.973.573 3.93 1.6.95 1.022 1.443 2.43 1.443 4.009v2.164a.75.75 0 0 1-1.5 0V8.75c0-1.27-.393-2.29-1.042-2.986-.642-.69-1.591-1.123-2.831-1.123H7.873c-1.235 0-2.185.432-2.83 1.123C4.395 6.461 4 7.482 4 8.75v3.92c0 1.268.393 2.29 1.042 2.986.643.69 1.592 1.123 2.832 1.123h2.41a.75.75 0 0 1 0 1.5h-2.41c-1.61 0-2.974-.574-3.93-1.601-.95-1.021-1.444-2.43-1.444-4.008V8.75c0-1.58.496-2.988 1.448-4.009M21.237 13.853a.75.75 0 0 1 0 1.06l-6.294 6.294a.75.75 0 1 1-1.06-1.06l6.294-6.294a.75.75 0 0 1 1.06 0M21.548 16.839a.75.75 0 0 1 .391.986c-.86 1.992-2.464 3.365-4.38 3.365a.75.75 0 1 1 0-1.5c1.125 0 2.293-.815 3.003-2.46a.75.75 0 0 1 .986-.391"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.94 10.648a1.011 1.011 0 1 1 2.023 0 1.011 1.011 0 0 1-2.023 0M14.845 10.648a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.022 0M7.034 10.648a1.011 1.011 0 1 1 2.023 0 1.011 1.011 0 0 1-2.023 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M19.597 14.432a4.05 4.05 0 0 0-2.18-.565c-1.864.06-3.426 1.416-4.268 3.374a.75.75 0 0 0 0 .593 6.6 6.6 0 0 0 1.182 1.863l1.06-1.06a5 5 0 0 1-.728-1.1c.719-1.452 1.82-2.172 2.881-2.172.31 0 .625.062.933.187z"
    />
  </Svg>
);
export default IconlystPasswordHideOutline;
