import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPauseLight = ({
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
      d="M7.432 20a2.157 2.157 0 0 1-2.157-2.157V6.157a2.157 2.157 0 0 1 4.314 0v11.686A2.157 2.157 0 0 1 7.432 20M16.567 20a2.157 2.157 0 0 1-2.157-2.157V6.157a2.157 2.157 0 0 1 4.314 0v11.686A2.157 2.157 0 0 1 16.567 20"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPauseLight;
