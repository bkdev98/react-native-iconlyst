import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserContactLight = ({
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
      d="M13.87 5.09h2.011c2.606 0 4.223 1.84 4.223 4.445v7.026c0 2.597-1.617 4.438-4.223 4.438H8.426c-2.605 0-4.23-1.841-4.23-4.438V9.535c0-2.604 1.633-4.445 4.23-4.445h2.013"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.494 6.804-1.187.596a.34.34 0 0 1-.304 0l-1.194-.596a.68.68 0 0 1-.374-.607v-2.24c0-.528.428-.957.957-.957h1.517c.53 0 .958.43.958.957V6.2c0 .256-.145.49-.374.605M13.9 11.67a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.412 17.246c0-.895.705-2.008 2.738-2.008s2.739 1.106 2.739 2"
    />
  </Svg>
);
export default IconlystUserContactLight;
