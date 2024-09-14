import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVergeOutline = ({
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
      fillRule="evenodd"
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.642 9.41a.75.75 0 0 1 1.037.222l3.571 5.53 3.572-5.53a.75.75 0 1 1 1.26.814l-4.202 6.506a.75.75 0 0 1-1.26 0L7.42 10.446a.75.75 0 0 1 .223-1.037"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.487 8.29a.75.75 0 0 1 .661-.395h4.202a.75.75 0 0 1 .624 1.165l-2.1 3.16a.75.75 0 0 1-1.25 0l-2.1-3.16a.75.75 0 0 1-.037-.77m2.06 1.105.702 1.055.702-1.055z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVergeOutline;
