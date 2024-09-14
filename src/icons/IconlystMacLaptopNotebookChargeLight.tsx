import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookChargeLight = ({
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
      d="m11.756 6.996-1.229 2.212h2.95l-1.23 2.211"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.024 3.988a2.435 2.435 0 0 1 2.436 2.436v8.005l1.426 3.103a1.847 1.847 0 0 1-1.735 2.483H4.849a1.847 1.847 0 0 1-1.735-2.483l1.427-3.104V6.425a2.435 2.435 0 0 1 2.436-2.436zM10.693 17.254h2.616M19.443 14.428H4.56"
    />
  </Svg>
);
export default IconlystMacLaptopNotebookChargeLight;
