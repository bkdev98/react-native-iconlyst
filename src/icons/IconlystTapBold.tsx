import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapBold = ({
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
      d="M9.026 6.182v2.717a3.19 3.19 0 0 1-1.286-2.56c0-1.73 1.323-3.138 2.95-3.138 1.626 0 2.95 1.408 2.95 3.138 0 1.01-.478 1.937-1.238 2.524l-.042-2.707a1.668 1.668 0 0 0-3.334.026m10.056 6.937c-.902-2.437-4.034-2.432-6.348-2.622a.8.8 0 0 0 .246-.09c1.379-.843 2.236-2.403 2.236-4.068 0-2.6-2.03-4.714-4.526-4.714S6.164 3.74 6.164 6.339c0 1.698.882 3.272 2.302 4.107a.8.8 0 0 0 .399.11c.056 0 .106-.031.16-.043v5.234l-1.193-1.732a1.82 1.82 0 0 0-2.154-.667c-.887.34-1.362 1.305-1.039 2.199.604 1.667 1.563 3.527 2.795 5.06 1.943 2.416 7.877 2.255 10 .131 1.664-1.664 2.598-5.055 1.648-7.619"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapBold;
