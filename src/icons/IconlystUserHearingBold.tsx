import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserHearingBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.951 11.59a1 1 0 0 1-.833-1.552c.384-.58.587-1.257.587-1.957s-.203-1.377-.587-1.956a1.001 1.001 0 0 1 1.668-1.105c.602.908.92 1.967.92 3.061a5.5 5.5 0 0 1-.92 3.061 1 1 0 0 1-.835.448M5.35 11.59a1 1 0 0 1-.835-.448 5.5 5.5 0 0 1-.92-3.06c0-1.095.318-2.154.92-3.062a1 1 0 1 1 1.668 1.105 3.53 3.53 0 0 0-.587 1.956c0 .7.203 1.377.587 1.957a1 1 0 0 1-.833 1.552M12.15 14.516c-4.978 0-7.208 2.754-7.208 5.484a.75.75 0 0 0 .75.75l12.918-.018a.75.75 0 0 0 .749-.75c0-2.721-2.23-5.466-7.209-5.466M12.15 13.001a4.88 4.88 0 0 0 4.876-4.876A4.88 4.88 0 0 0 12.15 3.25a4.88 4.88 0 0 0-4.874 4.875 4.88 4.88 0 0 0 4.874 4.876"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserHearingBold;
