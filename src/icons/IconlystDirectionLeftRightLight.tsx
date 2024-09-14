import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionLeftRightLight = ({
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
      d="M19.762 6.305 16.957 9.11m2.805-2.805L16.957 3.5m2.805 2.805H4.238m0 0L7.043 9.11M4.238 6.305 7.043 3.5M4.653 16.137a.843.843 0 0 0 0 1.3l3.693 2.908c.491.387 1.181.007 1.181-.65v-5.817c0-.658-.69-1.037-1.181-.65zM19.346 16.137a.843.843 0 0 1 0 1.3l-3.692 2.908c-.492.387-1.182.007-1.182-.65v-5.817c0-.658.69-1.037 1.182-.65z"
    />
  </Svg>
);
export default IconlystDirectionLeftRightLight;
