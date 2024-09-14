import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowRightMDOutline = ({
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
      d="M9.055 4.055a2.75 2.75 0 1 1 3.89 3.89L11.639 9.25H19a2.75 2.75 0 1 1 0 5.5h-7.36l1.304 1.305a2.75 2.75 0 1 1-3.889 3.89l-6-6a2.75 2.75 0 0 1 0-3.89zm2.829 1.061a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L9.298 14.53a.75.75 0 0 1 .53-1.28H19a1.25 1.25 0 1 0 0-2.5H9.828a.75.75 0 0 1-.53-1.28l2.586-2.586a1.25 1.25 0 0 0 0-1.768"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowRightMDOutline;
