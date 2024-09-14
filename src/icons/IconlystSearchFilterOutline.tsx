import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchFilterOutline = ({
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
      d="M13.643 4.144c0-.992.806-1.798 1.799-1.798h4.76c.994 0 1.798.806 1.798 1.798v.533c0 .623-.262 1.217-.72 1.637l-1.888 1.868v.713a1.35 1.35 0 0 1-.851 1.255l-.735.293c-.887.352-1.85-.3-1.85-1.255v-1.19l-1.63-1.452-.032-.03a2.22 2.22 0 0 1-.65-1.57zm1.799-.298a.3.3 0 0 0-.299.298v.801c0 .185.072.364.2.498l1.685 1.5.032.03c.253.253.396.597.396.955v1.04l.436-.174v-.675c0-.375.156-.734.431-.99l1.913-1.892.025-.023a.73.73 0 0 0 .239-.537v-.533a.3.3 0 0 0-.298-.298zm-4.207-.655a.75.75 0 0 1-.652.837 7.52 7.52 0 1 0 8.394 8.443.75.75 0 1 1 1.487.194 9 9 0 0 1-2.257 4.878l2.837 2.83a.75.75 0 1 1-1.059 1.062l-2.874-2.867a8.98 8.98 0 0 1-5.591 1.941 9.02 9.02 0 0 1-9.02-9.02c0-4.602 3.446-8.398 7.898-8.95a.75.75 0 0 1 .837.652"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchFilterOutline;
