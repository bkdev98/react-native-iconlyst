import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHorizontalMirrorOutline = ({
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
      d="M20.353 3.74C21.409 4.725 22 6.127 22 7.782v8.435c0 1.66-.59 3.062-1.648 4.046-1.05.978-2.5 1.487-4.128 1.487H8.276c-1.627 0-3.078-.509-4.128-1.487C3.09 19.278 2.5 17.876 2.5 16.216V7.782c0-1.66.59-3.062 1.648-4.045 1.05-.979 2.501-1.487 4.128-1.487h7.948c1.628 0 3.078.511 4.129 1.49M19.33 4.837c-.727-.677-1.79-1.087-3.106-1.087H8.276c-1.317 0-2.38.409-3.106 1.085C4.45 5.505 4 6.493 4 7.782v8.434c0 1.29.45 2.278 1.17 2.949.726.676 1.789 1.085 3.106 1.085h7.948c1.317 0 2.38-.409 3.106-1.085.72-.67 1.17-1.66 1.17-2.948V7.782c0-1.284-.45-2.273-1.17-2.945"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.958 5.31c.992 0 1.541 1.148.922 1.92L13.17 9.36a1.18 1.18 0 0 1-1.843.001L9.62 7.231c-.62-.773-.07-1.92.921-1.92zm-.664 1.5L12.25 8.114 11.205 6.81zM22 12.002a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75m-5.332 0a.75.75 0 0 1-.75.75h-2.001a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75m-5.335 0a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75m-5.333 0a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75M14.88 16.774c.619.772.07 1.92-.922 1.92h-3.417c-.992 0-1.54-1.148-.921-1.92l1.708-2.13c.473-.59 1.37-.59 1.843 0zm-1.586.42-1.044-1.302-1.045 1.302z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHorizontalMirrorOutline;
