import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserBoldsharp = ({
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
      d="M22.01 9.942h-2.045V7.937h-1.5v2.005H16.42v1.5h2.045v2.005h1.5v-2.005h2.045zM10.154 14.337H10.1c-3.747 0-6.477 1.84-7.493 5.054l-.118.374.334.204c1.958 1.194 4.399 1.799 7.257 1.799h.094c2.897 0 5.27-.59 7.256-1.8l.334-.203-.118-.374c-1.015-3.213-3.746-5.054-7.493-5.054M10.128 12.109a4.943 4.943 0 0 0 4.938-4.938 4.944 4.944 0 0 0-4.939-4.94 4.944 4.944 0 0 0-4.938 4.94 4.943 4.943 0 0 0 4.938 4.938"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddUserBoldsharp;
