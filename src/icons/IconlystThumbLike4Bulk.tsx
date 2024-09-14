import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike4Bulk = ({
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
      d="M3.875 9.602a1 1 0 0 0-1 1v9.049a1 1 0 1 0 2 0V10.6a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.039 12.06a3.08 3.08 0 0 0-1.379-1.8c-.734-.442-1.75-.442-3.776-.442h-1.82l-.096-.002a.6.6 0 0 1 .026-.103c.83-2.58.946-4.412.344-5.442a1.73 1.73 0 0 0-1.196-.859c-.541-.11-.848-.112-1.34.37-1.265 1.491-3.423 3.85-4.61 5.137-.308.335-.463.503-.583.71a2.2 2.2 0 0 0-.243.621c-.053.238-.053.47-.053.933v5.454c0 1.34 0 2.013.276 2.566a2.64 2.64 0 0 0 1.172 1.171c.551.276 1.224.276 2.565.276h5.699c1.08 0 1.623 0 2.108-.197a2.7 2.7 0 0 0 1.128-.865c.317-.418.458-.94.739-1.983l.481-1.786c.528-1.955.792-2.937.558-3.76"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThumbLike4Bulk;
