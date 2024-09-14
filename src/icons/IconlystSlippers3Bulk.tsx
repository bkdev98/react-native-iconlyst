import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers3Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.169 10.736a4.35 4.35 0 0 0-4.77-3.86c-1.16.12-2.2.68-2.93 1.58s-1.07 2.03-.94 3.23c0 0 .82 4.23 1.28 6.51.36 1.72 1.93 2.96 3.68 2.96.13 0 .27 0 .4-.02 1.94-.21 3.39-1.81 3.38-3.73-.02-2.31-.1-6.62-.1-6.67M17.799 4.146a4.33 4.33 0 0 0-3.23.79c-.93.69-1.54 1.7-1.72 2.89 0 0-.28 4.31-.4 6.62-.1 1.92 1.28 3.58 3.21 3.88.19.03.39.04.58.04 1.7 0 3.2-1.13 3.62-2.8.57-2.25 1.58-6.43 1.59-6.47a4.355 4.355 0 0 0-3.65-4.95" />
    </G>
    <Path
      fill={props.color}
      d="M8.309 13.376c.32.26.79.21 1.05-.12.26-.32.21-.79-.11-1.05l-.93-.75-.06-.57a.766.766 0 0 0-.83-.67.75.75 0 0 0-.67.82l.04.39-1.88 1.06a.74.74 0 0 0-.28 1.02c.14.25.39.38.65.38.13 0 .25-.03.37-.09l1.86-1.05zM18.619 11.206c.25 0 .49-.12.63-.35.22-.35.12-.81-.23-1.03l-1.84-1.15.06-.39a.754.754 0 0 0-.63-.86.747.747 0 0 0-.85.63l-.09.58-.96.71a.75.75 0 0 0-.16 1.05c.24.33.71.4 1.05.16l.81-.6 1.81 1.14c.12.08.26.11.4.11"
    />
  </Svg>
);
export default IconlystSlippers3Bulk;
