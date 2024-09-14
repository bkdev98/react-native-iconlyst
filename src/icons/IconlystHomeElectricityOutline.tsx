import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeElectricityOutline = ({
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
      d="M5.094 8.293a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h8.88a2.314 2.314 0 0 0 2.313-2.314V9.043a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.813 3.814h-8.88a3.814 3.814 0 0 1-3.814-3.814V9.043a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.659 3.682a3.13 3.13 0 0 1 3.878 0l7.526 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.958a1.63 1.63 0 0 0-2.018 0l-7.526 5.958a.75.75 0 0 1-.93-1.176z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.242 11.536v1.804a2.355 2.355 0 1 0 4.711 0v-1.804zm-1.5 1.804v-1.938c0-.754.612-1.366 1.366-1.366h4.98c.754 0 1.365.612 1.365 1.366v1.938a3.855 3.855 0 1 1-7.71 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.597 15.7a.75.75 0 0 1 .75.75v4.333a.75.75 0 0 1-1.5 0v-4.334a.75.75 0 0 1 .75-.75M10.978 11.535a.75.75 0 0 1-.75-.75V8.781a.75.75 0 0 1 1.5 0v2.004a.75.75 0 0 1-.75.75m3.24 0a.75.75 0 0 1-.75-.75V8.781a.75.75 0 1 1 1.5 0v2.004a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeElectricityOutline;
