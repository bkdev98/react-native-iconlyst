import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiToolsTwoTone = ({
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
      d="M6.795 6.287h10.41c2.339 0 3.795 1.651 3.795 3.989v6.306c0 2.337-1.456 3.989-3.797 3.989H6.795C4.455 20.57 3 18.919 3 16.582v-6.306c0-2.338 1.462-3.989 3.795-3.989M8.64 6.271V5.65a2.22 2.22 0 0 1 2.22-2.22h2.28a2.22 2.22 0 0 1 2.22 2.22v.628"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.054 15.407-.1-.273a3.76 3.76 0 0 0-2.223-2.225l-.273-.101.273-.101a3.76 3.76 0 0 0 2.222-2.225l.101-.274.101.274a3.76 3.76 0 0 0 2.222 2.225l.273.1-.273.102a3.76 3.76 0 0 0-2.222 2.225zM15.365 16.65a1.77 1.77 0 0 0-1.177-1.179 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAiToolsTwoTone;
