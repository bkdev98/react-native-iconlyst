import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBadgeBulk = ({
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
      d="M19.616 9.384a3.717 3.717 0 0 1-3.313-5.39.206.206 0 0 0-.092-.282 9.4 9.4 0 0 0-3.935-.848c-2.54 0-4.93.99-6.72 2.79-2.81 2.82-3.57 7.14-1.91 10.73.19.48.31.81.31 1.1 0 .33-.14.74-.28 1.15-.26.77-.56 1.66.08 2.3.65.65 1.53.35 2.31.08.4-.14.81-.28 1.14-.28.29 0 .66.15 1.06.31 1.28.59 2.64.88 3.99.88 2.47 0 4.92-.97 6.74-2.79 2.656-2.665 3.41-6.541 2.243-9.886a.206.206 0 0 0-.272-.118 3.7 3.7 0 0 1-1.351.254"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.616 7.884c.33 0 .63-.07.91-.2.77-.34 1.3-1.12 1.3-2.02 0-1.22-.99-2.22-2.21-2.22-.82 0-1.53.45-1.91 1.12-.19.32-.3.7-.3 1.1 0 1.23.99 2.22 2.21 2.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesBadgeBulk;
