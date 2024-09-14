import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrelloBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.567 8.389H7.62a.227.227 0 0 0-.223.23v7.78c0 .124.098.22.223.22h1.946a.22.22 0 0 0 .223-.22v-7.78c0-.126-.1-.23-.223-.23M16.378 8.389h-1.946a.227.227 0 0 0-.223.23v3.89c0 .123.098.22.223.22h1.946a.22.22 0 0 0 .223-.22v-3.89c0-.126-.1-.23-.223-.23"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.101 12.509c0 .948-.773 1.72-1.723 1.72h-1.946c-.95 0-1.723-.772-1.723-1.72v-3.89c0-.954.773-1.73 1.723-1.73h1.946c.95 0 1.723.776 1.723 1.73zm-6.811 3.89c0 .949-.773 1.72-1.723 1.72H7.621c-.95 0-1.723-.771-1.723-1.72v-7.78c0-.954.773-1.73 1.723-1.73h1.946c.95 0 1.723.776 1.723 1.73zm4.927-13.39H7.782c-3.16 0-5.282 2.223-5.282 5.53v7.94c0 3.307 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrelloBold;
