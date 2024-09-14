import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderLockOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.699 4.237c.911-1.144 2.309-1.69 4.139-1.69h1.875a2.89 2.89 0 0 1 2.31 1.155l.856 1.138c.264.35.676.556 1.114.557h2.652c1.801 0 3.207.46 4.134 1.547C21.684 8.004 22 9.508 22 11.283v.004l-.026 4.65v.003c0 1.824-.54 3.366-1.628 4.453s-2.63 1.628-4.455 1.628H8.595c-1.829 0-3.374-.54-4.464-1.628S2.5 17.763 2.5 15.938V8.624c0-1.743.316-3.28 1.199-4.387m1.173.935C4.3 5.889 4 7.017 4 8.624v7.314c0 1.53.449 2.653 1.19 3.394.743.74 1.87 1.189 3.405 1.189h7.296c1.531 0 2.654-.448 3.395-1.189.74-.74 1.188-1.864 1.188-3.394v-.004l.026-4.651v-.002c0-1.647-.305-2.71-.861-3.363-.534-.625-1.431-1.021-2.994-1.021h-2.654a2.9 2.9 0 0 1-2.31-1.155l-.857-1.14a1.39 1.39 0 0 0-1.111-.555H7.838c-1.526 0-2.422.442-2.966 1.125"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.838 13.344a.653.653 0 0 0-.652.653v1.586c0 .36.292.653.652.653h2.826c.36 0 .652-.293.652-.653v-1.586a.653.653 0 0 0-.652-.653zm-2.152.653c0-1.19.963-2.153 2.152-2.153h2.826c1.187 0 2.153.963 2.153 2.153v1.586c0 1.19-.966 2.153-2.153 2.153h-2.826a2.153 2.153 0 0 1-2.152-2.153z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.22 9.164a2.44 2.44 0 0 1 2.467 2.406v1.054a.75.75 0 1 1-1.5 0v-1.038a.936.936 0 0 0-1.873-.006v1.044a.75.75 0 1 1-1.5 0v-1.062a2.436 2.436 0 0 1 2.406-2.398"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderLockOutline;
