import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHurricaneCloudyTwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.163 19.24c0-1.314-1.032-3.943-3.943-3.943-1.444 0-2.425.646-3.047 1.458l-.31.446m2.725 2.416c0-.805-.632-2.415-2.415-2.415-1.784 0-2.416 1.61-2.416 2.415l-.103.007c-.97 0-1.808.56-2.209 1.376m10.498-1.075a2.705 2.705 0 0 1 4.437.95"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M10.273 15.235a2.8 2.8 0 0 0-5.59-.27" />
      <Path d="M3.195 16.208a1.478 1.478 0 0 1 2.78-.423" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.306 4.173c0 .647 1.787 1.172 3.991 1.172s3.992-.525 3.992-1.172c0-.648-1.787-1.173-3.992-1.173s-3.991.525-3.991 1.173"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.074 11.197c1.29.244 2.525.031 3.215-.252M15.816 8.125c1.584.229 2.87.052 3.222 0 1.168-.173 1.996-.604 1.996-1.108 0-.277-.25-.532-.668-.734M8.508 6.477c-.679.472-1.038.955-.946 1.374.205.936 3.425 1.724 5.581 1.44"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.489 15.384c1.497-4.102-2.908-7.348-2.186-11.23m7.985.154c-.357 3.116 1.814 7.312-2.46 9.905"
    />
  </Svg>
);
export default IconlystHurricaneCloudyTwoTone;
