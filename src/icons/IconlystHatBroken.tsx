import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHatBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21.342c7.279-.083 9.288-.567 9.25-3.73-.02-1.587-.373-2.49-1.73-2.984M9.633 7.233c-2.99 1.187-5.147 4.472-5.147 7.553 2.054.377 3.778.622 5.4.737M5.588 18.332l.06-.043c.702-.5 1.84-.5 2.541 0 .702.5 1.84.5 2.541 0 .702-.5 1.84-.5 2.541 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.361 5.76a1.15 1.15 0 0 1-.19.615v0a.1.1 0 0 0 0 .112v0a1.162 1.162 0 0 1-1.037 1.795v0a.1.1 0 0 0-.097.056v0a1.162 1.162 0 0 1-2.072 0v0a.1.1 0 0 0-.097-.056v0a1.162 1.162 0 0 1-1.036-1.795v0a.1.1 0 0 0 0-.112v0a1.162 1.162 0 0 1 1.036-1.795v0c.04.003.078-.02.097-.055v0a1.164 1.164 0 0 1 1.73-.41"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.368 7.233c2.99 1.187 5.146 4.472 5.146 7.553-2.244.409-4.095.664-5.852.764M4.488 14.625c-1.364.493-1.718 1.396-1.737 2.986-.031 2.513 1.23 3.336 5.398 3.61M18.414 18.332l-.06-.043c-.702-.5-1.84-.5-2.541 0"
    />
  </Svg>
);
export default IconlystHatBroken;
