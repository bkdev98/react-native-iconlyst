import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize3ArrowCollapseOutline = ({
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
      d="M12 3.711a.75.75 0 0 1 .75.75l.001 5.487 2.066-2.074a.75.75 0 0 1 1.063 1.058l-3.307 3.321a.75.75 0 0 1-1.105.042L8.12 8.932a.75.75 0 1 1 1.063-1.058l2.07 2.078-.001-5.49a.75.75 0 0 1 .75-.75M18.985 13.546a.75.75 0 0 1-.532.917l-2.83.752 4.752 2.744a.75.75 0 0 1-.75 1.299l-4.754-2.746.765 2.83a.75.75 0 1 1-1.448.392l-1.239-4.581a.75.75 0 0 1 .59-.936l4.529-1.203a.75.75 0 0 1 .917.532M5.015 13.546a.75.75 0 0 1 .918-.532l4.53 1.203a.75.75 0 0 1 .588.936l-1.238 4.581a.75.75 0 1 1-1.448-.391l.765-2.831-4.755 2.746a.75.75 0 0 1-.75-1.3l4.752-2.743-2.83-.752a.75.75 0 0 1-.532-.917"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize3ArrowCollapseOutline;
