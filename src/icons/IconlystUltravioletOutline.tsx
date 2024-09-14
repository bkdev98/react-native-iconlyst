import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUltravioletOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.614 2.25a.75.75 0 0 1 .75.75v1.372a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m6.894 2.855a.75.75 0 0 1 0 1.061l-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97a.75.75 0 0 1 1.06 0M5.72 5.106a.75.75 0 0 1 1.06 0l.97.97a.75.75 0 0 1-1.06 1.06l-.97-.97a.75.75 0 0 1 0-1.06M2.864 12a.75.75 0 0 1 .75-.75h1.372a.75.75 0 0 1 0 1.5H3.614a.75.75 0 0 1-.75-.75m16.628 0a.75.75 0 0 1 .75-.75h1.372a.75.75 0 0 1 0 1.5h-1.372a.75.75 0 0 1-.75-.75M9.264 11.25h6.728a3.447 3.447 0 0 0-6.728 0M7.683 12a4.945 4.945 0 1 1 9.89 0 .75.75 0 0 1-.75.75h-8.39a.75.75 0 0 1-.75-.75M7.271 15.293a.75.75 0 0 1 .75.75v3.155a1.052 1.052 0 1 0 2.105 0v-3.155a.75.75 0 0 1 1.5 0v3.155a2.552 2.552 0 1 1-5.105 0v-3.155a.75.75 0 0 1 .75-.75M13.394 15.354a.75.75 0 0 1 .985.392l1.445 3.357 1.445-3.357a.75.75 0 1 1 1.378.593l-2.135 4.958a.75.75 0 0 1-1.377 0L13 16.339a.75.75 0 0 1 .393-.985"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUltravioletOutline;
