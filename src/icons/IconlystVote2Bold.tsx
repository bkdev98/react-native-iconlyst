import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVote2Bold = ({
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
      d="M20.25 18.46c0 .69-.561 1.25-1.25 1.25H5c-.689 0-1.25-.56-1.25-1.25v-2c0-.689.561-1.25 1.25-1.25h1c.013 0 .024-.007.037-.008l.001.002 1.507 1.506H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-1.538l1.496-1.506.002-.002c.014.001.026.008.04.008h1c.689 0 1.25.561 1.25 1.25zm-.831-4.708.519-.528c.47-.47.73-1.1.73-1.76 0-.67-.26-1.3-.73-1.77l-1.36-1.36-.36.35-5.31 5.31c-.15.14-.34.22-.53.22s-.39-.08-.53-.22l-2.54-2.55c-.3-.29-.3-.76 0-1.06.29-.29.76-.29 1.06 0l2.01 2.02 4.42-4.43.71-.71-3.74-3.74c-.98-.98-2.56-.98-3.54 0l-6.17 6.17c-.47.47-.73 1.1-.73 1.77 0 .66.26 1.29.73 1.76l.529.528A2.746 2.746 0 0 0 2.25 16.46v2A2.75 2.75 0 0 0 5 21.21h14a2.75 2.75 0 0 0 2.75-2.75v-2a2.75 2.75 0 0 0-2.331-2.708"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVote2Bold;
