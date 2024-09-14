import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHalideSquareOutline = ({
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
      d="M12.884 8.722a1.25 1.25 0 0 0-1.768 0l-2.395 2.395a1.25 1.25 0 0 0 0 1.768l2.395 2.396a1.25 1.25 0 0 0 1.768 0l2.396-2.396a1.25 1.25 0 0 0 0-1.768zM10.056 7.66a2.75 2.75 0 0 1 3.889 0l2.395 2.396a2.75 2.75 0 0 1 0 3.889l-2.395 2.395a2.75 2.75 0 0 1-3.89 0L7.66 13.946a2.75 2.75 0 0 1 0-3.89z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.887 7.661a.75.75 0 0 1 1.06 0l7.583 7.583a.75.75 0 1 1-1.06 1.06l-7.583-7.582a.75.75 0 0 1 0-1.06M16.307 2.47a.75.75 0 0 1 0 1.06L8.72 11.116a.75.75 0 0 1-1.06-1.06l7.585-7.586a.75.75 0 0 1 1.06 0M16.34 12.884a.75.75 0 0 1 0 1.06L8.754 21.53a.75.75 0 1 1-1.06-1.06l7.585-7.586a.75.75 0 0 1 1.06 0M2.47 7.692a.75.75 0 0 1 1.06 0l7.589 7.589a.75.75 0 0 1-1.06 1.06l-7.59-7.588a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 8A5.75 5.75 0 0 1 8 2.25h8A5.75 5.75 0 0 1 21.75 8v8A5.75 5.75 0 0 1 16 21.75H8A5.75 5.75 0 0 1 2.25 16zM8 3.75A4.25 4.25 0 0 0 3.75 8v8A4.25 4.25 0 0 0 8 20.25h8A4.25 4.25 0 0 0 20.25 16V8A4.25 4.25 0 0 0 16 3.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHalideSquareOutline;
