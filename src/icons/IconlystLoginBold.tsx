import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M7.29 12.77H3.283A.776.776 0 0 1 2.5 12c0-.42.355-.77.782-.77H7.29V6.45C7.29 4 9.356 2 11.886 2h5.04C19.444 2 21.5 4 21.5 6.44v11.12c0 2.45-2.055 4.44-4.595 4.44h-5.03c-2.519 0-4.584-1.99-4.584-4.43zh6.402l-1.652 1.6c-.31.3-.31.79 0 1.09a.8.8 0 0 0 .568.22c.196 0 .403-.07.558-.22l3.015-2.91a.74.74 0 0 0 .237-.55c0-.2-.082-.4-.237-.54l-3.015-2.91a.816.816 0 0 0-1.126 0c-.31.3-.31.79 0 1.09l1.652 1.59H7.291z"
    />
  </Svg>
);
export default IconlystLoginBold;
