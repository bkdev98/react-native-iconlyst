import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioChannelLight = ({
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
      d="M17.39 18.797H6.611C4.386 18.797 3 17.225 3 15.002V9c0-2.224 1.386-3.795 3.613-3.795h10.776C19.615 5.205 21 6.776 21 9v6.002c0 2.223-1.391 3.795-3.61 3.795"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.79 5.203-.985 2.718a1.85 1.85 0 0 1-1.749 1.227H9.942A1.85 1.85 0 0 1 8.194 7.92l-.985-2.718"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.043 13.436a1.83 1.83 0 1 0 3.658 0 1.83 1.83 0 0 0-3.658 0M14.299 13.436a1.83 1.83 0 1 0 3.658 0 1.83 1.83 0 0 0-3.658 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRadioChannelLight;
