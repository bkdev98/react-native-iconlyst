import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarCircleOutline = ({
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
      d="M12.613 3.75a8.25 8.25 0 1 0 8.25 8.25.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75s-9.75-4.365-9.75-9.75 4.366-9.75 9.75-9.75a.75.75 0 0 1 0 1.5M21.145 3.47a.75.75 0 0 1 0 1.06l-2.317 2.317a.75.75 0 0 1-1.06-1.06l2.316-2.317a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.146 2.47a.75.75 0 0 1 0 1.06l-1.403 1.403a.75.75 0 0 1-1.06-1.061l1.402-1.402a.75.75 0 0 1 1.06 0M22.146 7.47a.75.75 0 0 1 0 1.06l-2.034 2.034a.75.75 0 0 1-1.06-1.061l2.033-2.033a.75.75 0 0 1 1.06 0M14.063 8.935l-1.465 1.122-.002.002c-.36.273-.829.353-1.258.215l-1.76-.565.628 1.71v.002c.158.426.095.904-.174 1.274l-1.07 1.479 1.862-.046c.451-.011.878.197 1.146.557l1.113 1.496.504-1.754c.126-.438.463-.784.895-.922h.001l1.737-.56-1.528-1.037h-.001a1.38 1.38 0 0 1-.607-1.123v-.003zm1.497-.268a1.384 1.384 0 0 0-1.418-1.348c-.285.007-.562.102-.79.272l-.01.007-1.605 1.23-1.948-.626a1.369 1.369 0 0 0-1.713 1.77v.001l.699 1.901-1.183 1.636a1.38 1.38 0 0 0 .335 1.92c.245.171.537.258.834.25h.003l2.039-.051 1.218 1.639c.45.611 1.308.744 1.922.299l.004-.004c.238-.175.416-.424.503-.71l.004-.012.555-1.93 1.928-.62a1.37 1.37 0 0 0 .882-1.725v-.002a1.37 1.37 0 0 0-.543-.714l-1.693-1.15z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarCircleOutline;
