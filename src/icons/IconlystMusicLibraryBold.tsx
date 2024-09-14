import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMusicLibraryBold = ({
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
      d="M15.57 16.788c0 .9-.72 1.62-1.62 1.62s-1.62-.72-1.62-1.62c0-.89.72-1.62 1.62-1.62.04 0 .08.01.12.01v-2.37c-.93.31-1.89.47-2.86.48v4.3c0 .9-.73 1.63-1.62 1.63-.9 0-1.63-.73-1.63-1.63 0-.89.73-1.62 1.63-1.62.04 0 .08.01.12.01v-3.47a.756.756 0 0 1 .81-.75c1.37.11 2.71-.14 3.99-.73.23-.11.5-.09.71.05.22.13.35.37.35.63zm1.34-8.7H7.08c-2.12 0-3.85 1.73-3.85 3.85v5.96c0 2.12 1.73 3.85 3.85 3.85h9.83a3.86 3.86 0 0 0 3.86-3.85v-5.96a3.86 3.86 0 0 0-3.86-3.85M6.54 6.671h10.915a.75.75 0 0 0 0-1.5H6.54a.75.75 0 0 0 0 1.5M8.919 3.752h6.155a.75.75 0 0 0 0-1.5H8.919a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMusicLibraryBold;
