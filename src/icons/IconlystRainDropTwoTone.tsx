import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainDropTwoTone = ({
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
      d="M12.114 20c-5.786 0-8.397-6.431-5.897-10.342C8.545 6.312 12.114 4 12.114 4s3.57 2.312 5.898 5.658C20.512 13.568 17.9 20 12.114 20"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRainDropTwoTone;
