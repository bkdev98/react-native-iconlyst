import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotspotBroken = ({
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
      d="M8.11 8.086a5.48 5.48 0 0 1 3.933-1.656c1.533 0 2.933.638 3.933 1.656.98 1 1.58 2.352 1.58 3.857a5.48 5.48 0 0 1-1.657 3.933M8.177 15.886a5.52 5.52 0 0 1-1.656-3.943"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.722 18.4a8.94 8.94 0 0 1-2.677-6.402c0-2.463.987-4.692 2.595-6.321A8.98 8.98 0 0 1 12.043 3c1.088 0 2.133.194 3.1.55M18.363 18.399a8.98 8.98 0 0 0 2.677-6.403 8.96 8.96 0 0 0-2.595-6.32"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.205 12.004a2.169 2.169 0 1 0-4.338.001 2.169 2.169 0 0 0 4.337 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.04 14.172V21"
    />
  </Svg>
);
export default IconlystHotspotBroken;
