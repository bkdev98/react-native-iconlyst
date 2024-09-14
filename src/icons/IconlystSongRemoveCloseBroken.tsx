import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongRemoveCloseBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.43 16.426-3.35 3.349m3.351 0-3.35-3.349M13.07 14.207l.756-6.266s.371 1.477 1.795 1.95M12.25 21a9 9 0 0 1-9-9c0-1.925.604-3.708 1.634-5.172M21.25 12A9 9 0 0 0 7.733 4.214"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.233 11.87a2.103 2.103 0 1 1-2.034.97"
    />
  </Svg>
);
export default IconlystSongRemoveCloseBroken;