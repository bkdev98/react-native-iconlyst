import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaErrorBroken = ({
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
      d="m15.474 15.068 5.692 5.691M18.32 17.914l-2.845 2.846M21.167 15.068l-.685.685M3.5 15.108v5.653M15.474 7.17v3.607M21.5 3.24v7.538M9.499 17.493v3.267m0-9.506v2.376"
    />
  </Svg>
);
export default IconlystAntenaErrorBroken;
