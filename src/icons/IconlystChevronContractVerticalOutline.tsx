import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChevronContractVerticalOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.285 8.997a1.01 1.01 0 0 0 1.43 0l3.521-3.521a1.011 1.011 0 0 0-1.43-1.43L12.53 6.323a.75.75 0 0 1-1.06 0L9.193 4.046a1.01 1.01 0 0 0-1.43 1.43zm2.49 1.061c-.98.98-2.57.98-3.55 0L6.703 6.536a2.51 2.51 0 0 1 3.55-3.55L12 4.731l1.746-1.747a2.51 2.51 0 1 1 3.551 3.551zM11.285 15.002a1.01 1.01 0 0 1 1.43 0l3.521 3.522a1.011 1.011 0 0 1-1.43 1.43l-2.276-2.277a.75.75 0 0 0-1.06 0l-2.277 2.276a1.011 1.011 0 0 1-1.43-1.43zm2.49-1.06a2.51 2.51 0 0 0-3.55 0l-3.522 3.521a2.51 2.51 0 0 0 3.55 3.551L12 19.268l1.746 1.746a2.51 2.51 0 1 0 3.551-3.55z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChevronContractVerticalOutline;
