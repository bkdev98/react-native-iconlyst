import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHuobiTokenLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.844 20.88s-.436-.766-.573-1.02a6.8 6.8 0 0 1-.806-2.572c-.276-3.453 4.001-6.047 4.412-8.853.5-3.43-1.832-5.238-2.17-5.435-.368 1.327-1.783 4.815-4.448 8.18-1.556 1.944-1.949 4.501-.725 6.717.733 1.329 2.044 2.73 3.579 2.993.448.077.73-.01.73-.01"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.902 10.412s-.193.88-2.813 4.35c-2.532 3.295.974 5.87 1.384 6.235V21c.518-.429 7.068-4.5 1.429-10.588"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHuobiTokenLight;
