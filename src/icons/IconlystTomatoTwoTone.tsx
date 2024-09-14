import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTomatoTwoTone = ({
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
      d="M15.749 16.173a4.83 4.83 0 0 0 1.86-2.126"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.117 5.946C18.552 7.032 21 9.86 21 13.179c0 4.257-4.03 7.708-9 7.708s-9-3.451-9-7.708C3 9.802 5.535 6.932 9.064 5.89"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.603 8.61c.34-1.248.639-1.902 1.81-2.781-.567-1.038-.72-1.629-.775-2.716 1.703.52 2.415 1.021 3.491 2.07 1.23-.991 2.048-1.402 3.686-2.07-.117 1.211-.354 1.807-1.164 2.716 1.078.806 1.42 1.443 1.746 2.78-1.123.202-1.759.108-2.91-.582-.345.967-.679 1.405-1.68 1.875-.747-.62-1.08-1.014-1.359-1.875-.923.686-1.532.858-2.845.582"
    />
  </Svg>
);
export default IconlystTomatoTwoTone;
