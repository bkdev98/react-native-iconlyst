import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleTicketLight = ({
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
      d="m9.835 17.23 4.62 1.246a3.06 3.06 0 0 0 3.75-2.165l2.187-8.21a3.08 3.08 0 0 0-2.166-3.751l-4.61-1.244a3.07 3.07 0 0 0-3.762 2.172l-2.184 8.2a3.08 3.08 0 0 0 2.165 3.753"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.41 18.465v.713a1.823 1.823 0 0 1-1.824 1.824H6.571a3.067 3.067 0 0 1-3.067-3.067V9.443A3.067 3.067 0 0 1 6.57 6.375h2.99"
    />
  </Svg>
);
export default IconlystDoubleTicketLight;
