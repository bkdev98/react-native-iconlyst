import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatFavoriteBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.063 19.12 1.363 1.363c.553.553 1.45.553 2.002 0l1.364-1.364a2.07 2.07 0 0 1 1.462-.605h1.024a3.776 3.776 0 0 0 3.776-3.776v-3.184M12.957 4.334H7.576a3.775 3.775 0 0 0-3.775 3.775v6.63a3.776 3.776 0 0 0 3.775 3.775M19.194 8.56s-2.03-1.106-2.504-2.579c-.294-.92.05-1.97 1.014-2.282a1.65 1.65 0 0 1 1.49.251c.427-.317.98-.41 1.488-.25.964.31 1.311 1.362 1.017 2.281-.16.505-.508.969-.897 1.36M15.28 11.576v.07m.283-.055a.285.285 0 1 1-.569 0 .285.285 0 0 1 .57 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.577 11.576v.07m.283-.055a.285.285 0 1 1-.569 0 .285.285 0 0 1 .569 0"
    />
  </Svg>
);
export default IconlystChatFavoriteBroken;
