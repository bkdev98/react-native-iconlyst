import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery1Bold = ({
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
      d="m10.762 9.623 1.864-.615a.75.75 0 0 1 .467-.001l1.848.6-.014-6.802a.3.3 0 0 0-.3-.3l-3.574.009a.3.3 0 0 0-.299.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.33 8.009c-.004-1.64-.554-3.087-1.548-4.076-.943-.938-2.23-1.433-3.72-1.433h-.022l-.313.001a.3.3 0 0 0-.299.3l.015 7.837a.75.75 0 0 1-.982.715l-2.598-.844-2.615.863a.746.746 0 0 1-.674-.104.75.75 0 0 1-.311-.607l-.01-7.842a.3.3 0 0 0-.3-.3l-.338.001h-.001c-3.156.011-5.271 2.234-5.263 5.531l.018 7.94c.004 1.59.497 2.956 1.427 3.952.953 1.019 2.28 1.557 3.84 1.557h.023l8.425-.02c3.156-.011 5.27-2.233 5.265-5.531z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDelivery1Bold;
