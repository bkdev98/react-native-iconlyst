import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudQuestionTwoTone = ({
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
      d="M19.064 17.747a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.14-4.103-4.14 0-1.633-1.28-4.9-4.897-4.9S7.603 8.2 7.603 9.834c-2.27.019-4.103 1.544-4.103 4.14 0 1.679 1 3.125 2.436 3.774"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.297 19.059v.005M12.296 16.85c-.01-.739.663-1.053 1.164-1.338.609-.337 1.022-.87 1.022-1.614 0-1.1-.889-1.984-1.982-1.984-1.1 0-1.984.883-1.984 1.984"
    />
  </Svg>
);
export default IconlystCloudQuestionTwoTone;
