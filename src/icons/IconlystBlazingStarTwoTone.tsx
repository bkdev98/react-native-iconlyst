import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlazingStarTwoTone = ({
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
      d="m6.825 10.217 1.879 1.502a.72.72 0 0 0 .66.127l2.332-.694a.713.713 0 0 1 .876.94l-.88 2.249a.7.7 0 0 0 .075.662l1.365 1.973a.723.723 0 0 1-.64 1.126l-2.422-.112a.74.74 0 0 0-.613.283L7.97 20.19a.723.723 0 0 1-1.272-.244l-.616-2.318a.7.7 0 0 0-.454-.488l-2.285-.789a.713.713 0 0 1-.146-1.276l2.041-1.324a.73.73 0 0 0 .333-.584l.077-2.406a.73.73 0 0 1 1.177-.543"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.059 11.11c1.01-2.144 5.27-6.702 10.391-7.584l-.158 2.52 1.884 1.618-.595 2.426 1.783 2.017c-1.836.133-5.934 1.342-9.237 3.161"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBlazingStarTwoTone;
