import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardLikeBulk = ({
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
      d="M20.226 14.85a.3.3 0 0 0 .3-.3V6.52A4.027 4.027 0 0 0 16.5 2.5H8.452a4.027 4.027 0 0 0-4.024 4.02v8.03a.3.3 0 0 0 .3.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.728 16.35a.3.3 0 0 0-.3.3v.83a4.025 4.025 0 0 0 4.024 4.02h8.049a4.025 4.025 0 0 0 4.024-4.02v-.83a.3.3 0 0 0-.3-.3zM15.706 7.793a2.11 2.11 0 0 0-1.328-1.241 2.2 2.2 0 0 0-1.046-.075c-.321.054-.612.246-.857.425-.235-.171-.533-.367-.856-.421a2.26 2.26 0 0 0-1.045.07c-1.341.435-1.754 1.902-1.38 3.068.584 1.874 3.099 3.065 3.206 3.115a.18.18 0 0 0 .152 0c.105-.05 2.582-1.22 3.2-3.112h.001a2.7 2.7 0 0 0-.047-1.83"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardLikeBulk;
