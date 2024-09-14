import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongNotesTwoTone = ({
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
      d="M21.5 16.725a2.153 2.153 0 1 1-4.307 0 2.153 2.153 0 0 1 4.307 0M13.144 18.26a2.153 2.153 0 1 1-4.307 0 2.153 2.153 0 0 1 4.307 0M7.833 10.42a2.167 2.167 0 1 1-4.333 0 2.167 2.167 0 0 1 4.333 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.834 10.337V3.586s.585 1.52 2.157 1.84"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.499 16.726V6.502c-2.736 1.272-5.568 1.754-8.356 1.536v10.223"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.143 11.689c2.788.219 5.62-.264 8.356-1.537"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSongNotesTwoTone;
