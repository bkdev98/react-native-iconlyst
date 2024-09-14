import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpectrumBold = ({
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
      d="M17.603 17.336c-.002.487-.291.776-.783.778-.802.003-1.603 0-2.405 0q-1.177.001-2.354 0c-.512-.001-.795-.296-.804-.813-.01-.621.024-1.25-.06-1.861-.172-1.247-1.3-2.172-2.559-2.173q-.678.002-1.356 0-.886-.004-.887-.876V7.76c0-.572.278-.856.845-.852 1.03.008 2.065-.065 3.084.154 2.896.626 5.031 2.249 6.369 4.897a8.4 8.4 0 0 1 .911 3.969c-.006.469.001.938-.001 1.407M16.217 3.009H7.782c-3.16 0-5.282 2.223-5.282 5.53v7.94c0 3.308 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.893 8.434v3.327c1.381-.082 2.63.204 3.64 1.215 1.007 1.009 1.312 2.249 1.206 3.625h3.352c.384-4.957-3.765-8.618-8.198-8.167"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpectrumBold;
