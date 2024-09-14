import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpectrumBulk = ({
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
      d="M16.217 2.5H7.782C4.622 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.603 16.827c-.002.487-.291.776-.783.778q-1.202.003-2.405.001-1.177.001-2.354-.001c-.512-.001-.795-.296-.804-.813-.01-.621.024-1.25-.06-1.861-.172-1.247-1.3-2.172-2.559-2.173q-.678.002-1.356 0-.886-.004-.887-.876v-4.63c0-.572.278-.856.845-.852 1.03.008 2.065-.065 3.084.154 2.896.626 5.031 2.249 6.369 4.897a8.4 8.4 0 0 1 .911 3.969c-.006.469.001.938-.001 1.407m-9.71-5.575V7.925c4.433-.45 8.582 3.21 8.198 8.167H12.74c.106-1.376-.199-2.616-1.207-3.625-1.009-1.01-2.258-1.297-3.639-1.215"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpectrumBulk;
