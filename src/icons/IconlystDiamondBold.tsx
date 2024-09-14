import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m20.125 9.708-4.957-4.96c-1.892-1.894-4.493-1.838-6.475.141L4.02 9.56c-1.976 1.985-2.034 4.587-.142 6.475l4.957 4.96c.924.922 2.016 1.382 3.12 1.382 1.163 0 2.34-.509 3.355-1.522l4.67-4.679c.982-.979 1.52-2.172 1.52-3.36 0-1.133-.476-2.209-1.376-3.108"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiamondBold;
