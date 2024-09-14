import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCaravanTrailerOutline = ({
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
      d="M8.083 16.52a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94m-2.97 1.47a2.97 2.97 0 1 1 5.94 0 2.97 2.97 0 0 1-5.94 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.646 17.99a.75.75 0 0 1 .75-.75h10.946a.75.75 0 0 1 .667.406l.907 1.758a.75.75 0 1 1-1.332.688l-.698-1.352h-10.49a.75.75 0 0 1-.75-.75M6.394 9.815v2.027h2.262V9.815zm-1.5-.259c0-.685.556-1.241 1.241-1.241h2.78c.686 0 1.242.556 1.242 1.241v2.545c0 .685-.556 1.241-1.242 1.241h-2.78a1.24 1.24 0 0 1-1.241-1.241z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.724 10.626v7.364a.75.75 0 0 1-1.5 0v-7.583c0-.708.574-1.281 1.281-1.281h3.004c.708 0 1.282.573 1.282 1.281v7.583a.75.75 0 0 1-1.5 0v-7.364z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.21 7.44a2.875 2.875 0 0 1 2.865-2.63h12.868a2.875 2.875 0 0 1 2.875 2.875v10.24a.75.75 0 0 1-1.5 0V7.685c0-.76-.616-1.376-1.375-1.376H5.075c-.714 0-1.31.547-1.37 1.258l-.7 8.18a1.375 1.375 0 0 0 1.37 1.493h1.439a.75.75 0 0 1 0 1.5H4.375a2.875 2.875 0 0 1-2.864-3.12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCaravanTrailerOutline;
