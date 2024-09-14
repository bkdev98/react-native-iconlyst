import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraduatedAiTwoTone = ({
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
      d="M10.94 14.614 4.098 11.27c-1.464-.716-1.464-2.8-.001-3.516m2.375 4.685 4.155 2.03c.86.421 1.865.421 2.725 0l6.54-3.196c1.464-.715 1.464-2.8 0-3.516l-5.443-2.66M21 9.505l-.033 5.414"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.473 12.439v4.97a2.13 2.13 0 0 0 1.299 1.972c2.775 1.145 5.538 1.16 8.29.007a2.13 2.13 0 0 0 1.289-1.967V12.53M8.693 7.953l-.101-.274A3.76 3.76 0 0 0 6.37 5.454l-.273-.1.273-.102a3.76 3.76 0 0 0 2.222-2.225l.1-.273.102.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101A3.76 3.76 0 0 0 8.794 7.68zM13.089 10.683a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.176-1.179 1.77 1.77 0 0 0 1.177 1.179 1.77 1.77 0 0 0-1.177 1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGraduatedAiTwoTone;
