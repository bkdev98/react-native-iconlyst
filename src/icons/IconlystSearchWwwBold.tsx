import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchWwwBold = ({
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
      d="m14.071 10.289-1.09 2.5c-.11.26-.36.43-.64.45h-.05a.74.74 0 0 1-.64-.37l-.61-1.04-.6 1.03c-.14.25-.38.39-.69.38a.75.75 0 0 1-.64-.45l-1.1-2.5c-.17-.38.01-.82.39-.99.38-.16.82.01.98.39l.51 1.14.5-.86c.13-.23.38-.37.65-.37.26 0 .51.14.64.37l.51.86.5-1.14c.16-.38.61-.55.99-.39.38.17.55.61.39.99m4.57 2.58-.61-1.04-.59 1.03c-.14.24-.38.38-.65.38h-.04a.78.78 0 0 1-.65-.45l-1.09-2.5c-.17-.38 0-.82.38-.99.38-.16.82.01.99.39l.5 1.14.5-.86a.755.755 0 0 1 1.3 0l.51.86.31-.72v-.01a8.42 8.42 0 0 0-8.38-7.6c-4.49 0-8.15 3.51-8.4 7.94l.18.39.5-.86a.74.74 0 0 1 .64-.37h.01c.26 0 .51.14.64.37l.51.86.5-1.14a.749.749 0 1 1 1.37.6l-1.08 2.5a.746.746 0 0 1-1.33.08l-.61-1.04-.6 1.03c-.09.17-.25.29-.43.34 1 3.54 4.24 6.14 8.1 6.14 3.85 0 7.09-2.58 8.1-6.11a.73.73 0 0 1-.58-.36M20.985 19.793l-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchWwwBold;
