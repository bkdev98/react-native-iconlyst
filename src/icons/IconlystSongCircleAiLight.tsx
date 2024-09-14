import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongCircleAiLight = ({
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
      d="M12 21a9 9 0 1 1 8.153-12.816"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.82 14.208a2.103 2.103 0 1 1-4.176-.503 2.103 2.103 0 0 1 4.175.503"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.82 14.207.756-6.266s.371 1.477 1.795 1.95M18.17 15.666l.102.274a3.78 3.78 0 0 0 2.232 2.236l.274.101-.274.102a3.78 3.78 0 0 0-2.232 2.235l-.102.275-.101-.275a3.78 3.78 0 0 0-2.232-2.235l-.275-.102.275-.101a3.78 3.78 0 0 0 2.232-2.236zM21.058 11.075c.19.629.683 1.121 1.311 1.313a1.97 1.97 0 0 0-1.311 1.313 1.97 1.97 0 0 0-1.312-1.313 1.97 1.97 0 0 0 1.312-1.313"
    />
  </Svg>
);
export default IconlystSongCircleAiLight;
