import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightAirpodBroken = ({
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
      d="M3 12.355v5.048a1.555 1.555 0 0 0 3.109 0v-6.231h1.122a4.39 4.39 0 0 0 3.484-1.714c.272-.356.404-.8.404-1.247V5.876c0-.447-.134-.892-.405-1.249a4.1 4.1 0 0 0-3.059-1.623C5.292 2.895 3 4.944 3 7.306V9.23M8.271 6.428v1.361M18.35 10.982a5.298 5.298 0 1 0 2.504 3.357"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.604 17.685V15.87m0 0v-2.415h1.5a1.207 1.207 0 0 1 0 2.415zm2.374 1.816-1.153-1.808M14.26 4.786a2.523 2.523 0 0 1 2.886 2.099"
    />
  </Svg>
);
export default IconlystRightAirpodBroken;
