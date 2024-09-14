import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatBadgeBroken = ({
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
      d="m10.22 18.968 1.396 1.402a1.45 1.45 0 0 0 2.054 0l1.396-1.402c.398-.4.937-.624 1.5-.624h1.05a3.876 3.876 0 0 0 3.87-3.883v-3.275M14.086 3.762H7.67a3.877 3.877 0 0 0-3.87 3.883v6.817a3.876 3.876 0 0 0 3.87 3.883M21.8 5.518c0 1.23-.995 2.228-2.221 2.228a2.225 2.225 0 0 1-2.222-2.228c0-1.231.995-2.229 2.222-2.229M9.809 9.744v2.88m5.667-2.88v2.88"
    />
  </Svg>
);
export default IconlystChatBadgeBroken;
