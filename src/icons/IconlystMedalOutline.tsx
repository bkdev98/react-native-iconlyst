import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedalOutline = ({
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
      fill={props.color}
      d="M12.251 16.184a6.966 6.966 0 1 1 6.966-6.967 6.975 6.975 0 0 1-6.966 6.967m0-12.434a5.467 5.467 0 1 0 5.466 5.467 5.474 5.474 0 0 0-5.466-5.467"
    />
    <Path
      fill={props.color}
      d="M8.644 21.751c-.273 0-.54-.072-.777-.207a1.56 1.56 0 0 1-.8-1.37l-.018-6.632a.75.75 0 1 1 1.498-.004l.018 6.633.119.066 2.764-1.658a1.57 1.57 0 0 1 1.624 0l2.759 1.656.119-.067v-6.637a.75.75 0 0 1 1.5 0v6.637a1.578 1.578 0 0 1-2.39 1.354l-2.76-1.657-2.844 1.658a1.6 1.6 0 0 1-.812.228"
    />
  </Svg>
);
export default IconlystMedalOutline;
