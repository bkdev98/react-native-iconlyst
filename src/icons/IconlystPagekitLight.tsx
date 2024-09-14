import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPagekitLight = ({
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
      d="M16.722 9.278a2 2 0 0 0-2-2H9.278a2 2 0 0 0-2 2v6.444a1 1 0 0 0 1 1H18.5a2 2 0 0 0 2-2V5.5a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h3.556a2 2 0 0 0 2-2v-4.556a1 1 0 0 1 1-1h2.666a2 2 0 0 0 2-2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPagekitLight;
