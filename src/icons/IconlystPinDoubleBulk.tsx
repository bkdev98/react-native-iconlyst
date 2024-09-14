import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinDoubleBulk = ({
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
      d="M16.902 9.898c-.376-3.749-3.548-6.686-7.394-6.686-4.099 0-7.433 3.334-7.433 7.432 0 5.21 6.104 10.144 7.433 10.144.839 0 2.674-1.388 4.194-3.092-.6-.91-1.067-2.003-1.067-3.161a4.654 4.654 0 0 1 4.267-4.637m-9.957.689c0 1.41 1.15 2.56 2.56 2.56s2.56-1.15 2.56-2.56-1.15-2.56-2.56-2.56-2.56 1.15-2.56 2.56"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.945 10.587c0 1.41 1.15 2.56 2.56 2.56s2.56-1.15 2.56-2.56-1.15-2.56-2.56-2.56-2.56 1.15-2.56 2.56"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M17.254 13.368a1.007 1.007 0 1 0 0 2.015 1.007 1.007 0 0 0 0-2.015"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.289 9.882a4.653 4.653 0 0 0-4.654 4.653c0 1.663.964 3.19 1.897 4.24.478.538.981.99 1.417 1.312.218.16.43.299.626.4.155.082.425.21.714.21.288 0 .558-.128.714-.21.195-.101.407-.24.625-.4.436-.323.94-.774 1.417-1.312.933-1.05 1.897-2.576 1.897-4.24a4.653 4.653 0 0 0-4.653-4.653m-3.047 4.653a3.047 3.047 0 0 1 6.093 0c0 1.076-.653 2.229-1.491 3.173a8 8 0 0 1-1.172 1.087 4 4 0 0 1-.383.252 4 4 0 0 1-.384-.252 8 8 0 0 1-1.172-1.087c-.838-.944-1.49-2.097-1.49-3.173"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinDoubleBulk;
