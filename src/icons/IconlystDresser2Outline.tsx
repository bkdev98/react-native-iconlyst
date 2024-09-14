import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser2Outline = ({
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
      d="M5.345 3.298C5.977 2.62 6.87 2.25 7.9 2.25H16.1c1.031 0 1.925.37 2.557 1.048.627.673.94 1.589.94 2.59v12.221c0 1.001-.314 1.917-.94 2.59-.632.678-1.526 1.047-2.558 1.047H7.9c-1.032 0-1.925-.369-2.557-1.048-.626-.672-.94-1.588-.94-2.589V5.888c0-1.002.316-1.918.942-2.59m1.098 1.023c-.325.348-.54.876-.54 1.567v12.221c0 .692.214 1.22.538 1.567.318.342.797.57 1.46.57h8.197c.662 0 1.142-.228 1.46-.57.325-.348.538-.876.538-1.567V5.888c0-.691-.213-1.22-.538-1.568-.318-.342-.798-.57-1.46-.57H7.9c-.658 0-1.138.228-1.457.57"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.697 10.22a.75.75 0 0 1 .75.75v2.056a.75.75 0 0 1-1.5 0V10.97a.75.75 0 0 1 .75-.75m4.607 0a.75.75 0 0 1 .75.75v2.056a.75.75 0 0 1-1.5 0V10.97a.75.75 0 0 1 .75-.75M11.996 2.252a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0V3.002a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDresser2Outline;
