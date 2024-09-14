import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMergeRightOutline = ({
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
      d="M3.38 3.422a.75.75 0 0 1 1.056.1L9.19 9.277a.75.75 0 1 1-1.157.956L3.28 4.478a.75.75 0 0 1 .1-1.056m12.697 4.512a.75.75 0 0 1 1.06 0l3.536 3.536a.75.75 0 0 1 0 1.06l-3.535 3.536a.75.75 0 0 1-1.06-1.06l2.254-2.256h-7.135l-6.775 7.744a.75.75 0 0 1-1.129-.988l7-8a.75.75 0 0 1 .564-.256h7.475l-2.255-2.255a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMergeRightOutline;
