import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongSlideOutline = ({
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
      d="M15.25 20.814H9.267a3.88 3.88 0 0 1-3.875-3.875V7.063a3.88 3.88 0 0 1 3.875-3.875h5.985a3.88 3.88 0 0 1 3.875 3.875v9.877a3.88 3.88 0 0 1-3.875 3.874M9.267 4.688A2.38 2.38 0 0 0 6.89 7.063v9.877a2.38 2.38 0 0 0 2.375 2.374h5.985a2.377 2.377 0 0 0 2.375-2.375V7.063a2.377 2.377 0 0 0-2.375-2.375z"
    />
    <Path
      fill={props.color}
      d="M6.141 17.963H5.59a3.1 3.1 0 0 1-3.09-3.1V9.127a3.1 3.1 0 0 1 3.09-3.1h.551a.75.75 0 0 1 0 1.5H5.59A1.6 1.6 0 0 0 4 9.127v5.736a1.6 1.6 0 0 0 1.59 1.6h.551a.75.75 0 0 1 0 1.5M11.713 16.23a2.49 2.49 0 1 1 0-4.98 2.49 2.49 0 0 1 0 4.98m0-3.48a.99.99 0 1 0 0 1.986.99.99 0 0 0 0-1.988z"
    />
    <Path
      fill={props.color}
      d="M13.45 14.491a.75.75 0 0 1-.75-.75V8.52a.75.75 0 0 1 1.45-.269 1.68 1.68 0 0 0 1.116.957.75.75 0 1 1-.3 1.47 2.9 2.9 0 0 1-.769-.274v3.338a.75.75 0 0 1-.748.75M18.91 17.963h-.55a.75.75 0 1 1 0-1.5h.55a1.6 1.6 0 0 0 1.59-1.6V9.127a1.6 1.6 0 0 0-1.59-1.6h-.55a.75.75 0 1 1 0-1.5h.55a3.1 3.1 0 0 1 3.09 3.1v5.736a3.1 3.1 0 0 1-3.09 3.1"
    />
  </Svg>
);
export default IconlystSongSlideOutline;
