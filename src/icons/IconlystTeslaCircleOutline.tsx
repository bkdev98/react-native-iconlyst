import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTeslaCircleOutline = ({
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
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.473 9.574a2.332 2.332 0 0 0 .498.648l2.26-.487a.75.75 0 0 1 .883.54L12 13.614l.887-3.339a.75.75 0 0 1 .881-.54l2.26.483a2.618 2.618 0 0 0 .492-.648c-2.74-1.165-6.271-1.18-9.047.004M6.156 8.536c3.499-1.806 8.247-1.78 11.689 0a.75.75 0 0 1 .357.932c-.169.445-.338.816-.574 1.164-.236.35-.519.646-.879.963a.75.75 0 0 1-.653.171l-1.943-.415-1.428 5.378a.75.75 0 0 1-1.45 0l-1.428-5.377-1.922.414a.75.75 0 0 1-.624-.145c-.383-.304-.68-.6-.926-.963-.24-.356-.411-.744-.578-1.195a.75.75 0 0 1 .36-.927"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTeslaCircleOutline;
