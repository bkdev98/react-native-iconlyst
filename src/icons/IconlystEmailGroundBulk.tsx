import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailGroundBulk = ({
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
      d="m15.01 8.98-1.3 3.8c-.26.92-1.25 1.62-2.23 1.62-.1 0-.19 0-.29-.02l-3.98-.5a.737.737 0 0 1-.65-.83c.05-.42.43-.71.83-.65l4 .5c.35.05.79-.24.89-.56l1.31-3.84c.14-.39.56-.61.95-.47.4.14.6.56.47.95"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M17.08 18.69H5.42l-2.04-3.18c-.71-1.15-.99-2.44-.8-3.65.21-1.27.94-2.35 2.06-3.04l6.69-4.3c1.13-.7 2.42-.89 3.66-.54 1.19.34 2.23 1.16 2.93 2.3l2.7 4.29c1.51 2.44.97 5.32-1.26 6.69z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 19.448a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailGroundBulk;
