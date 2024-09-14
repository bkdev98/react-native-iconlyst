import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWinkingChatBold = ({
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
      d="M15.024 9.7a.976.976 0 0 1-.693-1.66.976.976 0 0 1 1.668.686.976.976 0 0 1-.975.974m-2.905 7.261c-1.913 0-3.47-1.656-3.47-3.69a.5.5 0 0 1 .5-.5h5.938a.5.5 0 0 1 .5.5c0 2.034-1.555 3.69-3.468 3.69M8.008 8.744a.75.75 0 0 1 .75-.75h1.48a.75.75 0 0 1 0 1.5h-1.48a.75.75 0 0 1-.75-.75m10.708-3.462c-3.703-3.705-9.731-3.704-13.434 0C2.474 8.09 1.71 12.397 3.369 15.977c.189.475.314.807.314 1.087 0 .332-.14.746-.277 1.146-.265.778-.565 1.66.079 2.303.647.647 1.53.342 2.31.074.397-.137.807-.278 1.13-.28.29.001.659.147 1.083.318a9.5 9.5 0 0 0 3.97.87 9.52 9.52 0 0 0 6.738-2.779 9.44 9.44 0 0 0 2.783-6.715 9.44 9.44 0 0 0-2.783-6.719"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWinkingChatBold;
