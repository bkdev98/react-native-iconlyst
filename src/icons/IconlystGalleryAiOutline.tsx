import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryAiOutline = ({
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
      d="M4.74 5.328c-.615.66-.99 1.628-.99 2.836v7.35c0 1.208.375 2.175.99 2.832.608.651 1.508 1.06 2.687 1.06h3.257a.75.75 0 0 1 0 1.5H7.427c-1.547 0-2.86-.548-3.784-1.536-.918-.982-1.393-2.337-1.393-3.856v-7.35c0-1.518.475-2.875 1.392-3.859.923-.99 2.237-1.542 3.785-1.542h7.79c1.553 0 2.867.552 3.788 1.543.916.984 1.389 2.341 1.389 3.858v4.208a.75.75 0 1 1-1.5 0V8.164c0-1.209-.374-2.178-.987-2.837-.608-.653-1.507-1.064-2.69-1.064h-7.79c-1.178 0-2.078.41-2.687 1.065"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.129 2.773a.75.75 0 0 1 .75.75v3.288a.75.75 0 0 1-1.5 0V3.523a.75.75 0 0 1 .75-.75m-5.59.004a.75.75 0 0 1 .75.75v4.787h10.355a.75.75 0 0 1 0 1.5H9.288v10.343a.75.75 0 0 1-1.5 0V9.814H3.002a.75.75 0 0 1 0-1.5h4.786V3.527a.75.75 0 0 1 .75-.75M2.25 14.652a.75.75 0 0 1 .75-.75h3.04a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.422 20.907a.75.75 0 0 1-.704-.49l-.125-.34a3.92 3.92 0 0 0-2.315-2.318l-.339-.126a.75.75 0 0 1 0-1.406l.34-.126a3.92 3.92 0 0 0 2.314-2.318l.125-.34a.75.75 0 0 1 1.407 0l.126.34a3.92 3.92 0 0 0 2.314 2.318l.34.126a.75.75 0 0 1 0 1.406l-.34.126a3.92 3.92 0 0 0-2.314 2.318l-.126.34a.75.75 0 0 1-.703.49m1.491-3.977a5.4 5.4 0 0 1-1.491-1.493 5.4 5.4 0 0 1-1.492 1.493c.59.395 1.097.903 1.492 1.493a5.4 5.4 0 0 1 1.491-1.493M12.453 14.454a.75.75 0 0 1-.718-.532 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 1.435 0c.1.326.354.58.678.68a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-.717.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGalleryAiOutline;
