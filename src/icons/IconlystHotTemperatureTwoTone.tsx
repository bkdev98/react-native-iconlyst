import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotTemperatureTwoTone = ({
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
      d="M6.357 6v6.022c-1.208.913-2 2.347-2 3.978a5 5 0 0 0 10 0c0-1.63-.792-3.065-2-3.978V6a3 3 0 0 0-6 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.83 16a1.473 1.473 0 1 1-2.946 0 1.473 1.473 0 0 1 2.947 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.356 6.728v7.799M19.87 9.705a1.44 1.44 0 0 1-2.039 0 1.44 1.44 0 0 0-2.039 0M19.87 6.203a1.443 1.443 0 0 1-2.04 0 1.44 1.44 0 0 0-2.038 0"
    />
  </Svg>
);
export default IconlystHotTemperatureTwoTone;
