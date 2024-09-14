import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUXBold = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
      d="M2.5 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0m15.71-2.164a.75.75 0 1 0-1.22-.872L15.6 10.91l-1.39-1.946a.75.75 0 1 0-1.22.872l1.688 2.364-1.688 2.364a.75.75 0 0 0 1.22.872l1.39-1.946 1.39 1.946a.75.75 0 1 0 1.22-.872L16.522 12.2zM7.35 9.4a.75.75 0 0 0-1.5 0v3.55a3 3 0 1 0 6 0V9.4a.75.75 0 0 0-1.5 0v3.55a1.5 1.5 0 0 1-3 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUXBold;
