import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMousePointerBold = ({
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
      d="M5.24 3.944a1 1 0 0 0-1.071.223h-.001a1 1 0 0 0-.225 1.072L9.464 19.24v.001a1 1 0 0 0 .93.631h.02l.02-.001c.349-.028.735-.227.895-.64v-.003l1.692-4.441 4.97 4.97v.002a1.25 1.25 0 0 0 1.768-1.77l-4.97-4.97 4.44-1.69h.001c.385-.148.64-.515.644-.928V10.4a1 1 0 0 0-.633-.936l-14-5.52"
    />
  </Svg>
);
export default IconlystMousePointerBold;
