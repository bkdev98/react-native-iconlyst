import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookErrorBroken = ({
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
      d="M12.496 6.838V9.06m.005 2.279.002-.07M19.96 14.429l1.426 3.103a1.847 1.847 0 0 1-1.735 2.483H5.349a1.847 1.847 0 0 1-1.735-2.483l1.427-3.104V6.425a2.435 2.435 0 0 1 2.436-2.436h10.047a2.435 2.435 0 0 1 2.436 2.436v4.002M11.193 17.254h2.616M19.943 14.428H7.798"
    />
  </Svg>
);
export default IconlystMacLaptopNotebookErrorBroken;
