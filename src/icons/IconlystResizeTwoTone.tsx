import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResizeTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.909 14.977H11.09a1.57 1.57 0 0 1-1.571-1.571v-2.818c0-.868.704-1.572 1.57-1.572h2.819c.868 0 1.572.704 1.572 1.572v2.818c0 .868-.704 1.571-1.572 1.571"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.5 3-3.936 3.936M17.435 3.009 21.499 3l-.01 4.064M21.5 20.998l-3.936-3.936M17.435 20.989l4.064.008-.01-4.063M3.5 3l3.936 3.936M7.564 3.009 3.5 3l.009 4.064M3.5 20.998l3.936-3.936M7.564 20.989l-4.064.008.009-4.063"
    />
  </Svg>
);
export default IconlystResizeTwoTone;
