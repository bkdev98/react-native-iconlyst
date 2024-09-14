import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongSlideLight = ({
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
      d="M9.016 20.064H15a3.125 3.125 0 0 0 3.125-3.124V7.063c0-1.726-1.399-3.125-3.125-3.125H9.016A3.125 3.125 0 0 0 5.89 7.063v9.877c0 1.725 1.399 3.124 3.125 3.124"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.89 17.216h-.55A2.345 2.345 0 0 1 3 14.867V9.132a2.34 2.34 0 0 1 2.34-2.349h.55"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.202 13.742a1.74 1.74 0 1 1-3.48 0 1.74 1.74 0 0 1 3.48 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.202 13.741V8.52s.45 1.176 1.667 1.423M18.11 17.216h.55A2.345 2.345 0 0 0 21 14.867V9.132a2.34 2.34 0 0 0-2.34-2.349h-.55"
    />
  </Svg>
);
export default IconlystSongSlideLight;
