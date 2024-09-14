import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioChannelBroken = ({
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
      d="M12.25 18.798H6.862c-2.227 0-3.612-1.572-3.612-3.795V9c0-2.224 1.385-3.795 3.613-3.795h10.776c2.226 0 3.611 1.571 3.611 3.795v6.002c0 2.223-1.391 3.795-3.61 3.795H16.51"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.639 12.93a2.377 2.377 0 1 1 1.391 2.163"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.895 12.93a1.484 1.484 0 1 0 2.967 0 1.484 1.484 0 0 0-2.967 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.505 11.451-3.577-.436M16.506 14.406l-7.156.873M15.853 5.203l-.74 2.044a1.39 1.39 0 0 1-1.316.923h-3.094a1.39 1.39 0 0 1-1.315-.923l-.74-2.044"
    />
  </Svg>
);
export default IconlystRadioChannelBroken;
