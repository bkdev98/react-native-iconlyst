import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThunderboltBroken = ({
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
      d="M15.282 20.085c.87 0 1.675-.464 2.11-1.217l3.282-5.686a2.43 2.43 0 0 0 0-2.435l-3.282-5.686a2.44 2.44 0 0 0-2.11-1.217H8.718c-.87 0-1.674.464-2.109 1.217l-3.283 5.686a2.43 2.43 0 0 0 0 2.435l3.283 5.686a2.44 2.44 0 0 0 2.109 1.217H12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.708 13.243h2.739v2.895c0 .482.617.683.9.292l3.348-4.61a.498.498 0 0 0-.403-.79h-2.739V8.135a.497.497 0 0 0-.9-.292L9.98 10.148"
    />
  </Svg>
);
export default IconlystThunderboltBroken;
