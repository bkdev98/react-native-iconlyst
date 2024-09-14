import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWinkingChatBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.216 5.282c-3.703-3.705-9.73-3.704-13.434 0C2.974 8.09 2.21 12.397 3.87 15.977c.19.475.314.807.314 1.087 0 .332-.14.746-.277 1.146-.265.778-.565 1.66.08 2.303.646.647 1.53.342 2.31.074.396-.137.806-.278 1.13-.28.29.001.658.147 1.082.318a9.5 9.5 0 0 0 3.97.87 9.52 9.52 0 0 0 6.738-2.779A9.44 9.44 0 0 0 22 12.001a9.44 9.44 0 0 0-2.783-6.719"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.524 9.7a.976.976 0 0 1-.693-1.661.976.976 0 0 1 1.668.686.976.976 0 0 1-.975.975M12.62 16.961c-1.914 0-3.47-1.656-3.47-3.691a.5.5 0 0 1 .5-.5h5.937a.5.5 0 0 1 .5.5c0 2.035-1.555 3.691-3.468 3.691M8.508 8.744a.75.75 0 0 1 .75-.75h1.481a.75.75 0 0 1 0 1.5H9.26a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWinkingChatBulk;
