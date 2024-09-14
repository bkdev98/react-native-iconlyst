import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateFolderFileOutline = ({
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
      d="M3.449 3.953c.911-1.144 2.308-1.69 4.138-1.69h1.875a2.9 2.9 0 0 1 .89.14h.002c.882.288 1.463 1.03 1.724 1.794l.466 1.365c.147.434.442.745.769.851q.204.067.43.07h2.651c1.8 0 3.207.46 4.135 1.546.904 1.059 1.221 2.563 1.221 4.337v.006l-.027 3.282v.003c0 1.823-.541 3.365-1.627 4.452-1.088 1.087-2.63 1.628-4.455 1.628H8.344c-1.828 0-3.374-.54-4.463-1.627-1.09-1.088-1.631-2.631-1.631-4.456V8.341c0-1.743.316-3.28 1.199-4.388m1.173.935c-.572.718-.872 1.845-.872 3.453v7.313c0 1.53.449 2.654 1.19 3.394.743.74 1.869 1.19 3.404 1.19h7.297c1.53 0 2.654-.45 3.394-1.19s1.188-1.863 1.188-3.394v-.006l.027-3.282v-.003c0-1.646-.305-2.708-.862-3.36-.534-.625-1.43-1.02-2.994-1.02h-2.656a2.9 2.9 0 0 1-.891-.144c-.88-.287-1.462-1.027-1.723-1.793l-.466-1.364c-.149-.437-.443-.746-.767-.851a1.4 1.4 0 0 0-.429-.068H7.587c-1.525 0-2.422.443-2.965 1.125"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.609 3.013a.75.75 0 0 1 .75-.75h7.297c1.828 0 3.374.54 4.463 1.627 1.09 1.088 1.63 2.63 1.63 4.456v7.313a.75.75 0 0 1-1.5 0V8.346c0-1.53-.448-2.654-1.19-3.394s-1.868-1.19-3.403-1.19H8.359a.75.75 0 0 1-.75-.75M9.568 15.877a.75.75 0 0 1-.704-.49l-.1-.273a3.01 3.01 0 0 0-1.78-1.782l-.272-.101a.75.75 0 0 1 0-1.407l.272-.1a3.01 3.01 0 0 0 1.78-1.782l.1-.274a.75.75 0 0 1 1.407 0l.101.274a3.01 3.01 0 0 0 1.78 1.781l.272.101a.75.75 0 0 1 0 1.407l-.273.101a3.01 3.01 0 0 0-1.779 1.782l-.1.273a.75.75 0 0 1-.704.49m.949-3.35a4.5 4.5 0 0 1-.95-.949 4.5 4.5 0 0 1-.948.95c.362.267.682.587.949.95.267-.363.587-.683.949-.95M14.879 17.12a.75.75 0 0 1-.718-.533 1.02 1.02 0 0 0-.678-.679.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 1.435 0c.1.326.354.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-.717.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGenerateFolderFileOutline;