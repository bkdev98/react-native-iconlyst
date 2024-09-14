import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFlashOutline = ({
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
      d="M12.011 21.887c-.07 0-.15-.01-.22-.03-.32-.1-7.86-2.45-7.86-9.05 0-1.83-.02-3.16-.04-4.13-.04-2.43-.05-2.94.58-3.58.75-.75 6.45-2.71 7.53-2.71 1.14 0 6.76 1.94 7.53 2.71.63.64.62 1.15.58 3.58-.02.97-.04 2.29-.04 4.13 0 6.59-7.54 8.95-7.86 9.05a.8.8 0 0 1-.22.03zm0-18c-.8 0-5.89 1.8-6.49 2.28-.16.16-.17.49-.13 2.48.02.98.04 2.31.04 4.16 0 4.91 5.41 7.12 6.57 7.54 1.16-.42 6.57-2.63 6.57-7.54 0-1.84.02-3.17.04-4.15.04-1.99.03-2.32-.15-2.5-.57-.47-5.66-2.27-6.47-2.27z"
    />
    <Path
      fill={props.color}
      d="M11.961 16.888a1.201 1.201 0 0 1-1.2-1.19v-1.82h-1.68c-.45 0-.86-.25-1.06-.65s-.17-.88.1-1.24l2.98-4.1c.3-.42.84-.59 1.33-.43s.83.62.83 1.13v1.82h1.68c.45 0 .86.25 1.06.65s.17.88-.1 1.24l-2.98 4.1c-.23.31-.59.49-.96.49m-2.27-4.51h1.83c.41 0 .75.34.75.75v1.62l2.06-2.84h-1.83c-.41 0-.75-.34-.75-.75v-1.63l-2.06 2.84z"
    />
  </Svg>
);
export default IconlystShieldFlashOutline;
