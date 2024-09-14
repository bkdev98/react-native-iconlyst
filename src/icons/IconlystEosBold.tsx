import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEosBold = ({
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
      d="m12.338 18.797 3.333-10.99a.35.35 0 0 0-.052-.312l-2.93-4.01a.852.852 0 0 0-1.377 0l-2.93 4.011a.35.35 0 0 0-.053.311l3.333 10.99c.1.334.575.334.676 0M6.99 10.798l-1.877 6.314a.854.854 0 0 0 .381.976l4.57 2.726a.353.353 0 0 0 .518-.406l-2.915-9.612c-.102-.335-.577-.334-.677.002M18.887 17.112l-1.877-6.316a.353.353 0 0 0-.677-.002l-2.916 9.616a.353.353 0 0 0 .519.405l4.57-2.727a.854.854 0 0 0 .38-.976"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEosBold;
