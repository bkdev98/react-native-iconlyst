import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBadgeBold = ({
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
      d="M15.614 14.87H8.385a.75.75 0 0 1 0-1.5h7.229a.75.75 0 0 1 0 1.5M8.385 9.132h3.337a.75.75 0 0 1 0 1.5H8.385a.75.75 0 0 1 0-1.5m7.832-5.469H7.782C4.623 3.664 2.5 5.885 2.5 9.19v5.616c0 3.305 2.123 5.527 5.282 5.527h8.434c3.161 0 5.284-2.222 5.284-5.527V9.19c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentBadgeBold;
