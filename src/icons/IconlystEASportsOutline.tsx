import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEASportsOutline = ({
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
      d="M2.25 11.54a.75.75 0 0 1 .75-.75h6.462a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M5.02 6.462a.75.75 0 0 1 .75-.75h6.461a.75.75 0 0 1 0 1.5H5.77a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.084 10.858a.75.75 0 0 1 .366.995l-2.769 6a.75.75 0 0 1-1.362-.628l2.77-6a.75.75 0 0 1 .995-.367"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 17.54a.75.75 0 0 1 .75-.75h7.846a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M15.173 14.77a.75.75 0 0 1 .75-.75h3.461a.75.75 0 0 1 0 1.5h-3.461a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.235 5.78a.75.75 0 0 1 .37.993L11.528 17.85a.75.75 0 0 1-1.364-.625l5.077-11.077a.75.75 0 0 1 .994-.369"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.61 5.78a.75.75 0 0 1 .995.368l5.077 11.077a.75.75 0 0 1-1.364.625L15.241 6.773a.75.75 0 0 1 .37-.994"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEASportsOutline;
