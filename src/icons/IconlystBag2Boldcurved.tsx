import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2Boldcurved = ({
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
      d="M16.78 7.145v.62c-.46-.1-.96-.19-1.5-.25v-.37c0-1.67-1.35-3.04-3.02-3.04h-.01c-1.67 0-3.03 1.36-3.03 3.02v.39c-.54.06-1.04.15-1.5.25v-.64c0-2.49 2.04-4.52 4.53-4.52h.01c2.5.01 4.53 2.04 4.52 4.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.77 14.915c0 5.58-2.49 7.55-9.52 7.55s-9.52-1.97-9.52-7.55c0-4.15 1.38-6.31 4.99-7.15v2.41c0 .42.33.75.75.75.41 0 .75-.33.75-.75v-2.66c.9-.11 1.91-.16 3.03-.16s2.13.05 3.03.16v2.66a.749.749 0 1 0 1.5 0v-2.41c3.61.84 4.99 3 4.99 7.15"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag2Boldcurved;
