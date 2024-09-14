import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowLeftMDOutline = ({
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
      d="M11.056 4.055a2.75 2.75 0 0 1 3.889 0l6 6a2.75 2.75 0 0 1 0 3.89l-6 6a2.75 2.75 0 1 1-3.89-3.89l1.306-1.305H5a2.75 2.75 0 1 1 0-5.5h7.36l-1.304-1.305a2.75 2.75 0 0 1 0-3.89m2.828 1.061a1.25 1.25 0 0 0-1.768 1.768l2.586 2.586a.75.75 0 0 1-.53 1.28H5a1.25 1.25 0 1 0 0 2.5h9.172a.75.75 0 0 1 .53 1.28l-2.586 2.586a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768zl.519-.519z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowLeftMDOutline;
