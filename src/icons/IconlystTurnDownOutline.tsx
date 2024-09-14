import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnDownOutline = ({
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
      d="M20.528 15.276a.75.75 0 0 1 0 1.061l-2.797 2.797a.75.75 0 0 1-1.06 0l-2.797-2.797a.75.75 0 0 1 1.06-1.06l2.267 2.266 2.267-2.267a.75.75 0 0 1 1.06 0M3.25 16.398a2.956 2.956 0 1 1 5.912 0 2.956 2.956 0 0 1-5.912 0m2.956-1.457a1.456 1.456 0 1 0 0 2.913 1.456 1.456 0 0 0 0-2.913"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.214 6.144a5.236 5.236 0 0 0-5.236 5.237.75.75 0 0 1-1.5 0 6.736 6.736 0 0 1 13.473 0v7.218a.75.75 0 1 1-1.5 0v-7.218a5.236 5.236 0 0 0-5.237-5.237"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnDownOutline;
