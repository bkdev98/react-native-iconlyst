import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightLineOutline = ({
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
      d="M10.638 7.133a.75.75 0 0 1 1.06-.001l4.32 4.306a.75.75 0 0 1 .034 1.096l-4.354 4.336a.75.75 0 0 1-1.058-1.063l3.069-3.056H5a.75.75 0 0 1 0-1.5h8.706l-3.067-3.057a.75.75 0 0 1-.001-1.06M19 5.988a.75.75 0 0 1 .75.75v10.526a.75.75 0 0 1-1.5 0V6.738a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightLineOutline;
