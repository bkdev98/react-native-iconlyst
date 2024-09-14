import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindsockLight = ({
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
      d="M12.489 9.505c2.069 1.195 4.125 1.506 4.593.696s-.83-2.436-2.899-3.63c-2.069-1.195-4.125-1.506-4.593-.696s.83 2.436 2.899 3.63M8.734 8.038c-.24 2.841 2.91 7.507 4.366 7.156M6.68 13.086c-.195 2.312 2.368 6.108 3.552 5.822"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.53 5.95 4.545 18.428c-.205.354.565 1.181 1.718 1.847 1.154.667 2.255.92 2.46.565l8.306-10.56M19.596 3v18M10.327 5.423l9.22-1.02M17.132 10.095l2.45-5.67"
    />
  </Svg>
);
export default IconlystWindsockLight;
