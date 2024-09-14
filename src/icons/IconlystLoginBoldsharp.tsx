import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginBoldsharp = ({
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
      d="M2.785 12.75h6.5v-1.5h-6.5zM9.285 2.25v9h5.96l-2.53-2.52 1.05-1.07 4.36 4.34-4.36 4.34-1.05-1.07 2.53-2.52h-5.96v9h12.43V2.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoginBoldsharp;
