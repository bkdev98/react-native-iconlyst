import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.75 9.8a.75.75 0 0 1 .75.75c0 4.593-3.525 8.373-8 8.757v2.443a.75.75 0 0 1-1.5 0v-2.443c-4.475-.383-8-4.164-8-8.756a.75.75 0 0 1 1.5 0c0 4.018 3.252 7.288 7.25 7.288S19 14.569 19 10.55a.75.75 0 0 1 .75-.75m-8-8.8c2.653 0 4.811 2.167 4.811 4.831v4.688c0 2.663-2.158 4.83-4.811 4.83s-4.812-2.167-4.812-4.83V5.831C6.938 3.167 9.097 1 11.75 1m0 1.5c-1.826 0-3.312 1.494-3.312 3.331v4.688c0 1.835 1.486 3.33 3.312 3.33 1.801 0 3.27-1.454 3.31-3.255h-2.24a.75.75 0 0 1 0-1.5l2.24-.001V7.255h-1.241a.75.75 0 0 1 0-1.5h1.239l-.002-.113C14.958 3.892 13.513 2.5 11.75 2.5"
    />
  </Svg>
);
export default IconlystVoice2Outline;
