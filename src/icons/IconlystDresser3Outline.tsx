import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser3Outline = ({
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
      d="M5.343 3.298C5.976 2.62 6.87 2.25 7.9 2.25h8.2c1.033 0 1.927.37 2.559 1.048.627.673.94 1.589.94 2.59v12.224c0 1.001-.314 1.917-.94 2.59-.633.679-1.527 1.048-2.56 1.048H7.9c-1.032 0-1.926-.37-2.558-1.048-.626-.673-.94-1.589-.94-2.59V5.888c0-1.002.316-1.918.942-2.59m1.098 1.023c-.325.348-.54.876-.54 1.567v12.224c0 .691.214 1.22.538 1.568.319.342.799.57 1.46.57h8.2c.662 0 1.142-.229 1.461-.57.325-.349.538-.877.538-1.568V5.888c0-.691-.213-1.22-.538-1.567-.318-.343-.799-.571-1.46-.571H7.9c-.66 0-1.14.228-1.46.57"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.467 18.356a.75.75 0 0 1 .75-.75h1.57a.75.75 0 0 1 0 1.5h-1.57a.75.75 0 0 1-.75-.75M4.402 16.06a.75.75 0 0 1 .75-.75h13.696a.75.75 0 0 1 0 1.5H5.152a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.996 2.25a.75.75 0 0 1 .75.75v13.057a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M9.697 8.073a.75.75 0 0 1 .75.75v1.57a.75.75 0 0 1-1.5 0v-1.57a.75.75 0 0 1 .75-.75m4.608 0a.75.75 0 0 1 .75.75v1.57a.75.75 0 0 1-1.5 0v-1.57a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDresser3Outline;
