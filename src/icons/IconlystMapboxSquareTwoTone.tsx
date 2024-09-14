import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapboxSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.382 9.817c.494-1.09 1.224-2.133 2.271-2.752 1.163-.686 2.643-.75 3.887-.246a4.79 4.79 0 0 1 2.623 2.582c.516 1.22.475 2.673-.165 3.84-.63 1.14-1.757 1.92-2.93 2.426-2.007.83-4.248.928-6.379.642-.29-2.17-.187-4.46.693-6.492"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.037 8.809c.22.49.468.967.699 1.453.485.23.962.48 1.454.698q-.723.355-1.449.705c-.235.484-.483.963-.7 1.456-.25-.476-.464-.97-.715-1.446-.474-.254-.97-.463-1.445-.718.491-.218.97-.464 1.454-.7.231-.484.468-.966.702-1.448"
    />
  </Svg>
);
export default IconlystMapboxSquareTwoTone;
