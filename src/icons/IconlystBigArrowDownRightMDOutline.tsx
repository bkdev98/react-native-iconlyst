import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowDownRightMDOutline = ({
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
      d="M19.75 17A2.75 2.75 0 0 1 17 19.75H9a2.75 2.75 0 1 1 0-5.5h1.36L5.056 8.945a2.75 2.75 0 1 1 3.89-3.89l5.305 5.306V9a2.75 2.75 0 1 1 5.5 0zM17 18.25c.69 0 1.25-.56 1.25-1.25V9a1.25 1.25 0 1 0-2.5 0v3.172a.75.75 0 0 1-1.28.53L7.884 6.116a1.25 1.25 0 1 0-1.768 1.768l6.586 6.586a.75.75 0 0 1-.53 1.28H9a1.25 1.25 0 1 0 0 2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowDownRightMDOutline;
