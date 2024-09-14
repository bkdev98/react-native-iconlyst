import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareLeftBulk = ({
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
      d="m12.216 8.025-.001-2.483a1.4 1.4 0 0 0-.817-1.275 1.4 1.4 0 0 0-1.501.204l-6.9 5.845a1.4 1.4 0 0 0-.498 1.05v.024c0 .396.168.773.462 1.04l6.909 6.244c.417.377.996.47 1.51.242.516-.23.837-.723.837-1.29v-3.154z"
    />
    <Path
      fill={props.color}
      d="M19.208 10.942c2.904 3.347 2.237 8.284 2.208 8.492a.5.5 0 0 1-.951.136c-1.516-3.349-4.145-4.977-8.249-5.098l-.001-6.447c3.045.096 5.395 1.075 6.993 2.917"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReplyShareLeftBulk;
