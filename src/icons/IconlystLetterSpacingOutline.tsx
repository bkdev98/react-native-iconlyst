import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLetterSpacingOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 8.285a.75.75 0 0 1 .687.45l3.26 7.46a.75.75 0 0 1-1.375.6L12.5 10.908l-2.572 5.887a.75.75 0 1 1-1.375-.6l3.26-7.46a.75.75 0 0 1 .687-.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.656 13.828a.75.75 0 0 1 .75-.75h4.188a.75.75 0 0 1 0 1.5h-4.188a.75.75 0 0 1-.75-.75M4.5 5.004a.75.75 0 0 1 .75.75v14.024a.75.75 0 0 1-1.5 0V5.754a.75.75 0 0 1 .75-.75M20.5 5.004a.75.75 0 0 1 .75.75v14.024a.75.75 0 0 1-1.5 0V5.754a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLetterSpacingOutline;