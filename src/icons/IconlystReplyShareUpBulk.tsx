import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareUpBulk = ({
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
      d="m15.975 12.216 2.483-.001a1.4 1.4 0 0 0 1.275-.817 1.4 1.4 0 0 0-.204-1.501l-5.845-6.9a1.4 1.4 0 0 0-1.051-.498h-.023c-.396 0-.773.168-1.04.462L5.326 9.87c-.377.417-.47.996-.242 1.51.229.516.723.837 1.289.837h3.155z"
    />
    <Path
      fill={props.color}
      d="M13.058 19.208c-3.347 2.904-8.284 2.237-8.492 2.208a.5.5 0 0 1-.136-.951c3.349-1.516 4.977-4.145 5.098-8.249l6.447-.001c-.096 3.045-1.075 5.395-2.917 6.993"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReplyShareUpBulk;
