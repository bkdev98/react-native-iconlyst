import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowUpMDOutline = ({
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
      d="M10.056 3.055a2.75 2.75 0 0 1 3.889 0l6 6a2.75 2.75 0 1 1-3.89 3.89l-1.305-1.306V19a2.75 2.75 0 1 1-5.5 0v-7.36l-1.305 1.304a2.75 2.75 0 1 1-3.89-3.889zm2.828 1.061a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 1.768 1.768L9.47 9.298a.75.75 0 0 1 1.28.53V19a1.25 1.25 0 1 0 2.5 0V9.828a.75.75 0 0 1 1.28-.53l2.586 2.586a1.25 1.25 0 0 0 1.768-1.768z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowUpMDOutline;
