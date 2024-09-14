import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagLight = ({
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
      d="m20.975 16.044-.984-9.308a4.087 4.087 0 0 0-4.064-3.658h-7.86a4.086 4.086 0 0 0-4.065 3.66l-.977 9.309a4.41 4.41 0 0 0 4.387 4.873h9.176c2.62 0 4.662-2.27 4.387-4.876"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.097 7.703a3.098 3.098 0 1 1-6.195 0"
    />
  </Svg>
);
export default IconlystShoppingBagLight;
