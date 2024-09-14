import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayDownBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.106 6.598c-.522-.853-1.55-1.408-3.08-1.654A42 42 0 0 0 12 4.683a44 44 0 0 0-5.052.264c-1.495.232-2.52.778-3.043 1.625-.485.78-.534 1.795-.148 3.013l.013.035c1.104 2.738 3.432 6.455 5.41 8.64.908 1.034 1.856 1.558 2.816 1.559s1.909-.525 2.813-1.554c1.984-2.192 4.312-5.91 5.425-8.677.392-1.204.348-2.21-.13-2.99"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayDownBold;
