import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPotatoOutline = ({
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
      d="M10.074 4.023c-1.18-.44-2.524-.349-3.418.273l-.428-.616.428.616C5.259 5.268 4.548 7.1 4.421 9.19c-.125 2.079.343 4.224 1.086 5.604l-.66.356.66-.356c2.153 3.998 6.544 6.51 10.569 5.017 1.582-.587 2.646-1.848 3.262-3.482.453-1.2.303-2.708-.35-3.947-.65-1.231-1.732-2.089-3.056-2.172a4.04 4.04 0 0 1-3.776-3.73c-.085-1.141-.912-2.021-2.082-2.457m.524-1.406c1.542.575 2.913 1.859 3.054 3.751a2.54 2.54 0 0 0 2.373 2.345c1.975.124 3.463 1.402 4.29 2.97.822 1.56 1.053 3.515.427 5.175-.73 1.934-2.06 3.586-4.144 4.36-4.977 1.845-10.047-1.322-12.412-5.713l.652-.35-.652.35c-.893-1.66-1.402-4.09-1.262-6.405.14-2.305.938-4.688 2.875-6.035 1.386-.964 3.268-1.018 4.799-.448"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.184 7.544a.75.75 0 0 0-.75.75v.01a.75.75 0 0 0 1.5 0v-.01a.75.75 0 0 0-.75-.75M9.278 12.608a.75.75 0 0 0-.75.75v.01a.75.75 0 0 0 1.5 0v-.01a.75.75 0 0 0-.75-.75M15.778 12.197a.75.75 0 0 0-.75.75v.01a.75.75 0 0 0 1.5 0v-.01a.75.75 0 0 0-.75-.75M14.068 16.296a.75.75 0 0 0-.75.75v.01a.75.75 0 0 0 1.5 0v-.01a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPotatoOutline;
