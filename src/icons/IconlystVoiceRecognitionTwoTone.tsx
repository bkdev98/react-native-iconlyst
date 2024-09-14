import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceRecognitionTwoTone = ({
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
      d="M21.5 8.468V6.891a3.89 3.89 0 0 0-3.893-3.893H16.35M3.5 8.468V6.891a3.89 3.89 0 0 1 3.893-3.893h1.29M3.5 15.533v1.577a3.89 3.89 0 0 0 3.893 3.892H8.65M21.5 15.533v1.577a3.89 3.89 0 0 1-3.893 3.892h-1.29"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 12.564h3.243l1.564-2.65 2.302 4.735 1.99-7.383 3.063 9.468 2.367-6.82 1.287 2.65H21.5"
    />
  </Svg>
);
export default IconlystVoiceRecognitionTwoTone;
