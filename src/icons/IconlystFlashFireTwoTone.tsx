import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashFireTwoTone = ({
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
      d="m18.299 6.539 1.148-1.055M18.636 16.938l1.173 1.026M5.352 6.531 4.189 5.492M6.15 17.45l-1.17 1.029"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.186 12.55 9.89 3.514a.575.575 0 0 1 .54-.377h4.965c.397 0 .675.392.543.767L13.74 9.057a.575.575 0 0 0 .543.767h4.687c.495 0 .759.582.433.954l-8.9 10.16c-.402.457-1.146.06-.99-.528l1.697-6.363a.575.575 0 0 0-.556-.723H6.726a.575.575 0 0 1-.54-.774"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFlashFireTwoTone;
