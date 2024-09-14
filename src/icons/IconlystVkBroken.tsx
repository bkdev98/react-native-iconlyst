import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVkBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.431 9.379a7.7 7.7 0 0 1-1.156 1.745c-.415.465-.904.859-1.492 1.072-.4.14-.803.18-1.213.19M17.431 15.389a7.7 7.7 0 0 0-1.156-1.745c-.415-.46-.904-.859-1.492-1.072-.4-.14-.803-.18-1.213-.185h-.613M11.751 9.38h1.2v6.001c-3.584 0-4.883-4.349-4.883-6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.75 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-5.344 8.226"
    />
  </Svg>
);
export default IconlystVkBroken;
