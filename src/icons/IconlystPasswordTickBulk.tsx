import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordTickBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.16 11.744c1.346 0 2.585.466 3.57 1.237.185.146.466.053.492-.182q.038-.352.038-.715v-4.05c0-3.31-2.12-5.53-5.28-5.53H7.54c-3.16 0-5.28 2.22-5.28 5.53v4.05c0 3.3 2.12 5.53 5.28 5.53h3.5c.166 0 .3-.134.308-.3.157-3.05 2.7-5.57 5.812-5.57"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.16 20.643c-1.7 0-3.08-1.38-3.08-3.08s1.38-3.08 3.08-3.08 3.08 1.38 3.08 3.08-1.38 3.08-3.08 3.08m0-7.66c-2.52 0-4.58 2.06-4.58 4.58a4.58 4.58 0 1 0 4.58-4.58"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.334 16.173-1.597 1.6-.744-.748a.749.749 0 1 0-1.062 1.058l1.275 1.28a.75.75 0 0 0 1.062 0l2.127-2.129a.75.75 0 1 0-1.061-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.76 8.973c-.56 0-1.01.45-1.01 1.01 0 .55.45 1.01 1.01 1.01s1.01-.46 1.01-1.01c0-.56-.45-1.01-1.01-1.01M6.84 9.983c0 .55.46 1.01 1.01 1.01.56 0 1.02-.46 1.02-1.01a1.016 1.016 0 0 0-2.03 0M16.67 9.983c0-.56-.45-1.01-1.01-1.01-.55 0-1.01.45-1.01 1.01 0 .55.46 1.01 1.01 1.01.56 0 1.01-.46 1.01-1.01"
    />
  </Svg>
);
export default IconlystPasswordTickBulk;
