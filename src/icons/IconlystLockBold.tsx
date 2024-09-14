import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M11.985 2c3.068 0 5.538 2.415 5.538 5.396v1.533c1.722.538 2.977 2.097 2.977 3.96v4.936c0 2.306-1.911 4.175-4.268 4.175H7.77C5.41 22 3.5 20.13 3.5 17.825v-4.937c0-1.862 1.256-3.421 2.977-3.959V7.396C6.487 4.415 8.957 2 11.985 2m.01 11.384a.875.875 0 0 0-.884.865v2.206c0 .487.396.874.884.874a.88.88 0 0 0 .894-.874v-2.206a.877.877 0 0 0-.894-.865m.01-9.645c-2.063 0-3.74 1.63-3.75 3.637v1.338h7.49V7.396c0-2.017-1.677-3.657-3.74-3.657"
    />
  </Svg>
);
export default IconlystLockBold;
