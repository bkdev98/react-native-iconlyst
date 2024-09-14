import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthTwoTone = ({
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
      d="M14.616 20.63v-.037c.01-3.649-1.075-6.35-3.354-4.411-1.94 1.635-3.41 2.196-4.374 2.334"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.501 16.566c1.267 2.642 4.08 4.243 7.188 4.243a8.812 8.812 0 0 0 0-17.622"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.077 3.523c-.166.478-.772 2.528.588 3.961 1.544 1.627 2.867 1.72 2.822 3.483-.037 1.774-2.224 1.746-1.04 4.559.488 1.158 1.067 2.077 1.398 2.775"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.078 8.398a1.394 1.394 0 1 0-2.788 0 1.394 1.394 0 0 0 2.788 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.683 14.255c-.669 0-4.183-2.845-4.183-5.822a4.183 4.183 0 1 1 8.367 0c0 2.977-3.514 5.822-4.184 5.822"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEarthTwoTone;
