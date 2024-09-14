import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongSlideBroken = ({
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
      d="M9.266 3.937A3.125 3.125 0 0 0 6.14 7.062v9.877c0 1.725 1.399 3.124 3.125 3.124h5.985c1.726 0 3.126-1.4 3.126-3.124V7.062c0-1.726-1.4-3.125-3.126-3.125H12.26"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.14 6.783h-.55a2.34 2.34 0 0 0-2.34 2.349V12M6.14 17.216h-.55a2.345 2.345 0 0 1-2.34-2.349"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.452 13.742a1.74 1.74 0 1 1-3.48 0 1.74 1.74 0 0 1 3.48 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.452 13.741V8.52s.45 1.176 1.667 1.423M18.36 17.216h.55a2.345 2.345 0 0 0 2.34-2.348V12M21.25 9.132a2.34 2.34 0 0 0-2.34-2.349h-.55"
    />
  </Svg>
);
export default IconlystSongSlideBroken;
