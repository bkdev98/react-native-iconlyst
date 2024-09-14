import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarEngineEnergyOutline = ({
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
      d="M3.25 9.46a.75.75 0 0 1 .75.75v6.067a.75.75 0 0 1-1.5 0V10.21a.75.75 0 0 1 .75-.75M12.149 3.271a.75.75 0 0 1 .75.75v3.034a.75.75 0 0 1-1.5 0V4.021a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.376 4.021a.75.75 0 0 1 .75-.75h4.046a.75.75 0 0 1 0 1.5h-4.046a.75.75 0 0 1-.75-.75M2.5 13.243a.75.75 0 0 1 .75-.75h2.831a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.508 7.805a.25.25 0 0 0-.166.064l-1.453 1.3a1.75 1.75 0 0 1-1.168.447h-.64a.25.25 0 0 0-.25.25v6.079c0 .138.112.25.25.25h.505a1.75 1.75 0 0 1 1.429.74l1.545 2.188a.25.25 0 0 0 .204.105h4.245a.25.25 0 0 0 .25-.25v-2.033a.75.75 0 0 1 .75-.75h2.207a.75.75 0 0 1 .75.75v1.022c0 .138.112.25.25.25h1.034a.25.25 0 0 0 .25-.25V9.867a.25.25 0 0 0-.25-.25h-1.034a.25.25 0 0 0-.25.25v1.023a.75.75 0 0 1-.75.75h-1.422a.75.75 0 0 1-.663-.4l-1.741-3.3a.25.25 0 0 0-.221-.134zM9.341 6.751a1.75 1.75 0 0 1 1.167-.446h3.66c.65 0 1.246.36 1.549.934l1.53 2.9h.219v-.273c0-.966.784-1.75 1.75-1.75h1.034c.966 0 1.75.783 1.75 1.75v8.102a1.75 1.75 0 0 1-1.75 1.75h-1.034a1.75 1.75 0 0 1-1.75-1.75v-.273h-.707v1.284a1.75 1.75 0 0 1-1.75 1.75h-4.245a1.75 1.75 0 0 1-1.429-.74L7.79 17.8a.25.25 0 0 0-.204-.106H7.08a1.75 1.75 0 0 1-1.75-1.75V9.866c0-.966.784-1.75 1.75-1.75h.64a.25.25 0 0 0 .167-.064z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.939 9.99a.75.75 0 0 1 .3 1.018l-.808 1.487h2.235a.75.75 0 0 1 .658 1.109l-1.411 2.592a.75.75 0 0 1-1.318-.717l.808-1.484H10.17a.75.75 0 0 1-.659-1.108l1.412-2.596a.75.75 0 0 1 1.017-.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarEngineEnergyOutline;