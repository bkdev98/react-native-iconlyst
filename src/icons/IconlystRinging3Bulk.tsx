import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRinging3Bulk = ({
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
      d="M9.873 18.143a2.13 2.13 0 0 0 2.126 2.106 2.13 2.13 0 0 0 2.125-2.106h1.5a3.63 3.63 0 0 1-3.625 3.606 3.63 3.63 0 0 1-3.626-3.606z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.118 6.792a6.4 6.4 0 0 1 1.895-2.37.75.75 0 0 0-.922-1.183 7.94 7.94 0 0 0-2.336 2.927.75.75 0 1 0 1.363.626M20.245 6.167a7.94 7.94 0 0 0-2.337-2.927.749.749 0 1 0-.922 1.183 6.4 6.4 0 0 1 1.896 2.37.75.75 0 1 0 1.363-.626"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.873 18.143h7.209c.9 0 1.729-.455 2.21-1.216a2.61 2.61 0 0 0 .16-2.519l-.432-.92a4.4 4.4 0 0 1-.42-1.882l-.001-1.224c0-3.384-2.563-6.177-5.85-6.551V3a.75.75 0 0 0-1.5 0v.831c-3.283.374-5.845 3.168-5.845 6.551l-.001 1.224a4.5 4.5 0 0 1-.42 1.882l-.433.92a2.6 2.6 0 0 0 .157 2.518 2.61 2.61 0 0 0 2.212 1.217h2.954"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m6.919 18.143-.017-.002h7.265v.002zM14.42 18.143h2.662l.016-.002h-1.495zM19.702 15.575a2.6 2.6 0 0 0-.25-1.167l-.432-.92a4.4 4.4 0 0 1-.42-1.882l-.001-1.224c0-1.832-.751-3.49-1.962-4.686a6.57 6.57 0 0 1 1.957 4.684l.001 1.227c0 .65.147 1.307.424 1.898l.433.922c.173.367.256.759.25 1.148M12.75 3.828a6.6 6.6 0 0 0-1.5 0V3a.75.75 0 0 1 1.5 0zM6.268 7.123a6.55 6.55 0 0 0-.864 3.259l-.001 1.224a4.5 4.5 0 0 1-.42 1.882l-.433.92a2.6 2.6 0 0 0-.227.76c.036-.252.11-.502.223-.74l.435-.924c.28-.597.424-1.235.424-1.897l.001-1.227c0-1.184.313-2.296.862-3.257"
    />
  </Svg>
);
export default IconlystRinging3Bulk;
