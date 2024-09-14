import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteBoldsharp = ({
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
      d="M11.5 18.137H13v-6.16h-1.5zm-7.17-10.5 1.42 14.84h13l1.42-14.84zM18.188 4.166h-1.58V2.731H7.892v1.435h-1.58v1.5h11.875z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeleteBoldsharp;
