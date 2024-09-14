import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSquare2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 16.087v.265a.75.75 0 0 1-1.5 0v-.25h-.069a2.11 2.11 0 0 1-2.106-2.11.75.75 0 0 1 1.5 0c0 .337.272.61.606.61h1.42a.83.83 0 0 0 .824-.83.82.82 0 0 0-.824-.819h-1.139a2.393 2.393 0 0 1-2.388-2.39c0-1.245.96-2.26 2.176-2.369v-.41a.75.75 0 0 1 1.5 0v.388h.069a2.11 2.11 0 0 1 2.105 2.111c0 .415-.336.79-.75.79s-.75-.296-.75-.71v-.08a.61.61 0 0 0-.605-.61h-1.357a.89.89 0 0 0 0 1.78h1.139a2.324 2.324 0 0 1 2.324 2.32 2.324 2.324 0 0 1-2.175 2.314m3.467-13.524H7.782c-3.159 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.123 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarSquare2Bold;
