import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingOfficeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.366 9.04a.99.99 0 0 1-.833.445 1 1 0 0 1-.832-1.556.99.99 0 0 1 .636-.43.99.99 0 0 1 1.175.78 1 1 0 0 1-.146.76m0 4a.99.99 0 0 1-.833.445 1 1 0 0 1-.832-1.556.99.99 0 0 1 .636-.43.99.99 0 0 1 1.175.78 1 1 0 0 1-.146.76m-.636 4.336a.999.999 0 0 1-1.176-.785 1.003 1.003 0 0 1 .783-1.181 1 1 0 0 1 1.175.78 1 1 0 0 1-.782 1.186M11.24 9.04a.99.99 0 0 1-.833.445 1 1 0 0 1-.832-1.556.99.99 0 0 1 .636-.43.995.995 0 0 1 1.176.78 1 1 0 0 1-.147.76m0 4a.99.99 0 0 1-.833.445 1 1 0 0 1-.832-1.556.99.99 0 0 1 .636-.43.995.995 0 0 1 1.176.78 1 1 0 0 1-.147.76m-.636 4.336a.999.999 0 0 1-1.176-.785 1.003 1.003 0 0 1 .783-1.181 1.003 1.003 0 0 1 .393 1.966m10.462 3.05h-.602a.3.3 0 0 1-.3-.3V5.346a2.67 2.67 0 0 0-2.669-2.67H7.447a2.67 2.67 0 0 0-2.669 2.67v14.78a.3.3 0 0 1-.3.3h-.603a.75.75 0 0 0 0 1.5h17.191a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBuildingOfficeBold;
