import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconlyProTwoTone = ({
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
      d="M19.872 5.636c-3.602-3.515-9.44-3.515-13.042 0a8.85 8.85 0 0 0 0 12.728c3.601 3.515 9.44 3.515 13.042 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.872 5.637-2.567 2.505c-2.184-2.13-5.724-2.13-7.908 0a5.364 5.364 0 0 0 0 7.717c2.184 2.131 5.724 2.131 7.908 0l2.567 2.506"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystIconlyProTwoTone;
