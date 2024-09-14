import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery3Outline = ({
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
      d="M5.964 16.86c0-.41.336-.75.75-.75H9.71a.752.752 0 0 1 .363 1.408.75.75 0 0 1-.363.092H6.714a.746.746 0 0 1-.75-.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m2.867 6.6.847-2.11a3.53 3.53 0 0 1 3.284-2.23h10.21c1.444 0 2.743.88 3.282 2.22l.848 2.11c.34.84.514 1.74.512 2.65l-.013 7.71c-.003 1.28-.287 2.48-.988 3.37-.724.92-1.814 1.42-3.196 1.42l-11.109-.02c-1.38 0-2.475-.5-3.203-1.43-.706-.89-.994-2.09-.991-3.38l.012-7.69c.001-.9.174-1.79.505-2.62m2.24-1.56v.01L4.26 7.16l-.038.1h4.654l.62-3.5H6.998a2.04 2.04 0 0 0-1.891 1.28m5.914-1.28-.622 3.5h3.4l-.622-3.5zm3.68 0 .62 3.5h4.669l-.043-.11-.849-2.11a2.04 2.04 0 0 0-1.89-1.28zm5.63 5h-4.92v4.47a.741.741 0 0 1-1.014.7l-2.302-.861-2.294.86a.742.742 0 0 1-1.014-.699V8.76H3.882q-.02.228-.02.46l-.012 7.7c-.003 1.08.244 1.91.67 2.44.402.52 1.034.86 2.027.86l11.11.02c.992 0 1.616-.34 2.012-.84.42-.54.665-1.36.668-2.45l.013-7.71q0-.24-.02-.48m-10.044 0v3.385l1.542-.585c.17-.06.358-.06.528 0l1.554.587V8.76z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDelivery3Outline;
