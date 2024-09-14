import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartFunBoldsharp = ({
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
      d="M16.641 11.784c-.986 1.694-2.634 2.738-4.313 2.738h-.142c-1.654 0-3.302-1.044-4.288-2.738l-.378-.648 1.297-.755.377.648c.57.98 1.656 2.044 3.063 1.992 1.417.044 2.518-1.012 3.088-1.992l.377-.648 1.296.755zm1.05-8.275c-2.098-.676-4.007-.113-5.44 1.585-1.436-1.698-3.345-2.261-5.442-1.585C4.163 4.362 2.512 6.754 2.5 9.75c-.025 5.134 4.916 9.156 9.548 11.207l.203.09.203-.09C17.085 18.905 22.025 14.883 22 9.75c-.012-2.996-1.663-5.387-4.31-6.24"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartFunBoldsharp;
