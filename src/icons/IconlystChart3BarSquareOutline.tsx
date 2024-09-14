import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChart3BarSquareOutline = ({
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
      d="M4.24 4.016c.985-1.057 2.388-1.648 4.043-1.648h8.435c1.66 0 3.062.591 4.046 1.648.978 1.051 1.486 2.502 1.486 4.13v7.946c0 1.628-.508 3.078-1.487 4.129-.984 1.057-2.387 1.647-4.046 1.647H8.283c-1.66 0-3.062-.59-4.046-1.647-.978-1.05-1.487-2.501-1.487-4.13V8.147c0-1.63.511-3.08 1.49-4.13m1.098 1.022c-.678.727-1.088 1.79-1.088 3.108v7.946c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.107V8.146c0-1.319-.409-2.382-1.084-3.108-.67-.72-1.66-1.17-2.948-1.17H8.283c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.665 7.34a.75.75 0 0 1 .75.75v8.053a.75.75 0 1 1-1.5 0V8.091a.75.75 0 0 1 .75-.75M8.334 8.574a.75.75 0 0 1 .75.75v6.82a.75.75 0 0 1-1.5 0v-6.82a.75.75 0 0 1 .75-.75m4.2 3.41a.75.75 0 0 1 .75.75v3.41a.75.75 0 1 1-1.5 0v-3.41a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChart3BarSquareOutline;
