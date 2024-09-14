import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJasmineCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 15.75a.75.75 0 0 1 .75.75v.9a.75.75 0 0 1-1.5 0v-.9a.75.75 0 0 1 .75-.75M12 5.852a.75.75 0 0 1 .75.75v3.15a.75.75 0 1 1-1.5 0v-3.15a.75.75 0 0 1 .75-.75M8.385 7.026a.75.75 0 0 1 1.048.166l.529.728a.75.75 0 1 1-1.214.882l-.529-.728a.75.75 0 0 1 .166-1.048M12.882 13.214a.75.75 0 0 1 1.047.165l1.852 2.549a.75.75 0 1 1-1.214.882l-1.851-2.549a.75.75 0 0 1 .166-1.047M8.434 13.157a.75.75 0 0 1-.481.945l-.856.278a.75.75 0 0 1-.464-1.426l.856-.278a.75.75 0 0 1 .945.481M17.849 10.1a.75.75 0 0 1-.482.945l-2.995.974a.75.75 0 0 1-.464-1.427l2.996-.973a.75.75 0 0 1 .945.481M15.567 13.157a.75.75 0 0 1 .945-.481l.856.278a.75.75 0 0 1-.464 1.426l-.856-.278a.75.75 0 0 1-.481-.945M6.151 10.1a.75.75 0 0 1 .945-.481l2.996.973a.75.75 0 0 1-.463 1.427l-2.996-.974a.75.75 0 0 1-.482-.945M15.615 7.026a.75.75 0 0 1 .166 1.048l-.529.728a.75.75 0 1 1-1.213-.882l.529-.728a.75.75 0 0 1 1.047-.166M11.119 13.214a.75.75 0 0 1 .165 1.047L9.433 16.81a.75.75 0 1 1-1.214-.882l1.852-2.549a.75.75 0 0 1 1.048-.165"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystJasmineCircleOutline;
