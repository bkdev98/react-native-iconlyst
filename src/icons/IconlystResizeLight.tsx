import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResizeLight = ({
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
      d="M13.409 14.977H10.59a1.57 1.57 0 0 1-1.571-1.571v-2.818c0-.868.704-1.572 1.57-1.572h2.819c.868 0 1.572.704 1.572 1.572v2.818c0 .868-.704 1.571-1.572 1.571"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 3-3.936 3.936M16.935 3.009 20.999 3l-.01 4.064M21 20.998l-3.936-3.936M16.935 20.989l4.064.008-.01-4.063M3 3l3.936 3.936M7.064 3.009 3 3l.009 4.064M3 20.998l3.936-3.936M7.064 20.989 3 20.996l.009-4.063"
    />
  </Svg>
);
export default IconlystResizeLight;
