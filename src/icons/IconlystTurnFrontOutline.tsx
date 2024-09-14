import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnFrontOutline = ({
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
      d="M15.276 3.47a.75.75 0 0 1 1.061 0l2.797 2.797a.75.75 0 0 1 0 1.06l-2.797 2.797a.75.75 0 0 1-1.06-1.06l2.266-2.267-2.267-2.267a.75.75 0 0 1 0-1.06M13.441 17.792a2.956 2.956 0 1 1 5.913 0 2.956 2.956 0 0 1-5.913 0m2.957-1.456a1.456 1.456 0 1 0 0 2.912 1.456 1.456 0 0 0 0-2.912"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.38 7.547a5.236 5.236 0 1 0 0 10.473.75.75 0 0 1 0 1.5 6.736 6.736 0 0 1 0-13.473h7.22a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnFrontOutline;
