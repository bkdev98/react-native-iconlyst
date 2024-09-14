import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconBold = ({
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
      d="M16.732 7.91a.75.75 0 0 1-1.5 0c0-.414.336-.755.75-.755s.75.331.75.745zm-4.785 8.35a4.2 4.2 0 0 1-1.838-.415.751.751 0 0 1 .656-1.35c.356.174.765.265 1.182.265a2.715 2.715 0 0 0 2.712-2.71 2.65 2.65 0 0 0-.271-1.18.75.75 0 0 1 1.348-.66c.28.573.423 1.192.423 1.84 0 2.321-1.89 4.21-4.212 4.21m-2.835-2.111a.75.75 0 0 1-.998-.36 4.05 4.05 0 0 1-.378-1.739c0-2.316 1.89-4.2 4.212-4.2.612 0 1.211.128 1.73.371a.75.75 0 0 1-.634 1.359 2.6 2.6 0 0 0-1.096-.23 2.71 2.71 0 0 0-2.712 2.7c0 .399.079.769.235 1.101a.75.75 0 0 1-.359.998m-.431 1.811a.75.75 0 0 1-1.5 0c0-.414.336-.755.75-.755s.75.331.75.745zM12 2.5c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIconBold;
