import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMusicLibraryBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.48 8.088H7.65c-2.12 0-3.85 1.73-3.85 3.85v5.96c0 2.12 1.73 3.85 3.85 3.85h9.83a3.86 3.86 0 0 0 3.86-3.85v-5.96a3.86 3.86 0 0 0-3.86-3.85M7.11 6.671h10.915a.75.75 0 0 0 0-1.5H7.11a.75.75 0 0 0 0 1.5M9.489 3.752h6.155a.75.75 0 0 0 0-1.5H9.489a.75.75 0 0 0 0 1.5" />
    </G>
    <Path
      fill={props.color}
      d="M14.52 18.408c.9 0 1.62-.72 1.62-1.62v-5.08c0-.26-.13-.5-.35-.63a.72.72 0 0 0-.71-.05c-1.28.59-2.62.84-3.99.73a.756.756 0 0 0-.81.75v3.47c-.04 0-.08-.01-.12-.01-.9 0-1.63.73-1.63 1.62 0 .9.73 1.63 1.63 1.63.89 0 1.62-.73 1.62-1.63v-4.3c.97-.01 1.93-.17 2.86-.48v2.37c-.04 0-.08-.01-.12-.01-.9 0-1.62.73-1.62 1.62 0 .9.72 1.62 1.62 1.62"
    />
  </Svg>
);
export default IconlystMusicLibraryBulk;
