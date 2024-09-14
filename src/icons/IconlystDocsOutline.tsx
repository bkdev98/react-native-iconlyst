import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocsOutline = ({
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
      d="M5.554 10.984a1.576 1.576 0 0 0-1.521 1.988l1.65 6.112c.185.688.81 1.166 1.522 1.166h9.59c.712 0 1.336-.478 1.521-1.166l1.651-6.112a1.577 1.577 0 0 0-1.523-1.988zm-2.97 2.379a3.076 3.076 0 0 1 2.97-3.879h12.89a3.077 3.077 0 0 1 2.971 3.879l-1.65 6.112a3.076 3.076 0 0 1-2.97 2.275h-9.59a3.08 3.08 0 0 1-2.97-2.275zM7.686 3a.75.75 0 0 1 .75-.75h7.125a.75.75 0 0 1 0 1.5H8.436a.75.75 0 0 1-.75-.75M4.932 6.378a.75.75 0 0 1 .75-.75h12.634a.75.75 0 0 1 0 1.5H5.682a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocsOutline;
