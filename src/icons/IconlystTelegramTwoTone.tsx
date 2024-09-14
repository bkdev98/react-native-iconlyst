import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegramTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.14 5.197c-.26-.203-.64-.32-1.274-.108L4.508 10.6c-.301.111-.64.193-.865.438-.282.33-.126.907.28 1.057.995.38 2.017.687 3.014 1.06.585.202 1.075.082 1.546-.147 2.592-1.26 5.227-2.67 7.676-4.185"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.14 5.195c.466.354.388.89.27 1.39-.826 3.726-1.632 7.456-2.462 11.18-.07.255-.08.534-.23.761-.454.713-1.225.561-1.798.158-1.53-1.098-3.05-2.209-4.582-3.303-.878-.653-.854-1.092-.093-1.81 1.62-1.602 3.303-3.138 4.914-4.748"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTelegramTwoTone;
