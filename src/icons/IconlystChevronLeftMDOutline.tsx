import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChevronLeftMDOutline = ({
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
      d="M12.056 6.055a2.75 2.75 0 1 1 3.889 3.89L13.889 12l2.056 2.056a2.75 2.75 0 1 1-3.89 3.889l-4-4a2.75 2.75 0 0 1 0-3.89zm2.828 1.061a1.25 1.25 0 0 0-1.768 0l-4 4a1.25 1.25 0 0 0 0 1.768l4 4a1.25 1.25 0 0 0 1.768-1.768l-2.586-2.586a.75.75 0 0 1 0-1.06l2.586-2.586a1.25 1.25 0 0 0 0-1.768"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChevronLeftMDOutline;
