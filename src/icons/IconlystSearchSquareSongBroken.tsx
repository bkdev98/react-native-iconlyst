import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSquareSongBroken = ({
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
      d="M21.25 11.109V8.026C21.25 5.081 19.415 3 16.467 3H8.032C5.092 3 3.25 5.081 3.25 8.026M11.601 21H8.032c-2.948 0-4.782-2.081-4.782-5.026V12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.723 13.658a2.16 2.16 0 1 1-4.287-.516 2.16 2.16 0 0 1 4.287.516"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.664 19.416 1.586 1.583m-3.555-6.595a2.893 2.893 0 1 1 0 5.785 2.893 2.893 0 0 1 0-5.785M11.723 13.658l.775-6.435s.382 1.517 1.844 2.002"
    />
  </Svg>
);
export default IconlystSearchSquareSongBroken;
