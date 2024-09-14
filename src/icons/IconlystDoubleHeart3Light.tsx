import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart3Light = ({
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
      d="M17.558 13.032c-.002-2.514-1.693-4.857-4.328-4.858a4.26 4.26 0 0 0-1.957.48c-.605.314-1.067.95-1.461 1.506-.645-.218-1.391-.463-2.065-.366a4.3 4.3 0 0 0-1.87.744c-2.138 1.544-2.156 4.428-.692 6.472 2.29 3.253 8.112 3.99 8.112 3.99s4.24-3.925 4.26-7.968"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.261 9.557c-.26-.71-.428-1.462-.439-2.214 0-2.245 1.514-4.333 3.864-4.343.616.01 1.211.146 1.754.428.543.281.95.846 1.305 1.347.585-.199 1.242-.418 1.838-.324.605.083 1.18.302 1.681.657 1.9 1.389 1.92 3.959.616 5.786-.794 1.137-2.078 1.92-3.33 2.463"
    />
  </Svg>
);
export default IconlystDoubleHeart3Light;
