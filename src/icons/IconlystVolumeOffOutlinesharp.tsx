import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeOffOutlinesharp = ({
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
      d="M11.89 4.563h1.806v16.525H11.89l-4.125-3.576h-4.85l-.001-.75q-.005-3.936 0-7.873v-.75h4.85zm.306 1.72L8.324 9.64H4.413a4800 4800 0 0 0 0 6.373h3.911l3.872 3.356zM17.371 10.032l4.527 4.527-1.06 1.06-4.528-4.526z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.899 11.093-4.527 4.526-1.06-1.06 4.526-4.527z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeOffOutlinesharp;
