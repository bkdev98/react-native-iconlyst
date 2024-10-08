import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextAiOutline = ({
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
      d="M3.74 5.382c.985-1.056 2.387-1.647 4.042-1.647h5.489a.75.75 0 0 1 0 1.5H7.782c-1.284 0-2.273.45-2.945 1.17-.677.727-1.087 1.79-1.087 3.106v5.616c0 1.318.409 2.38 1.085 3.107.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.107v-2.67a.75.75 0 0 1 1.5 0v2.67c0 1.628-.509 3.078-1.487 4.13-.985 1.056-2.387 1.647-4.047 1.647H7.782c-1.66 0-3.062-.591-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.129V9.511c0-1.628.511-3.078 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.291 11.402a.75.75 0 0 1 .75-.75h1.92a.75.75 0 0 1 0 1.5H7.04a.75.75 0 0 1-.75-.75m0 3.76a.75.75 0 0 1 .75-.75h7.23a.75.75 0 0 1 0 1.5H7.04a.75.75 0 0 1-.75-.75M18.404 9.795a.75.75 0 0 0 .704-.49l.1-.273a3.01 3.01 0 0 1 1.78-1.782l.273-.101a.75.75 0 0 0 0-1.407l-.273-.1a3.01 3.01 0 0 1-1.78-1.782l-.1-.274a.75.75 0 0 0-1.407 0l-.101.274A3.01 3.01 0 0 1 15.82 5.64l-.273.101a.75.75 0 0 0 0 1.407l.273.101A3.01 3.01 0 0 1 17.6 9.032l.1.273a.75.75 0 0 0 .704.49m-.948-3.35c.361-.267.681-.587.948-.949.268.362.587.682.949.95a4.5 4.5 0 0 0-.949.95 4.5 4.5 0 0 0-.948-.95M13.902 12.152a.75.75 0 0 0 .717-.532 1.02 1.02 0 0 1 .678-.679.75.75 0 0 0 0-1.435 1.02 1.02 0 0 1-.678-.679.75.75 0 0 0-1.435 0 1.02 1.02 0 0 1-.678.68.75.75 0 0 0 0 1.434c.325.099.58.353.678.68a.75.75 0 0 0 .718.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTextAiOutline;
