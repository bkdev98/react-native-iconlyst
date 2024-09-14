import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphoneTwoTone = ({
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
      d="M18.092 16.135s-10.267-2.113-11.536-2.43-2.857-1.981-2.857-4.125 1.587-3.81 2.857-4.127c1.269-.317 11.486-2.419 11.486-2.419"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.824 13.764v4.86a2.377 2.377 0 0 0 4.753 0v-3.786"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.3 9.577c0 3.633-1.323 6.578-2.954 6.578S15.39 13.21 15.39 9.577C15.39 5.945 16.714 3 18.346 3 19.977 3 21.3 5.945 21.3 9.577"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpeakerMegaphoneTwoTone;
