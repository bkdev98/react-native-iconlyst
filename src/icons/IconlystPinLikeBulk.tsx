import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinLikeBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.5c-4.425 0-8.026 3.6-8.026 8.026C3.974 16.162 10.566 21.5 12 21.5s8.026-5.338 8.026-10.974C20.026 6.1 16.425 2.5 12 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.36 14.514c.115-.063 2.804-1.557 3.45-3.618.52-1.628-.244-3.281-1.747-3.765a2.82 2.82 0 0 0-2.062.152 2.79 2.79 0 0 0-2.073-.15c-1.496.48-2.26 2.134-1.74 3.762h.001c.67 2.084 3.34 3.558 3.453 3.62a.74.74 0 0 0 .719-.001m.087-5.756a1.3 1.3 0 0 1 1.162-.198c.81.261 1.001 1.162.771 1.882-.329 1.044-1.612 2.045-2.38 2.54-.766-.49-2.042-1.486-2.383-2.545-.229-.716-.036-1.617.77-1.877a1.3 1.3 0 0 1 1.163.197.75.75 0 0 0 .897.001"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinLikeBulk;
