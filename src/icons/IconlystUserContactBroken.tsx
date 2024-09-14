import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserContactBroken = ({
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
      d="M8.676 21c-2.604 0-4.23-1.841-4.23-4.438V9.536c0-2.604 1.633-4.445 4.23-4.445h2.013M14.12 5.09h2.011c2.606 0 4.223 1.84 4.223 4.445v7.026c0 2.597-1.617 4.438-4.223 4.438h-4.657"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.744 6.804-1.187.596a.34.34 0 0 1-.304 0l-1.194-.596a.68.68 0 0 1-.374-.607v-2.24c0-.528.428-.957.957-.957h1.517c.53 0 .958.43.958.957V6.2c0 .256-.145.49-.374.605"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.15 11.671a1.75 1.75 0 1 1-1.75-1.748M9.662 17.245c0-.895.705-2.008 2.738-2.008s2.739 1.106 2.739 2"
    />
  </Svg>
);
export default IconlystUserContactBroken;
