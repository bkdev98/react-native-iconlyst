import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongSlideTwoTone = ({
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
      d="M9.516 20.064H15.5a3.125 3.125 0 0 0 3.125-3.124V7.063c0-1.726-1.399-3.125-3.125-3.125H9.516A3.125 3.125 0 0 0 6.39 7.063v9.877c0 1.725 1.399 3.124 3.125 3.124"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.39 17.216h-.55a2.345 2.345 0 0 1-2.34-2.349V9.132a2.34 2.34 0 0 1 2.34-2.349h.55"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.702 13.742a1.74 1.74 0 1 1-3.48 0 1.74 1.74 0 0 1 3.48 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.702 13.741V8.52s.45 1.176 1.667 1.423"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.61 17.216h.55a2.345 2.345 0 0 0 2.34-2.349V9.132a2.34 2.34 0 0 0-2.34-2.349h-.55"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSongSlideTwoTone;
