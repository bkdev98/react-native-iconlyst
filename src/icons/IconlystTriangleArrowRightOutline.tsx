import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangleArrowRightOutline = ({
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
      d="M5.626 4.35a.75.75 0 0 1 .752.002l12 7a.75.75 0 0 1 0 1.296l-12 7A.75.75 0 0 1 5.25 19V5a.75.75 0 0 1 .376-.65M6.75 6.306v11.388L16.512 12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTriangleArrowRightOutline;
