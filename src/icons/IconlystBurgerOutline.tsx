import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBurgerOutline = ({
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
      d="M17.153 2.47a.75.75 0 0 1 0 1.06l-.76.76a1.36 1.36 0 0 0-.397.96v1h3.524a1.915 1.915 0 0 1 1.896 2.177l-1.618 11.67a1.915 1.915 0 0 1-1.896 1.653H6.094a3.03 3.03 0 0 1-3.03-3.03v-2.08a5.78 5.78 0 0 1 5.779-5.778h.955q.215 0 .426.015L9.912 8.42a1.915 1.915 0 0 1 1.898-2.17h2.686v-1c0-.759.3-1.485.836-2.02l.76-.76a.75.75 0 0 1 1.06 0m-5.375 8.74a5.78 5.78 0 0 1 3.798 5.43v2.08c0 .558-.15 1.08-.414 1.53h2.74a.415.415 0 0 0 .41-.358l1.213-8.743H11.77zm-.198-1.561h8.153l.198-1.428a.415.415 0 0 0-.411-.472h-7.71a.415.415 0 0 0-.41.471v.008zm-7.016 8.189h1.322a.75.75 0 0 0 0-1.5H4.575a4.28 4.28 0 0 1 4.268-3.976h.955a4.277 4.277 0 0 1 4.268 3.976H8.99a.75.75 0 0 0 0 1.5h5.086v.882a1.53 1.53 0 0 1-1.53 1.53H6.095a1.53 1.53 0 0 1-1.53-1.53z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBurgerOutline;
