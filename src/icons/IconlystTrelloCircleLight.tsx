import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrelloCircleLight = ({
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
      d="M14.205 12.784h1.57a.785.785 0 0 0 .784-.785v-3.14a.785.785 0 0 0-.784-.785h-1.57a.785.785 0 0 0-.785.785V12c0 .433.351.784.785.784M8.225 15.923h1.57a.785.785 0 0 0 .785-.785V8.86a.785.785 0 0 0-.785-.785h-1.57a.785.785 0 0 0-.785.785v6.28c0 .432.352.784.785.784"
    />
    <Circle
      cx={12}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystTrelloCircleLight;
