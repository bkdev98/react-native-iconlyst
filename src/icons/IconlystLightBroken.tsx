import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLightBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.306 21.137H19.01M14.67 8.175s1.347-1.348 1.37-1.385c.378-.408.564-.935.572-1.462a2.23 2.23 0 0 0-.647-1.551 2.2 2.2 0 0 0-2.5-.426M9.953 19.115h.869M18.26 10.242c1.334 3.92.446 8.58-3.158 10.894"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.864 12.685 1.566 1.566a5.616 5.616 0 1 0-7.942-7.942l3.971 3.97M6.303 10.395c.29 1.827 1.216 2.928 3.023 3.023"
    />
  </Svg>
);
export default IconlystLightBroken;
