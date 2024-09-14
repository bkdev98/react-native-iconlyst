import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGumroadCircleLight = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.327 13.324a.361.361 0 1 0 .003.723.361.361 0 0 0-.003-.723M15.401 7.594a.362.362 0 1 0 .003.723.362.362 0 0 0-.003-.723"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.042 7.957H8.905c-.494 0-.895.4-.895.895v6.658c0 .495.4.894.895.894h6.192c.494 0 .894-.4.894-.894v-3.704c0-.494-.4-.895-.894-.895H11.91c-.494 0-.894.4-.894.895v.974c0 .494.4.895.894.895h1.056"
    />
  </Svg>
);
export default IconlystGumroadCircleLight;
