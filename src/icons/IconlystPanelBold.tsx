import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPanelBold = ({
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
      d="M15.224 17.625H8.777a.75.75 0 0 1 0-1.5h6.447a.75.75 0 0 1 0 1.5m-6.447-5.11h3.224a.75.75 0 0 1 0 1.5H8.777a.75.75 0 0 1 0-1.5m2.629-6.293c.269.132.567.213.887.213s.62-.082.89-.214l2.219 2.354h-6.22zm.887-2.347a.531.531 0 1 1-.529.53.53.53 0 0 1 .529-.53m5.199 4.752c-.016-.021-.023-.047-.041-.066l-3.259-3.457c.081-.219.132-.452.132-.699 0-1.119-.911-2.03-2.031-2.03a2.03 2.03 0 0 0-2.029 2.03c0 .248.051.483.133.702L7.133 8.561q-.004.007-.009.014h-.043c-2.315 0-3.87 1.623-3.87 4.039v4.971c0 2.416 1.555 4.04 3.87 4.04h9.836c2.316 0 3.872-1.624 3.872-4.04v-4.971c0-2.207-1.307-3.737-3.297-3.987"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPanelBold;
