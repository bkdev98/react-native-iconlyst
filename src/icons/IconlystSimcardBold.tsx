import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardBold = ({
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
      d="M12.749 16.42h1.053c.784 0 .9-.615.9-.98v-.76H12.75zM9.293 12.42v.76h1.955v-1.74h-1.055c-.812 0-.9.684-.9.98M9.293 15.44c0 .365.117.98.9.98h1.055v-1.74H9.293z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.203 15.439c0 1.461-.987 2.48-2.4 2.48h-3.61c-1.412 0-2.4-1.019-2.4-2.48v-3.02c0-1.46.988-2.48 2.4-2.48h3.61c1.412 0 2.4 1.02 2.4 2.48zm2.902-8.206-3.793-3.951a2.57 2.57 0 0 0-1.838-.782H8.406a4.225 4.225 0 0 0-4.221 4.219V17.28a4.225 4.225 0 0 0 4.22 4.22h7.19a4.225 4.225 0 0 0 4.22-4.22V9c0-.665-.253-1.291-.71-1.767"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.802 11.439h-1.054v1.74h1.954v-.76c0-.294-.088-.98-.9-.98"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSimcardBold;
