import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseDownTwoTone = ({
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
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.114 9.073c4.171 0 7.554-1.364 7.554-3.047s-3.383-3.047-7.554-3.047S4.56 4.343 4.56 6.026s3.382 3.047 7.554 3.047Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.56 6.142v11.872s0 3.008 7.597 3.008M19.668 11.557V5.984"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.56 11.999s0 3.007 7.597 3.007M14.808 18.205l2.817 2.816m0 0 2.816-2.816m-2.816 2.816v-6.658"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDatabaseDownTwoTone;
