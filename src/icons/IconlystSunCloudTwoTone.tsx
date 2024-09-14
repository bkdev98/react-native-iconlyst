import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunCloudTwoTone = ({
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
      d="m10.324 3.168.264 1.346m10.299 5.755-1.347.264M4.57 13.467l-1.347.264m13.853-9.2-.766 1.138M7.8 18.331l-.766 1.138M5.724 7.744 4.586 6.98M16.031 10.659a4.197 4.197 0 1 0-6.33 4.815"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.556 16.006c1.271.011 2.298.866 2.298 2.319 0 .94-.56 1.75-1.364 2.114-.339.137-.676.19-.932.19h-5.485c-.257 0-.594-.05-.937-.188a2.32 2.32 0 0 1-1.363-2.116c0-1.453 1.027-2.308 2.298-2.319 0-.914.717-2.743 2.742-2.743s2.743 1.829 2.743 2.743"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunCloudTwoTone;
