import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBandageTwoTone = ({
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
      d="m5.316 11.195 8.4 8.399a4.802 4.802 0 0 0 6.789-6.79l-8.4-8.397a4.8 4.8 0 1 0-6.79 6.788"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.314 13.108 6.71-6.71M11.867 17.659l6.71-6.71M12.853 11.989v.047m.189-.037a.19.19 0 1 1-.38 0 .19.19 0 0 1 .38 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBandageTwoTone;
