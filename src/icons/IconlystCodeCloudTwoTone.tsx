import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodeCloudTwoTone = ({
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
      d="M8.472 5.164C3.5 5.164 8.472 12 3.5 12c4.972 0 0 6.836 4.972 6.836"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.495 11.315c-.93.008-1.68.632-1.68 1.696 0 .688.41 1.28.997 1.546.248.1.494.139.682.139h4.011c.188 0 .435-.037.686-.137.588-.266.997-.86.997-1.548 0-1.064-.751-1.688-1.68-1.696 0-.669-.526-2.006-2.007-2.006s-2.006 1.337-2.006 2.006"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.528 5.164c4.972 0 0 6.836 4.972 6.836-4.972 0 0 6.836-4.972 6.836"
    />
  </Svg>
);
export default IconlystCodeCloudTwoTone;
