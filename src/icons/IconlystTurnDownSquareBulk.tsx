import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnDownSquareBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 2.75H7.782C4.622 2.75 2.5 4.97 2.5 8.276v7.948c0 3.305 2.122 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526V8.276c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.385 15.686a.75.75 0 0 1-1.5 0v-4.283a2.173 2.173 0 0 0-2.17-2.17c-1.196 0-2.17.973-2.17 2.17v2.803l.665-.665a.75.75 0 1 1 1.061 1.061l-1.941 1.94a.74.74 0 0 1-1.075-.008l-1.933-1.932a.75.75 0 0 1 1.06-1.06l.663.662v-2.8a3.675 3.675 0 0 1 3.67-3.672 3.675 3.675 0 0 1 3.67 3.671z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnDownSquareBulk;
