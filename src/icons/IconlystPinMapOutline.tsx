import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinMapOutline = ({
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
      d="M18.139 21.75H6.361a3.7 3.7 0 0 1-3.625-4.42l.93-4.643A3.7 3.7 0 0 1 7.29 9.715h9.92a3.71 3.71 0 0 1 3.625 2.972l.929 4.643a3.7 3.7 0 0 1-3.625 4.42M7.29 11.216a2.2 2.2 0 0 0-2.153 1.765l-.93 4.645a2.2 2.2 0 0 0 2.154 2.626h11.778a2.202 2.202 0 0 0 2.154-2.627l-.929-4.643a2.2 2.2 0 0 0-2.154-1.766z"
    />
    <Path
      fill={props.color}
      d="M20.267 20.84a.75.75 0 0 1-.4-.114L5.261 11.602a.75.75 0 1 1 .8-1.272l14.607 9.127a.75.75 0 0 1-.4 1.386z"
    />
    <Path
      fill={props.color}
      d="M4.295 20.901a.75.75 0 0 1-.365-1.406l8.512-4.729a.751.751 0 0 1 .73 1.312l-8.514 4.73a.74.74 0 0 1-.363.093M15.55 8.718a3.234 3.234 0 1 1 0-6.468 3.234 3.234 0 0 1 0 6.468m0-4.968a1.734 1.734 0 1 0 0 3.468 1.734 1.734 0 0 0 0-3.468"
    />
    <Path
      fill={props.color}
      d="M15.55 13.386a.75.75 0 0 1-.75-.75V7.969a.75.75 0 1 1 1.5 0v4.667a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystPinMapOutline;
