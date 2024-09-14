import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoldContractVerticalOutline = ({
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
      d="M11.25 16.565V21a.75.75 0 0 0 1.5 0v-4.438l1.91 1.919a.75.75 0 0 0 1.062-1.059l-3.19-3.204a.75.75 0 0 0-.53-.22H12a.75.75 0 0 0-.56.25l-3.16 3.174a.75.75 0 1 0 1.062 1.059zM3.75 12a.75.75 0 0 1 .75-.75h.938a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75m3.75 0a.75.75 0 0 1 .75-.75h2.344a.75.75 0 0 1 0 1.5H8.25A.75.75 0 0 1 7.5 12m5.156 0a.75.75 0 0 1 .75-.75h2.344a.75.75 0 0 1 0 1.5h-2.344a.75.75 0 0 1-.75-.75m5.156 0a.75.75 0 0 1 .75-.75h.938a.75.75 0 0 1 0 1.5h-.937a.75.75 0 0 1-.75-.75M11.25 7.434V3a.75.75 0 0 1 1.5 0v4.437l1.91-1.918a.75.75 0 0 1 1.062 1.058l-3.19 3.204a.75.75 0 0 1-.53.221H12a.75.75 0 0 1-.56-.251L8.28 6.577A.75.75 0 0 1 9.341 5.52z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFoldContractVerticalOutline;
