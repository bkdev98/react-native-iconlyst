import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashFireLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.014 11.219h1.559M18.701 6.426l1.35-.78M18.701 16.016l1.35.779M5.13 11.219H3.573M6.442 6.426l-1.35-.78M6.442 16.016l-1.35.779M7.52 12.45l2.796-6.821a.43.43 0 0 1 .408-.285h3.748c.3 0 .509.296.41.579l-1.658 3.89c-.1.282.11.579.41.579h3.538c.373 0 .573.44.327.72l-6.72 7.67c-.303.346-.864.046-.746-.398l1.28-4.804a.434.434 0 0 0-.419-.546H7.928a.434.434 0 0 1-.408-.584"
    />
  </Svg>
);
export default IconlystFlashFireLight;
