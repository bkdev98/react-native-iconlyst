import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunSquareLowLight = ({
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
      d="M7.837 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H7.837c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.055 5.081 4.897 3 7.837 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.024 9.203a2.797 2.797 0 1 1 0 5.594 2.797 2.797 0 0 1 0-5.594"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.024 17.49v.01m0-11v.01M6.533 12h-.01m11 0h-.011m-9.371 3.882-.008.007m7.778-7.778-.007.008m-7.763 0-.008-.008m7.778 7.778-.007-.008"
    />
  </Svg>
);
export default IconlystSunSquareLowLight;
