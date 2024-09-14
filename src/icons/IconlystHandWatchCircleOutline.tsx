import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandWatchCircleOutline = ({
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
      d="M4.54 11.999a7.71 7.71 0 1 1 15.421 0 7.71 7.71 0 0 1-15.422 0m7.709-6.21a6.21 6.21 0 1 0 0 12.42 6.21 6.21 0 0 0 0-12.42"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.293 16.305a.75.75 0 0 1 .888.58l.724 3.445c.112.536.584.92 1.133.92h4.164c.547 0 1.018-.381 1.133-.915l.68-3.183a.75.75 0 0 1 1.467.314l-.68 3.183a2.66 2.66 0 0 1-2.6 2.101h-4.164a2.66 2.66 0 0 1-2.601-2.111l-.724-3.446a.75.75 0 0 1 .58-.888M7.696 3.354a2.66 2.66 0 0 1 2.601-2.104h4.166c1.255 0 2.34.88 2.598 2.11l.723 3.447a.75.75 0 0 1-1.468.308l-.723-3.448a1.155 1.155 0 0 0-1.13-.917h-4.166a1.16 1.16 0 0 0-1.134.918l-.681 3.18a.75.75 0 1 1-1.467-.314zM12.178 8.635a.75.75 0 0 1 .75.75v2.455l1.874 1.118a.75.75 0 1 1-.768 1.288l-2.24-1.336a.75.75 0 0 1-.366-.644V9.385a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHandWatchCircleOutline;
