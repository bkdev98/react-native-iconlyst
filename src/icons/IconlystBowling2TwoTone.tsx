import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowling2TwoTone = ({
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
      d="M8.932 12.138c-2.492 3.72-.344 7.199 1.221 8.665.14.131.327.197.519.197h2.657a.75.75 0 0 0 .52-.197c1.564-1.466 3.712-4.944 1.22-8.665-1.167-1.742-1.654-2.569-1.608-3.906s1.586-3.067.271-4.471c-.956-.936-2.456-1.09-3.463 0-1.337 1.448.271 3.161.271 4.471s-.441 2.165-1.608 3.906"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.822 21h1.215a.6.6 0 0 0 .416-.158c1.253-1.174 2.973-3.959.977-6.938-.934-1.395-1.324-2.057-1.287-3.128.037-1.07 1.27-2.455.217-3.58-.426-.416-.986-.64-1.538-.606M7.178 21H5.963a.6.6 0 0 1-.416-.158c-1.253-1.174-2.973-3.959-.977-6.938.934-1.395 1.324-2.057 1.287-3.128-.037-1.07-1.27-2.455-.217-3.58.426-.416.986-.64 1.538-.606"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBowling2TwoTone;
