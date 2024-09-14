import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOntologyLight = ({
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
      d="M16.757 18.992c-1.48 1.305-3.48 2.088-5.568 2-4.436-.086-7.916-3.913-7.916-8.437l.001-7.22zM7.242 5.007c1.48-1.305 3.48-2.088 5.568-2 4.436.086 7.916 3.914 7.916 8.437l-.002 7.22z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOntologyLight;
