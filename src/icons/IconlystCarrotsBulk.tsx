import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarrotsBulk = ({
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
      fill={props.color}
      d="M14.05 5.227c.036.263-.215.46-.478.428-2.453-.303-5.703 1.441-6.716 3.702-.11.246-.415.36-.622.187-.406-.337-.754-.75-.968-1.23-.22-.49-.29-1.097.086-1.606.266-.36.696-.587 1.248-.704-.366-1.485.05-2.735 1.056-3.267s2.277-.172 3.3.968c.412-.392.844-.621 1.29-.64.633-.026 1.09.373 1.367.832.229.378.373.843.438 1.33"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.72 15.73a.49.49 0 0 1-.631-.145c-1.026-1.412-1.752-2.723-1.9-3.492-.225-1.187-.284-3.16 2.919-4.854 3.204-1.695 4.803-.537 5.655.318.224.225.468.578.718 1.027a.484.484 0 0 1-.204.661l-2.383 1.26a.75.75 0 0 0 .702 1.327l2.229-1.18a.49.49 0 0 1 .692.26 27 27 0 0 1 1.003 3.409.49.49 0 0 1-.253.543l-1.797.951a.75.75 0 1 0 .701 1.326l1.06-.561a.485.485 0 0 1 .715.378c.197 2.176-.093 4.012-1.277 4.572-1.695.995-4.631-1.288-6.97-3.938a.49.49 0 0 1 .143-.76l1.628-.86a.75.75 0 1 0-.702-1.326z"
    />
  </Svg>
);
export default IconlystCarrotsBulk;
