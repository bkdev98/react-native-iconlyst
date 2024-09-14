import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoneLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.34 14.576a2.253 2.253 0 0 0-3.184 0l-7.43-7.43A2.252 2.252 0 1 0 6.54 3.96a2.25 2.25 0 0 0-.518 2.363 2.248 2.248 0 0 0-2.362 3.703 2.25 2.25 0 0 0 3.184 0l7.43 7.43a2.252 2.252 0 0 0 3.186 3.186c.64-.64.808-1.567.517-2.364a2.248 2.248 0 0 0 2.364-3.702M18.407 9.57h1.182M18.367 6l-1.125 1.125M14.773 5.936V4.754M9.16 18.815v1.182M6.727 17.643l-1.125 1.124M5.527 15.182H4.345"
    />
  </Svg>
);
export default IconlystBoneLight;
