import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotDrinkBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.691 15.501A5.5 5.5 0 0 0 9.19 21h2.364a5.5 5.5 0 0 0 5.499-5.499v-3.475a2.71 2.71 0 0 0-2.708-2.708H6.399a2.71 2.71 0 0 0-2.708 2.708M17.053 11.768h.653a2.603 2.603 0 0 1 0 5.205h-.653M6.784 4.69a1.194 1.194 0 0 0 0 1.69M14.31 4.69a1.194 1.194 0 0 0 0 1.69M10.548 3a1.195 1.195 0 0 1 0 1.69 1.194 1.194 0 0 0 0 1.69"
    />
  </Svg>
);
export default IconlystHotDrinkBroken;
