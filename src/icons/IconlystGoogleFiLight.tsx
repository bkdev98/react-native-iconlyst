import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleFiLight = ({
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
      d="M17.365 3.5H6.637a2.23 2.23 0 1 0 0 4.462h10.728a2.23 2.23 0 1 0 0-4.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.594 5.73a2.23 2.23 0 1 1-4.462 0 2.23 2.23 0 0 1 4.461 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.593 18.27v-5.516a2.23 2.23 0 1 0-4.461 0v5.515a2.23 2.23 0 1 0 4.461 0M10.459 10.523H6.635a2.23 2.23 0 0 0 0 4.462h3.824a2.23 2.23 0 1 0 0-4.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.866 18.27v-5.516a2.23 2.23 0 1 0-4.462 0v5.515a2.23 2.23 0 1 0 4.462 0"
    />
  </Svg>
);
export default IconlystGoogleFiLight;
