import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard3Bulk = ({
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
      d="M16.228 4.395H7.771c-3.3 0-5.271 1.934-5.271 5.172v4.874c-.005 1.563.464 2.862 1.356 3.758.917.92 2.268 1.406 3.906 1.406h8.466c3.301 0 5.272-1.93 5.272-5.162v-4.8c0-3.286-1.971-5.248-5.272-5.248"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.253 8.838a.867.867 0 0 0 1.732 0 .866.866 0 0 0-1.732 0M14.545 11.717a.867.867 0 0 0 1.732 0 .866.866 0 0 0-1.732 0M9.178 16.144h5.645a.75.75 0 0 0 0-1.5H9.178a.75.75 0 0 0 0 1.5M8.579 10.852a.866.866 0 1 0 0 1.732.866.866 0 0 0 0-1.732M6.004 8.838a.867.867 0 0 0 1.732 0 .866.866 0 0 0-1.732 0M11.153 8.838a.866.866 0 1 0-1.733 0 .866.866 0 0 0 1.733 0M12.861 11.717a.866.866 0 1 0-1.732.002.866.866 0 0 0 1.732-.002M14.568 8.838a.866.866 0 1 0-1.731 0 .866.866 0 0 0 1.731 0"
    />
  </Svg>
);
export default IconlystKeyboard3Bulk;
