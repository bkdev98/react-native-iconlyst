import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatFavoriteTwoTone = ({
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
      d="M12.957 4.334H7.576a3.775 3.775 0 0 0-3.775 3.775v6.63a3.776 3.776 0 0 0 3.775 3.775H8.6c.548 0 1.074.217 1.462.605l1.363 1.364c.553.553 1.45.553 2.002 0l1.364-1.364a2.07 2.07 0 0 1 1.462-.605h1.024a3.776 3.776 0 0 0 3.776-3.776v-3.184"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.69 5.981c-.294-.92.05-1.97 1.014-2.282a1.65 1.65 0 0 1 1.49.251c.427-.317.98-.41 1.488-.25.964.31 1.311 1.362 1.017 2.281-.459 1.457-2.505 2.578-2.505 2.578s-2.03-1.105-2.504-2.578"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.28 11.576v.07m.283-.055a.285.285 0 1 1-.569 0 .285.285 0 0 1 .57 0M9.577 11.576v.07m.283-.055a.285.285 0 1 1-.569 0 .285.285 0 0 1 .569 0"
    />
  </Svg>
);
export default IconlystChatFavoriteTwoTone;
