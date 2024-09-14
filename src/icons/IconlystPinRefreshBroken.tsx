import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinRefreshBroken = ({
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
      d="m21.25 6.676-2.962-.685-.682 2.946"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.28 6.241a8.34 8.34 0 0 1 1.964 8.276M18.2 17.91a8.33 8.33 0 0 1-7.394 2.335M3.25 17.324l2.963.684.68-2.945"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.22 17.76a8.34 8.34 0 0 1-1.784-8.794M6.299 6.09a8.33 8.33 0 0 1 7.395-2.334"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 15.695c-.485 0-3.03-2.06-3.03-4.216a3.029 3.029 0 0 1 6.058 0c0 2.156-2.544 4.216-3.029 4.216"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.251 11.45v.047m.19-.037a.19.19 0 1 1-.381 0 .19.19 0 0 1 .38 0"
    />
  </Svg>
);
export default IconlystPinRefreshBroken;
