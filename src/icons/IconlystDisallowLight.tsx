import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDisallowLight = ({
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
      d="M8.914 7.324c0-.921-.782-1.695-1.694-1.695-.922 0-1.696.782-1.696 1.694v6.965q.006.638.129 1.253M12.305 6.198a1.695 1.695 0 0 1 3.344-.388"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.302 8V4.695a1.695 1.695 0 1 0-3.39 0v6.15M15.695 11.722v-.074c0-1.189.963-2.152 2.151-2.152.68 0 1.23.55 1.23 1.23l-.002 3.563A6.776 6.776 0 0 1 6.672 18M19.571 5 4.301 20.27M15.691 14.107V9"
    />
  </Svg>
);
export default IconlystDisallowLight;
