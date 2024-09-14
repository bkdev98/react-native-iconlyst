import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudQuestionBroken = ({
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
      d="M11.999 19.059v.005M11.796 16.85c-.01-.739.663-1.053 1.164-1.338.609-.337 1.022-.87 1.022-1.614 0-1.1-.889-1.984-1.982-1.984-1.1 0-1.984.883-1.984 1.984M12 4.934c-3.617 0-4.897 3.265-4.897 4.898C4.833 9.852 3 11.377 3 13.972c0 1.68 1 3.126 2.436 3.775M18.563 17.746A4.14 4.14 0 0 0 21 13.972c0-2.596-1.83-4.139-4.103-4.14 0-1.07-.55-2.84-1.945-3.934"
    />
  </Svg>
);
export default IconlystCloudQuestionBroken;
