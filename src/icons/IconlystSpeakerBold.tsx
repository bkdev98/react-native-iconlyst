import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerBold = ({
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
      d="M11.999 18.139a4.25 4.25 0 0 1-4.247-4.247 4.25 4.25 0 0 1 4.247-4.247 4.25 4.25 0 0 1 4.248 4.247 4.25 4.25 0 0 1-4.248 4.247M10.596 5.861h2.807a.75.75 0 0 1 0 1.5h-2.807a.75.75 0 0 1 0-1.5M15.26 2.5H8.739a4.19 4.19 0 0 0-4.184 4.185v10.631A4.19 4.19 0 0 0 8.739 21.5h6.522a4.19 4.19 0 0 0 4.184-4.184V6.685A4.19 4.19 0 0 0 15.26 2.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.999 11.145a2.75 2.75 0 0 0-2.747 2.747 2.75 2.75 0 0 0 2.747 2.747 2.75 2.75 0 0 0 2.748-2.747 2.75 2.75 0 0 0-2.748-2.747"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpeakerBold;
