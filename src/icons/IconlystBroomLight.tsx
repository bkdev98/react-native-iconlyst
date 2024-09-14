import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBroomLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.637 5.71a2.541 2.541 0 0 1 5.083 0l-.524 4.408 4.1-.007a1.776 1.776 0 1 1 .002 3.552H6.07a1.777 1.777 0 0 1-1.777-1.78v-.003a1.777 1.777 0 0 1 1.777-1.772h4.096c-.084-.74-.529-4.399-.529-4.399"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.913 13.824v2.404c-.09 2.225.943 3.674 1.014 3.79.287.47.058 1.021-.477 1.149-.01.002-14.533 0-14.539 0-.534-.128-.763-.679-.476-1.149.071-.116 1.104-1.565 1.014-3.79v-2.404"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.331 18.383s-.1 1.393-1.063 2.786M14.305 19.467a4.2 4.2 0 0 0 .165 1.702"
    />
  </Svg>
);
export default IconlystBroomLight;
