import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanDeliveryBoxOutline = ({
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
      d="M21.1 9.22a.75.75 0 0 1-.75-.75V6.89c0-1.73-1.407-3.14-3.143-3.14H15.95A.75.75 0 0 1 15.2 3c0-.41.335-.75.75-.75h1.257a4.643 4.643 0 0 1 4.643 4.64v1.58c0 .41-.336.75-.75.75M3.1 9.22a.75.75 0 0 1-.75-.75V6.89c0-2.56 2.078-4.64 4.642-4.64h1.29c.414 0 .75.34.75.75s-.336.75-.75.75h-1.29A3.143 3.143 0 0 0 3.85 6.89v1.58c0 .41-.336.75-.75.75M3.1 14.78c.414 0 .75.34.75.75v1.58c0 1.73 1.406 3.14 3.142 3.14H8.25c.414 0 .75.34.75.75s-.336.75-.75.75H6.992a4.64 4.64 0 0 1-4.642-4.64v-1.58c0-.41.335-.75.75-.75M21.098 14.78c.414 0 .75.34.75.75v1.58c0 2.56-2.08 4.64-4.643 4.64h-1.29a.753.753 0 0 1-.75-.75c0-.41.336-.75.75-.75h1.29a3.144 3.144 0 0 0 3.143-3.14v-1.58c0-.41.335-.75.75-.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m8.039 8.49 3.048-1.76a1.98 1.98 0 0 1 2.023 0l3.047 1.76a2.02 2.02 0 0 1 1.01 1.75v3.52c0 .72-.384 1.39-1.01 1.75l-3.048 1.76c-.31.178-.655.268-1 .27h-.016c-.347 0-.694-.09-1.005-.27h-.001l-3.048-1.76a2.02 2.02 0 0 1-1.011-1.75v-3.52a2.02 2.02 0 0 1 1.01-1.75m3.31 3.926-2.821-1.63v2.974c0 .18.1.36.26.45h.002l2.56 1.479zm4.319-1.632L12.85 12.41v3.276l2.558-1.477c.16-.09.26-.27.26-.45zm-.764-1.293L12.359 8.03a.49.49 0 0 0-.522 0L9.289 9.493l2.806 1.62z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanDeliveryBoxOutline;
