import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneSecurityLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.6 12.954c1.264-.524 3.758-1.595 5.04-2.13L6.288 5.122c.637-.227 1.22-.492 1.832-.638.714-.17 1.329.153 1.855.613a190 190 0 0 1 3.587 3.2c.298.275.533.3.89.144 1.024-.452 2.051-.902 3.104-1.282 1.217-.44 2.95-.485 3.38 1.05.34 1.21-.703 2.242-1.73 2.675a631 631 0 0 1-10.25 4.24c-2.445.98-4.379.124-5.416-2.308-.092-.217-.448-1.08-.539-1.3M4.953 20.457h7.621"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.555 20.812s2.423-.734 2.423-2.756c0-2.024.089-2.18-.107-2.376-.194-.197-1.998-.825-2.316-.825s-2.123.63-2.317.825c-.195.194-.107.352-.107 2.376 0 2.022 2.424 2.756 2.424 2.756"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneSecurityLight;
