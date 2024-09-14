import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChurchOutline = ({
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
      d="M2.97 20.965a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.45 17.457v3.512a.75.75 0 0 1-1.5 0V17.46c0-.836.682-1.52 1.519-1.52h2.504c.836 0 1.519.684 1.519 1.52v3.508a.75.75 0 0 1-1.5 0V17.46l-.001-.005-.006-.008-.008-.006h-2.513l-.008.006zM6.24 13.414a.685.685 0 0 0-.684.685v6.868a.75.75 0 0 1-1.5 0V14.1c0-1.214.985-2.185 2.185-2.185h1.134a.75.75 0 1 1 0 1.5zM17.309 12.664a.75.75 0 0 1 .75-.75h1.257c1.199 0 2.185.971 2.185 2.185v6.868a.75.75 0 0 1-1.5 0V14.1a.685.685 0 0 0-.685-.685h-1.257a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.635 6.625a2.17 2.17 0 0 1 2.173 0l3.926 2.282a2.16 2.16 0 0 1 1.077 1.87v10.19a.75.75 0 0 1-1.5 0v-10.19a.66.66 0 0 0-.33-.572l-3.925-2.283a.67.67 0 0 0-.668 0l-3.927 2.282a.66.66 0 0 0-.33.574v10.19a.75.75 0 0 1-1.5 0v-10.19c0-.77.41-1.483 1.076-1.87z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.97 3.031a.75.75 0 0 1 .75-.75h2.95a.75.75 0 0 1 .75.75v2.284a.75.75 0 0 1-.75.75h-2.2V7.08a.75.75 0 0 1-1.5 0zm1.5 1.534h1.45V3.78h-1.45zM12.72 11.16a1.01 1.01 0 1 1 0 2.021 1.01 1.01 0 0 1 0-2.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChurchOutline;
