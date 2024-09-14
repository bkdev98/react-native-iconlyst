import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextSearchBulk = ({
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
      d="M9.33 19.43a1 1 0 0 1-1-1V6.57H3a1 1 0 0 1 0-2h12.78a1 1 0 1 1 0 2h-5.45v11.86a1 1 0 0 1-1 1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.484 12.44a1.974 1.974 0 0 0-1.971 1.97c0 1.086.885 1.97 1.97 1.97a1.97 1.97 0 0 0 1.972-1.97 1.973 1.973 0 0 0-1.971-1.97M21 19.08a1 1 0 0 1-.706-.291l-.901-.899a3.95 3.95 0 0 1-1.91.49 3.975 3.975 0 0 1-3.97-3.97 3.976 3.976 0 0 1 3.97-3.97 3.975 3.975 0 0 1 3.972 3.97c0 .774-.222 1.496-.606 2.107l.857.855A1 1 0 0 1 21 19.082"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTextSearchBulk;
