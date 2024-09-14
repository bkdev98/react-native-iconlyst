import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingHospitalLight = ({
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
      d="M18.235 10.2h1.708c.647 0 1.17.524 1.17 1.17V21H3.829v-9.63c0-.646.525-1.17 1.172-1.17h1.708"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.236 20.999V7.269c0-.897-.727-1.624-1.625-1.624H8.333c-.897 0-1.624.727-1.624 1.624V21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.523 21.002v-4.5a.9.9 0 0 1 .9-.9h2.096c.497 0 .901.403.901.9v4.5M10.952 10.629h3.039m-1.52-1.52v3.039M10.737 3h3.469"
    />
  </Svg>
);
export default IconlystBuildingHospitalLight;
