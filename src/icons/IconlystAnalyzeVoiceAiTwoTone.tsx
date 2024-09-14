import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnalyzeVoiceAiTwoTone = ({
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
      d="M3.653 10.912a7.223 7.223 0 0 0 7.206 7.24 7.22 7.22 0 0 0 6.143-3.447M10.86 21v-2.848"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.86 3A3.66 3.66 0 0 0 7.2 6.66v4.222a3.667 3.667 0 0 0 3.66 3.675h.001a3.67 3.67 0 0 0 3.463-2.484M14.862 8.199l-.101-.273A3.76 3.76 0 0 0 12.539 5.7l-.273-.101.273-.102a3.76 3.76 0 0 0 2.222-2.225l.1-.273.102.273a3.76 3.76 0 0 0 2.221 2.225l.273.101-.273.102a3.76 3.76 0 0 0-2.221 2.225zM19.17 10.713a1.77 1.77 0 0 0-1.176-1.178 1.77 1.77 0 0 0 1.176-1.179 1.77 1.77 0 0 0 1.177 1.179 1.77 1.77 0 0 0-1.177 1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAnalyzeVoiceAiTwoTone;
