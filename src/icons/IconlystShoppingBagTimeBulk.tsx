import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagTimeBulk = ({
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
      d="M18.06 12.37a5.64 5.64 0 0 1 2.46.564c.21.102.466-.045.466-.278V7.499c0-3.305-2.123-5.526-5.283-5.526H7.267c-3.159 0-5.28 2.221-5.28 5.526v7.948c0 3.305 2.121 5.526 5.28 5.526h5.362c.233 0 .38-.255.279-.464a5.64 5.64 0 0 1-.553-2.436 5.71 5.71 0 0 1 5.704-5.704"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.667 19.277a.69.69 0 0 1-.95.24l-1.031-.616a.7.7 0 0 1-.337-.595V16.98a.693.693 0 1 1 1.385 0v.93l.694.416a.69.69 0 0 1 .239.95M18.06 14.12a3.96 3.96 0 0 0-3.954 3.953 3.96 3.96 0 0 0 3.954 3.954 3.96 3.96 0 0 0 3.954-3.954 3.96 3.96 0 0 0-3.954-3.953"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.156 8.293a4.334 4.334 0 0 0 4.33 4.33 4.334 4.334 0 0 0 4.33-4.33.75.75 0 0 0-1.5 0c0 1.56-1.27 2.83-2.83 2.83a2.833 2.833 0 0 1-2.83-2.83.75.75 0 0 0-1.5 0"
    />
  </Svg>
);
export default IconlystShoppingBagTimeBulk;
