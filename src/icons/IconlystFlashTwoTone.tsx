import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.845 9.923h-2.738v-5.79c0-.963-1.234-1.364-1.8-.584l-6.695 9.222a.995.995 0 0 0 .804 1.579h2.739"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.846 9.922h2.738a.995.995 0 0 1 .805 1.58l-6.695 9.22c-.566.782-1.8.38-1.8-.583v-5.79h-2.74"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFlashTwoTone;
