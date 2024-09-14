import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderBulksharp = ({
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
      d="M12.46 5.95 10.2 3.17H2.5v17.66H22V5.95z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path fill={props.color} d="M17.37 15.84H7.13v-1.5h10.24z" />
  </Svg>
);
export default IconlystFolderBulksharp;
