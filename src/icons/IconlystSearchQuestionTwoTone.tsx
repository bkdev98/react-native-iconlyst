import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchQuestionTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.55 11.418A8.417 8.417 0 0 0 12.132 3a8.418 8.418 0 1 0 8.418 8.418"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.861 17.584 21.286 21M12.092 15.193v.007M12.09 12.995c-.01-.803.72-1.144 1.264-1.454.662-.365 1.11-.946 1.11-1.752a2.15 2.15 0 0 0-2.152-2.155c-1.195 0-2.154.96-2.154 2.155"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchQuestionTwoTone;
