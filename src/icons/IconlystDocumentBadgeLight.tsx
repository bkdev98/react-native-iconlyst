import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBadgeLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 4.164h8.435C19.165 4.164 21 6.245 21 9.19v5.616c0 2.946-1.835 5.027-4.784 5.027H7.782C4.834 19.833 3 17.752 3 14.806V9.19c0-2.945 1.843-5.026 4.782-5.026M8.385 9.883h3.337m-3.337 4.236h7.229"
    />
  </Svg>
);
export default IconlystDocumentBadgeLight;
