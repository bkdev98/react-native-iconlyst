import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowDownMDOutline = ({
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
      d="M9.25 5a2.75 2.75 0 1 1 5.5 0v7.36l1.305-1.304a2.75 2.75 0 1 1 3.89 3.889l-6 6a2.75 2.75 0 0 1-3.89 0l-6-6 .53-.53-.53.53a2.75 2.75 0 1 1 3.89-3.89l1.305 1.306zM12 3.75c-.69 0-1.25.56-1.25 1.25v9.172a.75.75 0 0 1-1.28.53l-2.586-2.586a1.25 1.25 0 0 0-1.768 1.768l-.519.519.52-.52 6 6a1.25 1.25 0 0 0 1.767 0l6-6a1.25 1.25 0 0 0-1.768-1.767l-2.586 2.586a.75.75 0 0 1-1.28-.53V5c0-.69-.56-1.25-1.25-1.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowDownMDOutline;
