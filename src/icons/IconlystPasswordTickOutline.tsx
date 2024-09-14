import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordTickOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.375 4.007c.966-1.035 2.34-1.614 3.962-1.614h8.24c1.625 0 3 .578 3.965 1.615C21.502 5.038 22 6.46 22 8.054v2.186a.75.75 0 0 1-1.5 0V8.054c0-1.285-.398-2.318-1.055-3.024-.652-.7-1.613-1.137-2.868-1.137h-8.24c-1.25 0-2.212.437-2.865 1.137-.658.706-1.058 1.74-1.058 3.024v3.96c0 1.285.398 2.319 1.055 3.024.651.7 1.613 1.138 2.868 1.138h2.027a.75.75 0 0 1 0 1.5H8.337c-1.626 0-3-.58-3.966-1.616-.96-1.03-1.457-2.452-1.457-4.045V8.054c0-1.595.5-3.017 1.461-4.047"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.836 13.865a3.08 3.08 0 1 0 0 6.16 3.08 3.08 0 0 0 0-6.16m-4.58 3.08a4.58 4.58 0 1 1 9.16 0 4.58 4.58 0 0 1-9.16 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.068 15.562a.75.75 0 0 1 0 1.06l-2.127 2.127a.75.75 0 0 1-1.06 0l-1.277-1.276a.75.75 0 0 1 1.061-1.06l.746.745 1.596-1.597a.75.75 0 0 1 1.061 0M11.447 9.982a1.011 1.011 0 1 1 2.023 0 1.011 1.011 0 0 1-2.023 0M15.352 9.982a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.022 0M7.541 9.982a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.022 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordTickOutline;
