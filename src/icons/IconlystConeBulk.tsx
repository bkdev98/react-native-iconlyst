import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConeBulk = ({
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
      d="M20.23 16.07c0-.01 0-.01-.01-.02 0-.05-.02-.1-.05-.15L13.79 3.53C13.43 2.84 12.75 2.4 12 2.4c-.74 0-1.43.44-1.79 1.13L3.83 15.9c-.03.05-.05.1-.05.15-.01.01-.01.01-.01.02-.26.43-.4.88-.4 1.36 0 2.51 3.79 4.47 8.63 4.47s8.63-1.96 8.63-4.47c0-.48-.14-.93-.4-1.36"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M4.87 17.43c0 1.41 2.93 2.97 7.13 2.97s7.13-1.56 7.13-2.97c0-1.4-2.93-2.97-7.13-2.97s-7.13 1.57-7.13 2.97"
    />
  </Svg>
);
export default IconlystConeBulk;
