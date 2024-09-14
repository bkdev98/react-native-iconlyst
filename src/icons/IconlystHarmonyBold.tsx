import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHarmonyBold = ({
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
      d="M15.073 10.555c.464-.24 1.001-.695 1.043-1.46a1.143 1.143 0 0 0-1.132-1.085c-.63 0-1.144.516-1.144 1.15v1.844a5.7 5.7 0 0 0 1.233-.449M7.886 14.907a1.14 1.14 0 0 0 1.131 1.083c.631 0 1.146-.515 1.146-1.15v-1.863c-.777.196-2.216.722-2.277 1.93M10.162 11.442V9.16c0-.636-.514-1.15-1.145-1.15-.63 0-1.144.515-1.144 1.15v3.2c.671-.459 1.482-.761 2.29-.92M15.766 11.886c-.6.312-1.261.52-1.926.653v2.302c0 .634.513 1.149 1.144 1.149.632 0 1.145-.515 1.145-1.15V11.67q-.172.116-.363.217"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.629 9.16v5.68a2.65 2.65 0 0 1-2.645 2.65 2.65 2.65 0 0 1-2.644-2.65v-2.116l-.244.016q-.216.013-.434.028v2.072a2.65 2.65 0 0 1-2.645 2.65c-.032 0-.062-.008-.094-.009-.017.001-.031.009-.048.009-1.356 0-2.502-1.149-2.502-2.51 0-.023.007-.041.008-.064-.001-.026-.008-.05-.008-.076V9.16a2.65 2.65 0 0 1 2.644-2.65 2.65 2.65 0 0 1 2.645 2.65v2.105l.349-.023q.165-.01.329-.021V9.16a2.65 2.65 0 0 1 2.644-2.65c.022 0 .043.006.065.007.011-.001.021-.007.032-.007 1.406 0 2.55 1.122 2.55 2.5 0 .034-.006.066-.007.1 0 .017.005.033.005.05M16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHarmonyBold;
