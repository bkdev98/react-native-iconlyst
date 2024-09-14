import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartFunBulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.69 3.51c-2.097-.677-4.006-.114-5.44 1.584-1.435-1.698-3.344-2.26-5.44-1.585-2.647.853-4.298 3.245-4.31 6.241-.025 5.134 4.916 9.156 9.548 11.207l.203.09.203-.09C17.085 18.905 22.025 14.883 22 9.75c-.012-2.996-1.663-5.387-4.31-6.24"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.328 14.522c1.679 0 3.327-1.044 4.313-2.738l.377-.648-1.296-.755-.377.648c-.57.98-1.671 2.036-3.088 1.992-1.407.052-2.493-1.013-3.063-1.992l-.377-.648-1.297.755.378.648c.986 1.694 2.633 2.738 4.288 2.738z"
    />
  </Svg>
);
export default IconlystHeartFunBulksharp;
