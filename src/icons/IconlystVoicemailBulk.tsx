import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoicemailBulk = ({
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
      d="M19.524 18.28H5.477a1 1 0 1 0 0 2h14.047a1 1 0 1 0 0-2M5.477 5.719h14.047a1 1 0 1 0 0-2H5.477a1 1 0 1 0 0 2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.678 9.82c1.201 0 2.179.978 2.179 2.18a2.18 2.18 0 0 1-2.179 2.18 2.18 2.18 0 0 1 0-4.36m9.646 0a2.18 2.18 0 0 1 0 4.36A2.18 2.18 0 0 1 15.145 12c0-1.202.977-2.18 2.179-2.18m-9.646 6.36h9.646A4.183 4.183 0 0 0 21.5 12a4.183 4.183 0 0 0-4.176-4.18A4.184 4.184 0 0 0 13.145 12c0 .801.238 1.543.63 2.18h-2.548c.392-.637.63-1.379.63-2.18a4.184 4.184 0 0 0-4.179-4.18A4.183 4.183 0 0 0 3.5 12a4.183 4.183 0 0 0 4.178 4.18"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVoicemailBulk;
