import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthLanguageAiLight = ({
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
      strokeWidth={1.5}
      d="M12 3a9 9 0 1 1-8.444 5.879"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 11.896 3.222.614s1.78 1.827 2.469 2.103v2.47l-1.256 2.45M20.918 11.386c-2.443.796-1.774-1.226-3.316-1.845-.369-.159-3.179-1.025-3.295-.686-.741 2.032-1.309 1 .467 2.763 2.028 1.873-.31 2.604-.467 4.277-.148 1.57-1.439 2.973-.217 4.788M9.214 4.458l.09.242a3.34 3.34 0 0 0 1.97 1.974l.243.09-.242.09a3.34 3.34 0 0 0-1.971 1.974l-.09.242-.09-.242a3.34 3.34 0 0 0-1.97-1.974l-.243-.09.242-.09A3.34 3.34 0 0 0 9.125 4.7zM4.177 2.652A1.77 1.77 0 0 0 5.353 3.83 1.77 1.77 0 0 0 4.177 5.01 1.77 1.77 0 0 0 3 3.83a1.77 1.77 0 0 0 1.177-1.178"
    />
  </Svg>
);
export default IconlystEarthLanguageAiLight;
