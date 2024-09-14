import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowUpRightMDOutline = ({
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
      d="M6.25 7A2.75 2.75 0 0 1 9 4.25h8A2.75 2.75 0 0 1 19.75 7v8a2.75 2.75 0 1 1-5.5 0v-1.36l-5.305 5.305a2.75 2.75 0 0 1-3.89 0l.53-.53-.53.53a2.75 2.75 0 0 1 0-3.89l.53.53-.53-.53 5.306-5.305H9A2.75 2.75 0 0 1 6.25 7M9 5.75a1.25 1.25 0 1 0 0 2.5h3.172a.75.75 0 0 1 .53 1.28l-6.586 6.586-.519-.519.52.52a1.25 1.25 0 0 0 0 1.767l-.527.526.526-.526a1.25 1.25 0 0 0 1.768 0l6.586-6.586a.75.75 0 0 1 1.28.53V15a1.25 1.25 0 1 0 2.5 0V7c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowUpRightMDOutline;
