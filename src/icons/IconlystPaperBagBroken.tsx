import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperBagBroken = ({
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
      d="M6.6 3.82H4.38C3.617 3.82 3 4.462 3 5.254v1.827c0 .792.617 1.434 1.379 1.434H19.62c.762 0 1.38-.642 1.38-1.434V5.254c0-.792-.618-1.434-1.38-1.434h-9.21M9.361 12.91h5.278M4.277 8.516v7.352c0 2.528 1.574 4.314 4.104 4.314H12M15.618 20.182c2.53 0 4.105-1.786 4.105-4.314V8.516"
    />
  </Svg>
);
export default IconlystPaperBagBroken;
