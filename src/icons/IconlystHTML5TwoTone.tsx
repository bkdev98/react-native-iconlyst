import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHTML5TwoTone = ({
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
      d="M12.756 20.853a2.02 2.02 0 0 1-1.513 0l-4.745-1.92a2.02 2.02 0 0 1-1.252-1.673L4.066 5.214A2.02 2.02 0 0 1 6.072 3h11.853a2.02 2.02 0 0 1 2.008 2.214l-1.18 12.046a2.02 2.02 0 0 1-1.252 1.674z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.5 14.636.053.71a.5.5 0 0 0 .342.437l1.991.656a.5.5 0 0 0 .313 0l1.99-.656a.5.5 0 0 0 .343-.437l.21-2.789a.5.5 0 0 0-.499-.537l-4.478.01a.5.5 0 0 1-.5-.461L8.987 8.05a.5.5 0 0 1 .499-.54h5.573"
    />
  </Svg>
);
export default IconlystHTML5TwoTone;
