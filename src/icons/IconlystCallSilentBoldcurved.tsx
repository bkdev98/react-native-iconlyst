import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.714 14.287h.02a.5.5 0 0 0 .353-.146l3.503-3.504a.5.5 0 0 0 .126-.495c-.206-.703.033-1.194.31-1.761.703-1.448.987-2.765-2.215-5.407-.765-.625-1.597-.857-2.466-.694-1.846.35-3.122 2.386-3.12 2.386-.837 1.183-1.542 3.985 3.13 9.446a.5.5 0 0 0 .36.175M21.874 16.038c-2.635-3.196-3.95-2.911-5.4-2.207-.917.447-1.715.833-3.568-.823l8.748-8.748a.75.75 0 0 0-1.06-1.061l-18.5 18.5a.75.75 0 0 0 1.06 1.06l5.854-5.853c4.417 4.27 7.343 5.327 9.14 5.327.98 0 1.624-.31 1.995-.58.02-.011 2.087-1.292 2.433-3.154.161-.868-.075-1.695-.702-2.461"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallSilentBoldcurved;
