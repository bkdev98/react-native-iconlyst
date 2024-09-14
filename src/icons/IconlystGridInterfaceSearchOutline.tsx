import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceSearchOutline = ({
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
      d="M2.5 15.814a2.85 2.85 0 0 1 2.85-2.85h2.486a2.85 2.85 0 0 1 2.849 2.85V18.3a2.85 2.85 0 0 1-2.85 2.849H5.35A2.85 2.85 0 0 1 2.5 18.3zm2.85-1.35c-.746 0-1.35.605-1.35 1.35V18.3c0 .745.604 1.349 1.35 1.349h2.486c.745 0 1.349-.604 1.349-1.35v-2.486c0-.745-.604-1.35-1.35-1.35zM17.36 14.195a2.536 2.536 0 1 0 0 5.073 2.536 2.536 0 0 0 0-5.073m3.265 4.911a4.036 4.036 0 1 0-1.093 1.029l1.189 1.186a.75.75 0 0 0 1.06-1.062zM2.5 5.308A2.85 2.85 0 0 1 5.35 2.46h2.486a2.85 2.85 0 0 1 2.849 2.85v2.486a2.85 2.85 0 0 1-2.85 2.849H5.35A2.85 2.85 0 0 1 2.5 7.794zM5.35 3.96c-.746 0-1.35.604-1.35 1.35v2.486c0 .745.604 1.349 1.35 1.349h2.486c.745 0 1.349-.604 1.349-1.35V5.309c0-.745-.604-1.349-1.35-1.349zM13.006 5.308a2.85 2.85 0 0 1 2.849-2.849h2.487a2.85 2.85 0 0 1 2.849 2.85v2.486a2.85 2.85 0 0 1-2.85 2.849h-2.486a2.85 2.85 0 0 1-2.85-2.85zm2.849-1.349c-.745 0-1.35.604-1.35 1.35v2.486c0 .745.605 1.349 1.35 1.349h2.487c.745 0 1.349-.604 1.349-1.35V5.309c0-.745-.604-1.349-1.35-1.349z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceSearchOutline;
