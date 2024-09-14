import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnimalPrintLight = ({
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
      strokeWidth={1.5}
      d="M7.666 19.323c1.692.71 2.746-.803 4.344-.835 1.552.032 2.706 1.523 4.344.835.907-.354 1.528-1.221 1.516-2.2-.02-2.921-2.732-6.338-5.86-6.342-3.146 0-6.27 3.655-5.837 6.693.122.895.724 1.549 1.493 1.85ZM4.766 11.538a1.266 1.266 0 1 0 0-2.533 1.266 1.266 0 0 0 0 2.533ZM19.234 11.538a1.266 1.266 0 1 0 0-2.533 1.266 1.266 0 0 0 0 2.533ZM9.286 7.623a1.266 1.266 0 1 0 0-2.533 1.266 1.266 0 0 0 0 2.533ZM14.716 7.623a1.266 1.266 0 1 0 0-2.533 1.266 1.266 0 0 0 0 2.533Z"
    />
  </Svg>
);
export default IconlystAnimalPrintLight;
