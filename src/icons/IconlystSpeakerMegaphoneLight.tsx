import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphoneLight = ({
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
      d="M17.592 16.135s-10.267-2.113-11.536-2.43-2.857-1.981-2.857-4.125 1.587-3.81 2.857-4.127c1.269-.317 11.486-2.419 11.486-2.419"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.324 13.764v4.86a2.377 2.377 0 0 0 4.753 0v-3.786"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.8 9.577c0 3.633-1.323 6.578-2.954 6.578S14.89 13.21 14.89 9.577C14.89 5.945 16.214 3 17.846 3 19.477 3 20.8 5.945 20.8 9.577"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpeakerMegaphoneLight;
